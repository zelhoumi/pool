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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const top3 = SERVICES.slice(0, 3);

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-pool-mid/50" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-[22px] font-bold text-white sm:text-3xl lg:text-4xl">
          {SERVICES_PREVIEW.title}
        </h2>

        <div ref={ref} className="mt-6 space-y-4 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
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
                className="group relative overflow-hidden rounded-2xl glass-card p-5 shadow-pool-glow sm:p-8"
              >
                <span className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-aqua transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start gap-4 sm:block">
                  {Icon && <Icon className="h-8 w-8 shrink-0 text-aqua sm:h-10 sm:w-10" aria-hidden="true" />}
                  <div className="flex-1 sm:mt-4">
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">{service.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-crystal/60 sm:mt-2 sm:text-sm">{service.shortDesc}</p>
                    <p className="mt-2 text-base font-bold text-aqua sm:mt-4 sm:text-lg">
                      à partir de {service.price}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 text-center sm:mt-10">
          <Link
            href="/services"
            className="inline-block rounded-2xl border border-aqua/20 px-6 py-3 text-sm font-semibold text-aqua transition-colors hover:bg-aqua/10 sm:rounded-none sm:border-0 sm:px-0 sm:py-0"
          >
            {SERVICES_PREVIEW.link}
          </Link>
        </div>
      </div>
    </section>
  );
}
