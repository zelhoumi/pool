"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/lib/constants";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-14 lg:py-28 bg-pool-mid/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {PROCESS.title}
        </h2>

        <div ref={ref} className="relative mt-10 sm:mt-16">
          {/* Connector line (desktop only) */}
          <div className="absolute top-10 left-0 right-0 hidden h-0.5 bg-crystal/30 lg:block" aria-hidden="true">
            <motion.div
              className="h-full bg-aqua origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView && !prefersReducedMotion ? { scaleX: 1 } : undefined}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          {/* Mobile: vertical timeline / Desktop: horizontal grid */}
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {PROCESS.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                animate={
                  isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : prefersReducedMotion ? {} : undefined
                }
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start gap-5 sm:flex-col sm:items-center sm:text-center"
              >
                {/* Mobile: vertical connector line */}
                {i < PROCESS.steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-px bg-aqua/20 sm:hidden" aria-hidden="true" />
                )}

                <motion.div
                  initial={prefersReducedMotion ? {} : { scale: 0.5 }}
                  animate={
                    isInView && !prefersReducedMotion ? { scale: 1 } : prefersReducedMotion ? {} : undefined
                  }
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.1, type: "spring", stiffness: 200 }}
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ocean/80 border border-aqua/20 text-aqua sm:mx-auto sm:h-20 sm:w-20"
                >
                  <span className="font-display text-xl font-bold sm:text-2xl">{step.number}</span>
                </motion.div>
                <div className="pt-1 sm:pt-0">
                  <h3 className="font-display text-base font-bold text-white sm:mt-4 sm:text-lg">{step.title}</h3>
                  <p className="mt-0.5 text-sm text-crystal/50 sm:mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
