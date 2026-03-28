"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const touchStart = useRef(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const t = TESTIMONIALS[current];

  return (
    <section className="py-14 lg:py-28 bg-pool-floor/50" id="avis">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Ce Que Disent Nos Clients
        </h2>

        <div
          className="relative mt-8 sm:mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl glass-card p-6 text-center shadow-pool-glow sm:p-12"
            >
              <div className="flex justify-center gap-1" aria-label={`Note ${t.rating} sur 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold sm:h-5 sm:w-5" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-crystal/80 italic sm:mt-6 sm:text-lg">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-4 sm:mt-6">
                <cite className="not-italic">
                  <span className="font-display text-base font-bold text-white">{t.name}</span>
                  <span className="ml-2 text-sm text-crystal/50">{t.location}</span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Swipe hint on mobile */}
          <p className="mt-3 text-center text-xs text-crystal/30 sm:hidden">
            Glissez pour voir plus &rarr;
          </p>

          {/* Navigation */}
          <div className="mt-4 flex items-center justify-center gap-4 sm:mt-6">
            <button
              type="button"
              onClick={prev}
              className="rounded-full bg-white/5 p-3 transition-colors hover:bg-white/10 min-h-12 min-w-12 flex items-center justify-center"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="h-5 w-5 text-crystal" />
            </button>

            <div className="flex gap-2" role="tablist">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Avis ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 min-h-[10px] ${
                    i === current ? "w-7 bg-aqua" : "w-2.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="rounded-full bg-white/5 p-3 transition-colors hover:bg-white/10 min-h-12 min-w-12 flex items-center justify-center"
              aria-label="Avis suivant"
            >
              <ChevronRight className="h-5 w-5 text-crystal" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
