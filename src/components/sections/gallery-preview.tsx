"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { GalleryMasonry } from "@/components/gallery/gallery-masonry";
import { GalleryCarousel } from "@/components/gallery/gallery-carousel";
import { Lightbox } from "@/components/gallery/lightbox";
import { FadeUp } from "@/components/motion/primitives";
import { villaData } from "@/data/villa-bamm";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All" },
  { key: "pool", label: "Pool" },
  { key: "interior", label: "Interior" },
  { key: "bedroom", label: "Bedrooms" },
  { key: "terrace", label: "Terrace" },
  { key: "view", label: "Views" },
  { key: "exterior", label: "Exterior" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

export function GalleryPreviewSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filterScrollRef = useRef<HTMLDivElement>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return villaData.gallery;
    return villaData.gallery.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const allImages = villaData.gallery;

  const handleImageClick = useCallback(
    (indexInFiltered: number) => {
      const clickedImage = filteredImages[indexInFiltered];
      const globalIndex = allImages.indexOf(clickedImage);
      setLightboxIndex(globalIndex >= 0 ? globalIndex : indexInFiltered);
    },
    [filteredImages, allImages]
  );

  const handleLightboxClose = useCallback(() => setLightboxIndex(null), []);
  const handleLightboxNavigate = useCallback(
    (index: number) => setLightboxIndex(index),
    []
  );

  return (
    <>
      <section id="gallery" className="py-14 sm:py-20 lg:py-32">
        <Container>
          <FadeUp>
            <SectionHeader
              label="Gallery"
              title="Every Angle, Unforgettable"
              description="A curated visual journey through Villa Bamm — from sunrise over the islands to evening by the pool."
              className="mb-6 sm:mb-8 lg:mb-12"
            />
          </FadeUp>

          {/* Category filter pills — horizontally scrollable on mobile, wrapped on desktop */}
          <FadeUp delay={0.15}>
            <div
              ref={filterScrollRef}
              className={cn(
                "mb-6 flex gap-2 overflow-x-auto pb-1 sm:mb-8",
                "lg:flex-wrap lg:items-center lg:justify-center lg:overflow-visible lg:pb-0",
                "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              )}
            >
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-300 sm:px-5",
                    "active:scale-95",
                    activeCategory === cat.key
                      ? "bg-foreground text-background shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeUp>
        </Container>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <GalleryCarousel
            images={filteredImages}
            onImageClick={handleImageClick}
          />
        </div>

        {/* Desktop masonry */}
        <Container className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <GalleryMasonry
                images={filteredImages}
                onImageClick={handleImageClick}
              />
            </motion.div>
          </AnimatePresence>
        </Container>

        {/* Photo count */}
        <Container>
          <FadeUp delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-[0.8rem] text-muted-foreground sm:mt-8 sm:text-sm">
              <Camera className="size-4" />
              <span>
                {filteredImages.length} of {allImages.length} photos
                {activeCategory !== "all" && (
                  <>
                    {" "}
                    &middot;{" "}
                    <button
                      onClick={() => setActiveCategory("all")}
                      className="font-medium text-foreground underline underline-offset-4"
                    >
                      Show all
                    </button>
                  </>
                )}
              </span>
            </div>
          </FadeUp>
        </Container>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={handleLightboxClose}
          onNavigate={handleLightboxNavigate}
        />
      )}
    </>
  );
}
