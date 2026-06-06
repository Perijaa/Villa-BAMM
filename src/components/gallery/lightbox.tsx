"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/villa-bamm";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);

  const image = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1);
  }, [hasPrev, currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1);
  }, [hasNext, currentIndex, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goPrev();
          break;
        case "ArrowRight":
          goNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    const threshold = 60;
    if (touchDeltaX.current > threshold) goPrev();
    else if (touchDeltaX.current < -threshold) goNext();
    touchDeltaX.current = 0;
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${images.length}: ${image.alt}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 lg:p-6">
        <span className="text-sm font-medium text-white/70">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Close lightbox"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Navigation arrows — desktop */}
      {hasPrev && (
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110 lg:flex size-12"
          aria-label="Previous photo"
        >
          <ChevronLeft className="size-6" />
        </button>
      )}
      {hasNext && (
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110 lg:flex size-12"
          aria-label="Next photo"
        >
          <ChevronRight className="size-6" />
        </button>
      )}

      {/* Image */}
      <div className="relative flex size-full items-center justify-center p-4 pt-16 pb-24 lg:px-20 lg:pt-20 lg:pb-28">
        <div
          className="relative size-full animate-in zoom-in-95 fade-in duration-300"
          key={currentIndex}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-8 bg-gradient-to-t from-black/60 to-transparent lg:px-6 lg:pb-6">
        <p className="text-center text-sm font-light text-white/80 lg:text-base">
          {image.alt}
        </p>

        {/* Thumbnail strip — desktop */}
        <div className="mt-4 hidden justify-center gap-1.5 lg:flex">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={cn(
                "relative h-12 w-16 overflow-hidden rounded-md transition-all",
                i === currentIndex
                  ? "ring-2 ring-white opacity-100 scale-105"
                  : "opacity-40 hover:opacity-70"
              )}
              aria-label={`Go to photo ${i + 1}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Dot indicators — mobile */}
        <div className="mt-3 flex justify-center gap-1.5 lg:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={cn(
                "rounded-full transition-all",
                i === currentIndex
                  ? "size-2 bg-white"
                  : "size-1.5 bg-white/40"
              )}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
