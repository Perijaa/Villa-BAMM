"use client";

import Image from "next/image";
import { MapPin, Plane, Anchor, Clock, Car, Store, Waves } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp, StaggerContainer, StaggerItem, Parallax } from "@/components/motion/primitives";
import { assetPath } from "@/lib/asset-path";
import { villaData } from "@/data/villa-bamm";
import type { Distance } from "@/data/villa-bamm";

const distanceIconMap: Record<Distance["iconKey"], React.ElementType> = {
  plane: Plane, anchor: Anchor, pin: MapPin, clock: Clock,
  car: Car, store: Store, waves: Waves,
};

export function LocationSection() {
  const loc = villaData.location_section;

  return (
    <section id="location" className="py-14 sm:py-20 lg:py-32">
      <Container>
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6 sm:gap-8">
            <FadeUp>
              <SectionHeader
                label="Location"
                title={loc.headline}
                description={loc.description}
                align="left"
              />
            </FadeUp>

            <StaggerContainer className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {loc.distances.map((d) => {
                const Icon = distanceIconMap[d.iconKey];
                return (
                  <StaggerItem key={d.label}>
                    <div className="flex items-center gap-2.5 rounded-lg bg-warm/50 p-3 transition-colors duration-300 hover:bg-warm sm:gap-3 sm:rounded-xl sm:p-3.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background shadow-sm sm:size-9">
                        <Icon className="size-3.5 text-muted-foreground sm:size-4" />
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate text-[0.8rem] font-semibold sm:text-sm">{d.value}</span>
                        <span className="truncate text-[0.65rem] text-muted-foreground sm:text-xs">
                          {d.label}
                        </span>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-4">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Nearby Experiences
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4">
                  {loc.attractions.map((a) => (
                    <div
                      key={a.name}
                      className="flex flex-col gap-1 rounded-lg border bg-card p-3.5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:rounded-xl sm:p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-[0.8rem] font-semibold sm:text-sm">{a.name}</h4>
                        <span className="shrink-0 text-[0.65rem] text-muted-foreground sm:text-xs">
                          {a.distance}
                        </span>
                      </div>
                      <p className="text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs">
                        {a.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <div className="sticky top-20 flex flex-col gap-4 sm:top-24">
              <Parallax speed={0.1}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg sm:rounded-2xl sm:aspect-square lg:aspect-[4/5]">
                  <Image
                    src={assetPath("/images/about/omis-overview.jpg")}
                    alt="Villa Bamm location — Omiš, Dalmatia, Croatia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:px-4 sm:py-3">
                    <MapPin className="size-4 shrink-0 text-foreground" />
                    <span className="text-xs font-medium text-foreground sm:text-sm">
                      {villaData.address}
                    </span>
                  </div>
                </div>
              </Parallax>
              <p className="text-center text-xs text-muted-foreground">
                {villaData.address} &middot; {villaData.region}
              </p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
