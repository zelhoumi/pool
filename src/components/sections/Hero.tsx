"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { HERO, SITE } from "@/lib/constants";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: "easeOut" as const },
        };

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
      {/* Background image */}
      <div className={`absolute inset-0 ${prefersReducedMotion ? "" : "animate-ken-burns"}`}>
        <Image
          src="https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=1920&q=80"
          alt="Piscine cristalline avec eau turquoise à Darbouazza"
          fill
          className="object-cover"
          sizes="100vw"
          preload
        />
      </div>

      {/* Underwater overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/60 via-deep/40 to-pool-floor/90" />

      <div className="relative z-10 w-full max-w-4xl text-center">
        {/* Badge */}
        <motion.span
          {...fadeUp(0)}
          className="inline-block rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-aqua sm:px-4 sm:py-2 sm:text-sm"
        >
          {HERO.badge}
        </motion.span>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.15)}
          className="mt-4 font-display text-[28px] font-bold leading-[1.15] text-white sm:mt-6 sm:text-5xl lg:text-6xl"
        >
          {HERO.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-white/75 sm:mt-6 sm:text-lg"
        >
          {HERO.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-2xl bg-aqua px-6 py-4 text-[15px] font-bold text-deep active:scale-[0.98] sm:rounded-lg sm:px-8 sm:py-3.5 sm:text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            {HERO.cta1}
          </a>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 rounded-2xl border-2 border-white/25 px-6 py-4 text-[15px] font-bold text-white active:bg-white/10 sm:rounded-lg sm:border sm:px-8 sm:py-3.5 sm:text-sm sm:font-semibold"
          >
            {HERO.cta2}
          </Link>
          {/* Mobile-only call button */}
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center justify-center gap-2.5 rounded-2xl bg-gold px-6 py-4 text-[15px] font-bold text-deep active:scale-[0.98] sm:hidden"
          >
            <Phone className="w-5 h-5" />
            Appeler Maintenant
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-8"
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
      >
        <ChevronDown className="w-6 h-6 text-white/40" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
