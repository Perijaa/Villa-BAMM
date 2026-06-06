"use client";

import { Star, Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/primitives";
import { villaData } from "@/data/villa-bamm";

export function ReviewsSection() {
  const avgRating =
    villaData.reviews.reduce((sum, r) => sum + r.rating, 0) /
    villaData.reviews.length;

  return (
    <section id="reviews" className="bg-warm/30 py-14 sm:py-20 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Guest Experiences"
            title="Memories That Last a Lifetime"
            className="mb-3 sm:mb-4 lg:mb-6"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mb-8 flex flex-col items-center gap-2 text-center sm:mb-12 lg:mb-16">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold sm:size-5" />
              ))}
            </div>
            <p className="text-[0.8rem] text-muted-foreground sm:text-sm">
              {avgRating.toFixed(1)} out of 5 &middot;{" "}
              {villaData.reviews.length} reviews
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
          {villaData.reviews.map((review) => (
            <StaggerItem key={review.author}>
              <div className="flex h-full flex-col gap-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:gap-5 sm:rounded-2xl sm:p-6 lg:p-8">
                <div className="flex items-start justify-between gap-3">
                  <Quote className="size-6 shrink-0 text-muted-foreground/20 sm:size-8" />
                  <span className="rounded-full bg-warm px-2.5 py-0.5 text-[0.6rem] font-medium text-warm-foreground sm:px-3 sm:py-1 sm:text-[0.65rem]">
                    {review.stayType}
                  </span>
                </div>
                <p className="flex-1 text-[0.8rem] leading-relaxed text-muted-foreground sm:text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-3 fill-gold text-gold sm:size-3.5" />
                  ))}
                </div>
                <div className="flex flex-col gap-0.5 border-t pt-3 sm:pt-4">
                  <span className="text-[0.8rem] font-semibold sm:text-sm">{review.author}</span>
                  <span className="text-[0.7rem] text-muted-foreground sm:text-xs">
                    {review.location} &middot; {review.date}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
