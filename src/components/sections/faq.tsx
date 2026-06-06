"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/motion/primitives";
import { villaData } from "@/data/villa-bamm";

export function FaqSection() {
  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <SectionHeader
              label="Good to Know"
              title="Questions Before You Arrive"
              description="Everything you need to plan the perfect stay at Villa Bamm."
              className="mb-8 sm:mb-12 lg:mb-16"
            />
          </FadeUp>

          <FadeUp delay={0.15}>
            <Accordion className="flex flex-col gap-2.5 sm:gap-3">
              {villaData.faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-lg border bg-card px-4 shadow-sm sm:rounded-xl sm:px-6"
                >
                  <AccordionTrigger className="py-4 text-left text-[0.8rem] font-semibold hover:no-underline sm:py-5 sm:text-sm md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-[0.8rem] leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-6 rounded-lg bg-warm/50 p-4 text-center sm:mt-8 sm:rounded-xl sm:p-6">
              <p className="text-[0.8rem] text-muted-foreground sm:text-sm">
                Still have questions?{" "}
                <a
                  href={`mailto:${villaData.contact.email}`}
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  Get in touch
                </a>{" "}
                — we typically respond within a few hours.
              </p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
