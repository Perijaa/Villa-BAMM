"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/villa-bamm";

interface GalleryCarouselProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export function GalleryCarousel({ images, onImageClick }: GalleryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth
      : 1;
    const gap = 12;
    const idx = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(idx, images.length - 1));
  }, [images.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollToIndex = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el || !el.children[idx]) return;
    const child = el.children[idx] as HTMLElement;
    el.scrollTo({
      left: child.offsetLeft - 16,
      behavior: "smooth",
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX,
      scrollLeft: scrollRef.current?.scrollLeft ?? 0,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.pageX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const handleMouseUp = () => setIsDragging(false);

  const maxDots = 8;
  const showDots = images.length <= maxDots;

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1",
          "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          isDragging && "cursor-grabbing scroll-auto"
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isDragging) onImageClick(i);
            }}
            className="relative shrink-0 snap-center first:ml-4 last:mr-4 sm:first:ml-6 sm:last:mr-6"
            style={{ width: "78vw", maxWidth: "340px" }}
            aria-label={`View photo: ${image.alt}`}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
              style={{ backgroundColor: image.blurColor }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 active:scale-[1.02]"
                sizes="(max-width: 640px) 78vw, 340px"
                loading={i < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-left text-[0.7rem] font-medium text-white/90 line-clamp-2 sm:text-xs">
                {image.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Dot / pill indicators — tappable */}
      <div className="flex items-center justify-center gap-1.5 px-4">
        {showDots ? (
          images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === activeIndex
                  ? "h-2 w-6 bg-foreground"
                  : "size-2 bg-foreground/20"
              )}
              aria-label={`Go to image ${i + 1}`}
            />
          ))
        ) : (
          <span className="text-[0.65rem] font-medium tracking-wide text-muted-foreground">
            {activeIndex + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  );
}
