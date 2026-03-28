"use client";

import Image from "next/image";
import { ShieldCheck, Award, Clock, ThumbsUp } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Award,
  Clock,
  ThumbsUp,
};

export default function WhyUs() {
  return (
    <section className="py-14 lg:py-28 bg-pool-floor/50" id="pourquoi-nous">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <ScrollReveal direction="left" distance={60}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80"
                alt="Technicien AquaPure Maroc entretenant une piscine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-aqua/90 px-4 py-2 text-xs font-bold text-deep backdrop-blur-sm sm:text-sm">
                Expertise locale depuis Darbouazza
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" distance={60}>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {WHY_US.title}
            </h2>

            <div className="mt-8 space-y-6">
              {WHY_US.points.map((point, i) => {
                const Icon = iconMap[point.icon];
                return (
                  <ScrollReveal key={point.title} delay={i * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua/10 border border-aqua/20">
                        {Icon && <Icon className="h-6 w-6 text-aqua" aria-hidden="true" />}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">{point.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-crystal/50">{point.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
