"use client";

import { MessageCircle, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CTA as CTA_DATA, SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-mesh"
        style={{
          background: "linear-gradient(135deg, #0d3b6e, #061220, #00b4d8, #0a1e3d)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            {CTA_DATA.title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{CTA_DATA.subtitle}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-105 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              {CTA_DATA.whatsapp}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              {CTA_DATA.call}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
