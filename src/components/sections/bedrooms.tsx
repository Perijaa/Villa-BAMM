"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/primitives";
import { assetPath } from "@/lib/asset-path";
import { villaData } from "@/data/villa-bamm";

export function BedroomsSection() {
  return (
    <section id="bedrooms" className="bg-warm/30 py-14 sm:py-20 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Accommodation"
            title="Five Suites, One Standard: Exceptional"
            description="Every bedroom features a king-size bed, en-suite bathroom, air conditioning, smart TV, and views that stay with you long after you leave."
            className="mb-8 sm:mb-12 lg:mb-16"
          />
        </FadeUp>

        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {/* Master suite — full width */}
          {villaData.bedrooms
            .filter((r) => r.isMaster)
            .map((room) => (
              <FadeUp key={room.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group grid overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg sm:rounded-2xl lg:grid-cols-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto">
                    <Image
                      src={assetPath(room.image)}
                      alt={`${room.name} — ${room.floor}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-col justify-center gap-3 p-5 sm:gap-4 sm:p-6 lg:p-10">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Master Suite</Badge>
                      <span className="text-xs text-muted-foreground">
                        {room.floor}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
                      {room.name}
                    </h3>
                    <p className="text-[0.8rem] leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-muted-foreground">
                      <span>{room.bed}</span>
                      <span className="size-1 rounded-full bg-border" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2 sm:pt-2">
                      {room.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-warm px-2.5 py-0.5 text-[0.65rem] font-medium text-warm-foreground sm:px-3 sm:py-1 sm:text-xs"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}

          {/* Other rooms — responsive grid */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
            {villaData.bedrooms
              .filter((r) => !r.isMaster)
              .map((room) => (
                <StaggerItem key={room.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg sm:rounded-2xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <Image
                        src={assetPath(room.image)}
                        alt={`${room.name} — ${room.floor}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-col gap-2.5 p-4 sm:gap-3 sm:p-6 lg:p-8">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
                          {room.name}
                        </h3>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {room.floor}
                        </span>
                      </div>
                      <p className="text-[0.8rem] leading-relaxed text-muted-foreground sm:text-sm">
                        {room.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span>{room.bed}</span>
                        <span className="size-1 rounded-full bg-border" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
                        {room.features.map((f) => (
                          <span
                            key={f}
                            className="rounded-full bg-warm px-2.5 py-0.5 text-[0.65rem] font-medium text-warm-foreground sm:px-3 sm:py-1 sm:text-xs"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
