"use client";

import { Check, X, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PRICING, SITE } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-pool-mid/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-display text-[22px] font-bold text-white sm:text-3xl lg:text-4xl">
            Nos Formules
          </h2>
          <p className="mt-2 text-center text-[13px] text-crystal/60 sm:mt-4 sm:text-base">
            Des tarifs transparents adaptés à vos besoins
          </p>
        </ScrollReveal>

        {/* Stack on mobile, grid on desktop */}
        <div className="mt-6 space-y-4 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          {PRICING.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative overflow-hidden rounded-2xl glass-card p-5 shadow-pool-glow sm:p-8 ${
                  plan.popular ? "ring-2 ring-aqua" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 rounded-bl-xl bg-aqua px-3 py-1 text-[11px] font-bold text-deep sm:px-4 sm:text-xs">
                    Populaire
                  </span>
                )}

                <h3 className="font-display text-lg font-bold text-white sm:text-xl">{plan.name}</h3>
                <p className="mt-0.5 text-[13px] text-crystal/50 sm:mt-1 sm:text-sm">{plan.desc}</p>

                <div className="mt-4 flex items-baseline gap-1 sm:mt-6">
                  <span className="font-display text-3xl font-bold text-aqua sm:text-4xl">{plan.price}</span>
                  <span className="text-[13px] text-crystal/50 sm:text-sm">{plan.unit}</span>
                </div>

                <ul className="mt-4 space-y-2.5 sm:mt-8 sm:space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-[13px] sm:gap-3 sm:text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-crystal/20" aria-hidden="true" />
                      )}
                      <span className={f.included ? "text-crystal/80" : "text-crystal/25"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${SITE.whatsapp}?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé par la formule ${plan.name} (${plan.price} ${plan.unit}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[15px] font-bold active:scale-[0.98] sm:mt-8 sm:rounded-lg sm:py-3 sm:text-sm sm:font-semibold ${
                    plan.popular
                      ? "bg-aqua text-deep"
                      : "bg-ocean/80 text-white"
                  }`}
                >
                  <MessageCircle className="h-5 w-5 sm:h-4 sm:w-4" />
                  Choisir cette formule
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
