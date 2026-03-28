import { SITE, SERVICES, FAQ } from "./constants";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE.domain,
    name: SITE.name,
    description:
      "Service professionnel de nettoyage et entretien de piscines à Darbouazza, Casablanca. Devis gratuit, intervention 24h.",
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Darbouazza",
      addressLocality: "Casablanca",
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    openingHours: "Mo-Sa 08:00-19:00",
    priceRange: "250-1800 MAD",
    image: `${SITE.domain}/og-image.jpg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "87",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Entretien Piscine",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };
}

export function getServicesJsonLd() {
  return SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.domain,
    },
    areaServed: {
      "@type": "City",
      name: "Casablanca",
    },
    offers: {
      "@type": "Offer",
      price: s.price,
      priceCurrency: "MAD",
    },
  }));
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
