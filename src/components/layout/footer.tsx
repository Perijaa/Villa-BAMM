import { Camera, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { villaData } from "@/data/villa-bamm";

export function Footer() {
  return (
    <footer className="bg-primary pb-20 text-primary-foreground sm:pb-0">
      <Container>
        <div className="grid gap-8 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-1">
            <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              {villaData.name}
            </h3>
            <p className="text-[0.8rem] leading-relaxed text-primary-foreground/70 sm:text-sm">
              {villaData.tagline}
            </p>
            <p className="text-[0.7rem] text-primary-foreground/50 sm:text-xs">
              {villaData.address}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-[0.8rem] font-semibold tracking-wide uppercase sm:text-sm">
              Explore
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {villaData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex h-8 items-center text-[0.8rem] text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:h-auto sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-[0.8rem] font-semibold tracking-wide uppercase sm:text-sm">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              <li>
                <a
                  href={`mailto:${villaData.contact.email}`}
                  className="flex items-center gap-2 py-0.5 text-[0.8rem] text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:text-sm"
                >
                  <Mail className="size-4 shrink-0" />
                  <span className="truncate">{villaData.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${villaData.contact.phone}`}
                  className="flex items-center gap-2 py-0.5 text-[0.8rem] text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:text-sm"
                >
                  <Phone className="size-4 shrink-0" />
                  {villaData.contact.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[0.8rem] text-primary-foreground/70 sm:text-sm">
                  <MapPin className="size-4 shrink-0" />
                  {villaData.location}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-[0.8rem] font-semibold tracking-wide uppercase sm:text-sm">
              Follow Us
            </h4>
            <a
              href="#"
              className="flex items-center gap-2 text-[0.8rem] text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:text-sm"
              aria-label="Instagram"
            >
              <Camera className="size-4" />
              {villaData.contact.instagram}
            </a>
            <div className="flex flex-col gap-2 pt-3 sm:pt-4">
              <h4 className="text-[0.8rem] font-semibold tracking-wide uppercase sm:text-sm">
                Policies
              </h4>
              <p className="text-[0.65rem] text-primary-foreground/50 sm:text-xs">
                Check-in: {villaData.policies.checkIn} &middot; Check-out:{" "}
                {villaData.policies.checkOut}
              </p>
              <p className="text-[0.65rem] text-primary-foreground/50 sm:text-xs">
                Pool season: {villaData.policies.poolSeason}
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row sm:gap-4 sm:py-8">
          <p className="text-[0.65rem] text-primary-foreground/50 sm:text-xs">
            &copy; {new Date().getFullYear()} {villaData.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[0.65rem] text-primary-foreground/50 transition-colors hover:text-primary-foreground/70 sm:text-xs"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[0.65rem] text-primary-foreground/50 transition-colors hover:text-primary-foreground/70 sm:text-xs"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
