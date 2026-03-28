"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Droplets, FlaskConical, Wrench } from "lucide-react";
import { SERVICES, SERVICES_PREVIEW } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  FlaskConical,
  Wrench,
};

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const top3 = SERVICES.slice(0, 3);

  return (
    <section className="py-14 lg:py-28 bg-pool-mid/50" id="services">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {SERVICES_PREVIEW.title}
        </h2>

        <div ref={ref} className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {top3.map((service, i) => {
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
                className="group relative overflow-hidden rounded-2xl glass-card p-6 shadow-pool-glow transition-transform duration-300 hover:-translate-y-2 sm:p-8"
              >
                {/* Top border animation */}
                <span className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-aqua transition-transform duration-300 group-hover:scale-x-100" />

                {Icon && <Icon className="h-10 w-10 text-aqua" aria-hidden="true" />}

                <h3 className="mt-4 font-display text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-crystal/60">{service.shortDesc}</p>
                <p className="mt-4 text-lg font-bold text-aqua">
                  à partir de {service.price}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-block text-sm font-semibold text-aqua transition-colors hover:text-crystal"
          >
            {SERVICES_PREVIEW.link}
          </Link>
        </div>
      </div>
    </section>
  );
}
