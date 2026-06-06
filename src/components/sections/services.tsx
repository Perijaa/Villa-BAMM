"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CookingPot, Sparkles, Anchor } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/primitives";
import { villaData } from "@/data/villa-bamm";

const serviceIconMap: Record<string, React.ElementType> = {
  shoppingbag: ShoppingBag,
  chefhat: CookingPot,
  sparkles: Sparkles,
  anchor: Anchor,
};

export function ServicesSection() {
  return (
    <section className="bg-warm/30 py-14 sm:py-20 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Bespoke Experiences"
            title="Elevate Your Stay"
            description="Hand-picked services to transform a great holiday into an extraordinary one — arranged by our concierge before or during your stay."
            className="mb-8 sm:mb-12 lg:mb-16"
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {villaData.extraServices.map((service) => {
            const Icon = serviceIconMap[service.iconKey] || Sparkles;
            return (
              <StaggerItem key={service.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:gap-4 sm:rounded-2xl sm:p-6 lg:p-8"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-warm transition-transform duration-300 group-hover:scale-110 sm:size-12">
                    <Icon className="size-4 text-warm-foreground sm:size-5" />
                  </div>
                  <h3 className="font-heading text-[0.9rem] font-semibold tracking-tight sm:text-lg">
                    {service.name}
                  </h3>
                  <p className="text-[0.75rem] leading-relaxed text-muted-foreground sm:text-sm">
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <div className="mt-8 text-center sm:mt-10">
            <p className="text-[0.8rem] text-muted-foreground sm:text-sm">
              All services arranged through our concierge.{" "}
              <a
                href={`mailto:${villaData.contact.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                Enquire now
              </a>
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
