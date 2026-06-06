"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { villaData } from "@/data/villa-bamm";
import { cn } from "@/lib/utils";

export function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 sm:hidden",
        "transition-transform duration-500 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="border-t bg-background/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2.5 px-4 py-3 safe-area-bottom">
          <div className="mr-auto flex flex-col">
            <span className="text-xs font-semibold tracking-tight">
              From €400
              <span className="font-normal text-muted-foreground"> / night</span>
            </span>
            <span className="text-[0.6rem] text-muted-foreground">
              Direct booking &middot; Best rate
            </span>
          </div>
          <a
            href={`tel:${villaData.contact.phone}`}
            className="flex size-11 items-center justify-center rounded-full border text-foreground transition-colors active:bg-muted"
            aria-label="Call us"
          >
            <Phone className="size-4" />
          </a>
          <Button
            className="h-11 rounded-full px-5 text-[0.8rem] font-semibold shadow-md"
            render={
              <a
                href={villaData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
