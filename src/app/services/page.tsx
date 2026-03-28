import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { getFaqJsonLd, getBreadcrumbJsonLd, getServicesJsonLd } from "@/lib/jsonld";
import ServicesHero from "./ServicesHero";
import AllServices from "@/components/sections/AllServices";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services Entretien Piscine Casablanca | Tarifs & Formules",
  description:
    "Découvrez tous nos services: nettoyage, traitement eau, abonnement mensuel. Tarifs transparents. Intervention Darbouazza, Bouskoura, Ain Diab et tout le Grand Casablanca.",
  alternates: {
    canonical: `${SITE.domain}/services`,
  },
};

export default function ServicesPage() {
  const faqJsonLd = getFaqJsonLd();
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Accueil", url: SITE.domain },
    { name: "Services", url: `${SITE.domain}/services` },
  ]);
  const servicesJsonLd = getServicesJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesHero />
      <AllServices />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
