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
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-pool-floor/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card p-8 shadow-pool-glow transition-transform duration-300 hover:-translate-y-2"
              >
                <span className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-aqua transition-transform duration-300 group-hover:scale-x-100" />

                {Icon && <Icon className="h-10 w-10 text-aqua" aria-hidden="true" />}

                <h3 className="mt-4 font-display text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-crystal/50">{service.description}</p>

                <ul className="mt-4 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-crystal/60">
                      <Check className="h-4 w-4 shrink-0 text-aqua mt-0.5" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-lg font-bold text-aqua">
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
