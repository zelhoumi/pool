"use client";

import { MessageCircle, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CTA as CTA_DATA, SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-mesh"
        style={{
          background: "linear-gradient(135deg, #0d3b6e, #061220, #00b4d8, #0a1e3d)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-[22px] font-bold text-white sm:text-3xl lg:text-4xl">
            {CTA_DATA.title}
          </h2>
          <p className="mt-3 text-[14px] text-white/70 sm:mt-4 sm:text-lg">{CTA_DATA.subtitle}</p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-gold px-6 py-4 text-[15px] font-bold text-deep active:scale-[0.98] sm:rounded-lg sm:px-8 sm:py-3.5 sm:text-sm sm:font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              {CTA_DATA.whatsapp}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2.5 rounded-2xl border-2 border-white/25 px-6 py-4 text-[15px] font-bold text-white active:bg-white/10 sm:rounded-lg sm:border sm:px-8 sm:py-3.5 sm:text-sm sm:font-semibold"
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
