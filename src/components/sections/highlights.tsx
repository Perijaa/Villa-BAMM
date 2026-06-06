"use client";

import { Users, BedDouble, Bath, Waves, Mountain, Maximize } from "lucide-react";
import { Container } from "@/components/shared/container";
import { StaggerContainer, StaggerItem } from "@/components/motion/primitives";
import { villaData } from "@/data/villa-bamm";
import type { VillaHighlight } from "@/data/villa-bamm";

const iconMap: Record<VillaHighlight["iconKey"], React.ElementType> = {
  guests: Users,
  bedrooms: BedDouble,
  bathrooms: Bath,
  pool: Waves,
  view: Mountain,
  area: Maximize,
};

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-12 sm:py-16 lg:py-24">
      <Container>
        <StaggerContainer
          className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:grid-cols-6"
          staggerDelay={0.08}
        >
          {villaData.highlights.map((item) => {
            const Icon = iconMap[item.iconKey];
            return (
              <StaggerItem key={item.label}>
                <div className="group flex flex-col items-center gap-2 rounded-xl bg-warm/50 p-3.5 text-center transition-all duration-300 hover:bg-warm hover:shadow-md sm:gap-3 sm:rounded-2xl sm:p-5 lg:p-6">
                  <div className="flex size-9 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-300 group-hover:scale-110 sm:size-11">
                    <Icon className="size-4 text-muted-foreground sm:size-5" />
                  </div>
                  <span className="font-heading text-base font-semibold tracking-tight sm:text-lg lg:text-xl">
                    {item.value}
                  </span>
                  <span className="text-[0.55rem] font-medium tracking-widest uppercase text-muted-foreground sm:text-[0.65rem]">
                    {item.label}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
