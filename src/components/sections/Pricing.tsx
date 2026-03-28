"use client";

import { Check, X, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PRICING, SITE } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="py-14 lg:py-28 bg-pool-mid/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Nos Formules
          </h2>
          <p className="mt-3 text-center text-sm text-crystal/60 sm:mt-4 sm:text-base">
            Des tarifs transparents adaptés à vos besoins
          </p>
        </ScrollReveal>

        {/* Mobile: horizontal scroll / Desktop: grid */}
        <div className="mt-8 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-12 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1} className="min-w-[85vw] snap-center sm:min-w-0">
              <div
                className={`relative overflow-hidden rounded-2xl glass-card p-6 shadow-pool-glow sm:p-8 ${
                  plan.popular ? "ring-2 ring-aqua" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 rounded-bl-xl bg-aqua px-4 py-1.5 text-xs font-bold text-deep">
                    Populaire
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-crystal/50">{plan.desc}</p>

                <div className="mt-5 flex items-baseline gap-1 sm:mt-6">
                  <span className="font-display text-3xl font-bold text-aqua sm:text-4xl">{plan.price}</span>
                  <span className="text-sm text-crystal/50">{plan.unit}</span>
                </div>

                <ul className="mt-6 space-y-3 sm:mt-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-sm">
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
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition-colors min-h-14 sm:mt-8 sm:rounded-sm sm:py-3 sm:text-sm sm:font-semibold sm:min-h-12 ${
                    plan.popular
                      ? "bg-aqua text-deep hover:bg-aqua/90"
                      : "bg-ocean/80 text-white hover:bg-ocean"
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
