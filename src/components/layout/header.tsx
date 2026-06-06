"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { villaData } from "@/data/villa-bamm";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <a
            href="#"
            className={cn(
              "font-heading text-lg font-semibold tracking-tight transition-colors sm:text-xl lg:text-2xl",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            {villaData.name}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {villaData.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:opacity-70",
                    isScrolled ? "text-foreground" : "text-white/90"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              size="sm"
              className={cn(
                "rounded-full px-6 transition-all",
                !isScrolled &&
                  "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
              )}
              render={<a href={villaData.contact.bookingUrl} target="_blank" rel="noopener noreferrer" />}
            >
              Book Now
            </Button>
          </div>

          {/* Hamburger — 44×44 touch target (Apple HIG) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden flex items-center justify-center size-11 -mr-1.5 rounded-lg transition-colors active:bg-white/10",
              isScrolled ? "text-foreground" : "text-white"
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu — full screen overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 sm:top-16 bg-background/98 backdrop-blur-lg animate-in fade-in duration-200 z-40">
          <Container>
            <ul className="flex flex-col gap-1 pt-6 pb-8">
              {villaData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center h-12 text-base font-medium tracking-wide text-foreground transition-colors active:text-muted-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  className="w-full h-12 rounded-full text-base"
                  render={<a href={villaData.contact.bookingUrl} target="_blank" rel="noopener noreferrer" />}
                >
                  Book Now
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
