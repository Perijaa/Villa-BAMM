"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/villa-bamm";

interface GalleryMasonryProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const masonryLayout: { colSpan: number; rowSpan: number }[] = [
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
];

export function GalleryMasonry({ images, onImageClick }: GalleryMasonryProps) {
  return (
    <div className="grid auto-rows-[200px] grid-cols-4 gap-3 lg:auto-rows-[220px] lg:gap-4">
      {images.map((image, i) => {
        const layout = masonryLayout[i % masonryLayout.length];
        return (
          <button
            key={i}
            onClick={() => onImageClick(i)}
            className={cn(
              "group relative overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              layout.colSpan === 2 && "col-span-2",
              layout.rowSpan === 2 && "row-span-2"
            )}
            style={{ backgroundColor: image.blurColor }}
            aria-label={`View photo: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes={
                layout.colSpan === 2
                  ? "(max-width: 1024px) 50vw, 600px"
                  : "(max-width: 1024px) 25vw, 300px"
              }
              loading={i < 6 ? "eager" : "lazy"}
              quality={80}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Caption on hover */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-white drop-shadow-md">
                {image.alt}
              </p>
              <span className="mt-1 inline-block text-xs capitalize text-white/70">
                {image.category}
              </span>
            </div>

            {/* Subtle permanent gradient for depth */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/15 to-transparent" />
          </button>
        );
      })}
    </div>
  );
}
