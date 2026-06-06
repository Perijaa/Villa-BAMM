"use client";

import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/motion/primitives";
import { assetPath } from "@/lib/asset-path";
import { villaData } from "@/data/villa-bamm";

export function AboutSection() {
  return (
    <section id="about" className="bg-warm/30 py-14 sm:py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-5 sm:gap-6">
            <FadeUp>
              <SectionHeader
                label="The Villa"
                title={villaData.about.headline}
                align="left"
              />
            </FadeUp>
            <div className="flex flex-col gap-4 sm:gap-5">
              {villaData.about.paragraphs.map((paragraph, i) => (
                <FadeUp key={i} delay={0.1 + i * 0.1}>
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                    {paragraph}
                  </p>
                </FadeUp>
              ))}
            </div>
            <StaggerContainer
              className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4 sm:gap-6 sm:pt-4"
              staggerDelay={0.08}
            >
              {villaData.about.stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="flex flex-col gap-1">
                    <span className="font-heading text-xl font-semibold sm:text-2xl lg:text-3xl">
                      {stat.value}
                    </span>
                    <span className="text-[0.6rem] font-medium tracking-widest uppercase text-muted-foreground sm:text-[0.65rem]">
                      {stat.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeUp delay={0.2}>
            <div className="relative">
              <Parallax speed={0.15}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg sm:aspect-[4/5]">
                  <Image
                    src={assetPath("/images/about/pool-terrace.jpg")}
                    alt="Villa Bamm pool terrace with panoramic sea views"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Parallax>
              <FadeIn delay={0.5}>
                <div className="absolute -bottom-6 -left-6 hidden overflow-hidden rounded-2xl border-4 border-background shadow-lg lg:block">
                  <div className="relative aspect-[4/3] w-44">
                    <Image
                      src={assetPath("/images/about/living-area.jpg")}
                      alt="Open-plan living area with sea views"
                      fill
                      className="object-cover"
                      sizes="176px"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
