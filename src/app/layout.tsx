import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { createMetadata } from "@/lib/metadata";
import { getLocalBusinessJsonLd } from "@/lib/jsonld";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import WaterCaustics from "@/components/ui/WaterCaustics";
import Bubbles from "@/components/ui/Bubbles";
import WaterSurface from "@/components/ui/WaterSurface";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <WaterCaustics />
        <Bubbles />
        <WaterSurface />
        <Navbar />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
