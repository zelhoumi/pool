"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FAQ as FAQ_DATA } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 lg:py-28 bg-pool-floor/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-display text-3xl font-bold text-white lg:text-4xl">
            Questions Fréquentes
          </h2>
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {FAQ_DATA.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl glass-card shadow-pool-glow">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left min-h-12"
                  aria-expanded={openIndex === i}
                >
                  <span className="pr-4 text-sm font-semibold text-white sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-aqua transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { height: "auto", opacity: 1 }
                      }
                      exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-crystal/60">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
