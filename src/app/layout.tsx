import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Villa Bamm — Luxury Villa with Sea Views in Omiš, Croatia",
  description:
    "A private luxury retreat above Omiš with 5 en-suite bedrooms, heated infinity pool, panoramic Adriatic views, and 280 m² of refined living space. Sleeps 10 guests.",
  keywords: [
    "luxury villa Croatia",
    "Omiš villa rental",
    "Dalmatia holiday home",
    "heated pool villa",
    "sea view villa Croatia",
    "Split villa rental",
    "Mediterranean luxury accommodation",
    "private pool villa Adriatic",
  ],
  openGraph: {
    title: "Villa Bamm — Luxury Villa with Sea Views in Omiš, Croatia",
    description:
      "5 bedrooms, heated pool, panoramic Adriatic views. A private luxury retreat on the Dalmatian coast. From €400/night.",
    type: "website",
    locale: "en_US",
    siteName: "Villa Bamm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Bamm — Luxury Villa in Omiš, Croatia",
    description:
      "5 bedrooms, heated pool, panoramic Adriatic views. From €400/night.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
