"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ServicesHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Vue d'ensemble de nos services d'entretien piscine"
          fill
          className="object-cover"
          sizes="100vw"
          preload
        />
      </div>
      <div className="absolute inset-0 bg-deep/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-6">
          <ol className="flex items-center justify-center gap-2 text-sm text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-aqua">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="text-aqua font-medium">Services</li>
          </ol>
        </nav>

        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-bold text-white sm:text-5xl"
        >
          Tous Nos Services
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-white/70"
        >
          Des solutions complètes pour l&#39;entretien de votre piscine
        </motion.p>
      </div>
    </section>
  );
}
