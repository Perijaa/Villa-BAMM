"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/motion/primitives";
import { assetPath } from "@/lib/asset-path";
import { villaData } from "@/data/villa-bamm";

export function BookingCtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground sm:py-20 lg:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="size-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${assetPath("/images/hero.jpg")}')` }}
        />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:gap-8">
          <FadeUp>
            <span className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-primary-foreground/50 sm:text-xs sm:tracking-[0.3em]">
              Begin Your Escape
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Your Adriatic Story Starts Here
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="max-w-2xl text-[0.85rem] leading-relaxed text-primary-foreground/70 sm:text-base lg:text-lg">
              Book Villa Bamm directly and enjoy the best available rates,
              personal concierge support, and a seamless arrival experience.
              From €400 per night.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-[0.65rem] text-primary-foreground/50 sm:gap-6 sm:pt-2 sm:text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                Check-in {villaData.policies.checkIn}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                Check-out {villaData.policies.checkOut}
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="size-3.5" />
                {villaData.policies.securityDeposit} deposit
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex w-full flex-col items-center gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4 sm:pt-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full bg-white px-10 text-foreground hover:bg-white/90 sm:w-auto"
                  render={
                    <a
                      href={villaData.contact.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Check Availability
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-full border-primary-foreground/20 bg-transparent px-10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                  render={
                    <a href={`mailto:${villaData.contact.email}`} />
                  }
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p className="pt-1 text-[0.65rem] text-primary-foreground/35 sm:pt-2 sm:text-xs">
              Best price guaranteed &middot; Flexible cancellation &middot;
              Pool season: {villaData.policies.poolSeason}
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
