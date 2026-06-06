"use client";

import {
  Wifi, AirVent, Tv, UtensilsCrossed, WashingMachine, Car, Waves, Sun,
  Beef, TreePalm, ShowerHead, Coffee, Baby, Gamepad2, Lock, Shield,
  Wind, BedDouble, Shirt, Sparkles, Activity, ShoppingBag, Anchor,
  CookingPot, Refrigerator, CupSoda,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/primitives";
import { villaData } from "@/data/villa-bamm";

const iconMap: Record<string, React.ElementType> = {
  waves: Waves, sparkles: Sparkles, sun: Sun, palmtree: TreePalm,
  showerhead: ShowerHead, utensils: UtensilsCrossed, beef: Beef, baby: Baby,
  activity: Activity, airvent: AirVent, wifi: Wifi, tv: Tv, gamepad: Gamepad2,
  lock: Lock, shield: Shield, coffee: Coffee, refrigerator: Refrigerator,
  cup: CupSoda, washingmachine: WashingMachine, shirt: Shirt, wind: Wind,
  bed: BedDouble, car: Car, shoppingbag: ShoppingBag, chefhat: CookingPot,
  anchor: Anchor,
};

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-14 sm:py-20 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Amenities"
            title="Curated for Comfort"
            description="Every detail at Villa Bamm has been considered — from the DeLonghi espresso to the heated hydro-massage pool."
            className="mb-8 sm:mb-12 lg:mb-16"
          />
        </FadeUp>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {villaData.amenities.map((group) => (
            <StaggerItem key={group.category}>
              <div className="flex h-full flex-col gap-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:gap-5 sm:rounded-2xl sm:p-6 lg:p-8">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {group.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 sm:gap-3">
                  {group.items.map((item) => {
                    const Icon = iconMap[item.iconKey] || Sun;
                    return (
                      <li key={item.name} className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-muted-foreground" />
                        <span className="text-[0.8rem] sm:text-sm">{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
