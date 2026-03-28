"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="font-display text-xl font-bold text-white lg:text-2xl">
            AquaPure <span className="text-aqua">Maroc</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-aqua"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-gold/90"
            >
              Devis Gratuit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-3 -mr-2 text-white min-h-12 min-w-12 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-deep/98 backdrop-blur-xl overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col min-h-full">
              {/* Quick action buttons */}
              <div className="flex gap-3 mb-8">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-4 text-base font-semibold text-white"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-aqua px-4 py-4 text-base font-semibold text-deep"
                >
                  <Phone className="w-5 h-5" />
                  Appeler
                </a>
              </div>

              {/* Nav links */}
              <div className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-xl font-medium text-white/90 py-4 px-4 rounded-xl transition-colors hover:text-aqua hover:bg-white/5 min-h-14"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA at bottom */}
              <div className="mt-auto pt-8 pb-4">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center rounded-xl bg-gold px-6 py-4 text-lg font-bold text-deep"
                >
                  Devis Gratuit
                </a>
                <p className="mt-4 text-center text-sm text-crystal/40">
                  {SITE.phoneDisplay}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
