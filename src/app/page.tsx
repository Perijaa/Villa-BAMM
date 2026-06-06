import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { HeroSection } from "@/components/sections/hero";
import { HighlightsSection } from "@/components/sections/highlights";
import { GalleryPreviewSection } from "@/components/sections/gallery-preview";
import { AboutSection } from "@/components/sections/about";
import { AmenitiesSection } from "@/components/sections/amenities";
import { BedroomsSection } from "@/components/sections/bedrooms";
import { LocationSection } from "@/components/sections/location";
import { ReviewsSection } from "@/components/sections/reviews";
import { ServicesSection } from "@/components/sections/services";
import { FaqSection } from "@/components/sections/faq";
import { BookingCtaSection } from "@/components/sections/booking-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <GalleryPreviewSection />
        <AboutSection />
        <AmenitiesSection />
        <BedroomsSection />
        <LocationSection />
        <ReviewsSection />
        <ServicesSection />
        <FaqSection />
        <BookingCtaSection />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
