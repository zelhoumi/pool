"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Droplets,
  FlaskConical,
  Wrench,
  CalendarCheck,
  Snowflake,
  AlertTriangle,
  Check,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  FlaskConical,
  Wrench,
  CalendarCheck,
  Snowflake,
  AlertTriangle,
};

export default function AllServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-pool-floor/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                animate={
                  isInView && !prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : prefersReducedMotion
                      ? {}
                      : undefined
                }
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass-card p-5 shadow-pool-glow sm:p-8"
              >
                <span className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-aqua transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start gap-4 sm:block">
                  {Icon && <Icon className="h-8 w-8 shrink-0 text-aqua sm:h-10 sm:w-10" aria-hidden="true" />}
                  <div className="flex-1 min-w-0 sm:mt-4">
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">{service.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-crystal/50 sm:mt-2 sm:text-sm">{service.description}</p>
                  </div>
                </div>

                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-crystal/60 sm:text-sm">
                      <Check className="h-3.5 w-3.5 shrink-0 text-aqua mt-0.5 sm:h-4 sm:w-4" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-base font-bold text-aqua sm:mt-6 sm:text-lg">
                  à partir de {service.price}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
