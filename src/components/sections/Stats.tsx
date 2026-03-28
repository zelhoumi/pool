"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-ocean/40 py-6 border-y border-aqua/10 sm:py-10" aria-label="Statistiques">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center py-2 sm:py-0">
              <p className="font-display text-2xl font-bold text-aqua sm:text-4xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-white/60 sm:mt-1 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
