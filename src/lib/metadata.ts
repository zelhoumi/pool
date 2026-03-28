import type { Metadata } from "next";
import { SITE } from "./constants";

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE.domain),
    title: {
      default: "Entretien Piscine Darbouazza | AquaPure Maroc",
      template: "%s | AquaPure Maroc",
    },
    description:
      "Service professionnel de nettoyage et entretien de piscines à Darbouazza, Casablanca. Devis gratuit 24h. Traitement eau, nettoyage complet, abonnement mensuel.",
    keywords: [
      "entretien piscine Darbouazza",
      "nettoyage piscine Casablanca",
      "traitement eau piscine Maroc",
      "vidange piscine Bouskoura",
      "piscine eau verte Casablanca",
    ],
    authors: [{ name: "AquaPure Maroc" }],
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url: SITE.domain,
      siteName: SITE.name,
      title: "Entretien Piscine Darbouazza | AquaPure Maroc",
      description:
        "Service professionnel de nettoyage et entretien de piscines à Darbouazza, Casablanca. Devis gratuit 24h.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "AquaPure Maroc — Entretien Piscine Professionnel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Entretien Piscine Darbouazza | AquaPure Maroc",
      description:
        "Service professionnel de nettoyage et entretien de piscines à Darbouazza, Casablanca.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE.domain,
    },
    ...overrides,
  };
}
