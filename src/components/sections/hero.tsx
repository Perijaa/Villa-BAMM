"use client";

import Image from "next/image";
import {
  ArrowDown,
  MapPin,
  Users,
  BedDouble,
  Waves,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/motion/primitives";
import { assetPath } from "@/lib/asset-path";
import { villaData } from "@/data/villa-bamm";

const badges = [
  { icon: Users, label: "10 Guests" },
  { icon: BedDouble, label: "5 Bedrooms" },
  { icon: Waves, label: "Heated Pool" },
  { icon: Eye, label: "Sea View" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function heroFadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  };
}

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-svh flex-col overflow-hidden"
      aria-label="Villa Bamm — luxury villa hero"
    >
      {/* Background — Framer Motion parallax */}
      <HeroParallax className="absolute inset-0">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src={assetPath("/images/hero.jpg")}
            alt="Villa Bamm infinity pool and sun terrace overlooking the Adriatic Sea, Dalmatian islands, and the ancient town of Omiš"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </HeroParallax>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.3))]" />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 pt-16 pb-36 sm:px-6 sm:pt-20 sm:pb-32">
        <div className="flex w-full max-w-4xl flex-col items-center gap-5 text-center text-white sm:gap-7 md:gap-8">
          {/* Location badge */}
          <motion.div
            {...heroFadeUp(0.2)}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 backdrop-blur-md sm:gap-2.5 sm:px-5 sm:py-2"
          >
            <MapPin className="size-3 text-white/70 sm:size-3.5" />
            <span className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-white/90 sm:text-[0.7rem] sm:tracking-[0.25em]">
              {villaData.location}
            </span>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="h-px w-10 bg-white/30 sm:w-12"
          />

          {/* Villa name — responsive scaling */}
          <motion.h1
            {...heroFadeUp(0.6)}
            className="font-heading text-[2.75rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          >
            {villaData.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...heroFadeUp(0.8)}
            className="text-sm font-light tracking-wide text-white/60 sm:text-base md:text-lg"
          >
            {villaData.tagline}
          </motion.p>

          {/* Subtitle — hidden on very small screens for cleaner feel */}
          <motion.p
            {...heroFadeUp(0.95)}
            className="hidden max-w-2xl text-sm leading-relaxed text-white/50 sm:block sm:text-base lg:text-lg lg:leading-relaxed"
          >
            {villaData.subtitle}
          </motion.p>

          {/* Property badges — 2×2 grid on mobile, row on desktop */}
          <motion.div
            {...heroFadeUp(1.1)}
            className="grid grid-cols-2 gap-2 pt-1 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 sm:pt-2"
          >
            {badges.map((badge) => (
              <motion.div
                key={badge.label}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 backdrop-blur-sm sm:px-4"
              >
                <badge.icon className="size-3.5 text-white/60" />
                <span className="text-[0.7rem] font-medium tracking-wide text-white/80 sm:text-xs">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons — full-width stacked on mobile */}
          <motion.div
            {...heroFadeUp(1.3)}
            className="flex w-full flex-col items-center gap-3 pt-3 sm:w-auto sm:flex-row sm:gap-4 sm:pt-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="h-12 w-full rounded-full bg-white px-10 text-sm font-semibold tracking-wide text-foreground shadow-lg shadow-black/20 transition-all hover:bg-white/95 hover:shadow-xl hover:shadow-black/25 sm:w-auto sm:px-12"
                render={
                  <a
                    href={villaData.contact.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Check Availability
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-full border-white/20 bg-white/[0.06] px-10 text-sm font-medium tracking-wide text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.12] hover:text-white sm:w-auto sm:px-12"
                render={<a href="#about" />}
              >
                Explore Villa
              </Button>
            </motion.div>
          </motion.div>

          {/* Price anchor */}
          <motion.p
            {...heroFadeUp(1.5)}
            className="text-[0.625rem] tracking-wider text-white/30 sm:text-[0.7rem]"
          >
            From €400 / night &middot; Direct booking guarantee
          </motion.p>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease }}
        className="absolute inset-x-0 bottom-0 z-10"
      >
        <div className="h-24 bg-gradient-to-t from-black/60 to-transparent sm:h-32" />
        <div className="bg-black/40 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5">
            {/* Quick stats — desktop */}
            <div className="hidden items-center gap-6 text-[0.65rem] font-medium tracking-[0.15em] uppercase text-white/50 md:flex">
              <span>280 m² Living Space</span>
              <span className="size-0.5 rounded-full bg-white/30" />
              <span>5 En-suite Bedrooms</span>
              <span className="size-0.5 rounded-full bg-white/30" />
              <span>36 m² Heated Pool</span>
              <span className="size-0.5 rounded-full bg-white/30" />
              <span>Panoramic Sea Views</span>
            </div>
            {/* Quick stats — mobile */}
            <div className="flex items-center gap-3 text-[0.625rem] font-medium tracking-[0.12em] uppercase text-white/50 md:hidden">
              <span>280 m²</span>
              <span className="size-0.5 rounded-full bg-white/30" />
              <span>5 Suites</span>
              <span className="size-0.5 rounded-full bg-white/30" />
              <span>Pool</span>
              <span className="size-0.5 rounded-full bg-white/30" />
              <span>Sea View</span>
            </div>
            <a
              href="#highlights"
              className="animate-hero-scroll group flex items-center gap-2 text-white/50 transition-colors hover:text-white/80"
              aria-label="Scroll to discover more"
            >
              <span className="hidden text-[0.6rem] font-medium tracking-[0.2em] uppercase sm:inline">
                Discover
              </span>
              <ArrowDown className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
