"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { ZONES } from "@/lib/constants";

export default function Zones() {
  return (
    <section className="bg-ocean/30 py-12 sm:py-20 lg:py-28 border-y border-aqua/5">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-[22px] font-bold text-white sm:text-3xl lg:text-4xl">
            {ZONES.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
            {ZONES.areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-aqua/20 bg-aqua/10 px-4 py-2 text-[13px] font-medium text-crystal sm:px-5 sm:text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
