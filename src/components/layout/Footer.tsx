import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-pool-floor border-t border-aqua/10 text-white/80">
      {/* Mobile quick actions — above the fold */}
      <div className="sm:hidden border-b border-aqua/10 px-5 py-6">
        <div className="flex gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-green-500 py-4 text-base font-bold text-white"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-aqua py-4 text-base font-bold text-deep"
          >
            <Phone className="w-5 h-5" />
            Appeler
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl font-bold text-white">
              AquaPure <span className="text-aqua">Maroc</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{FOOTER.tagline}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm sm:space-y-2">
              {FOOTER.services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="transition-colors hover:text-aqua py-1 inline-block">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Zones d&#39;Intervention
            </h3>
            <ul className="space-y-2.5 text-sm sm:space-y-2">
              {FOOTER.zones.map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact & Horaires
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-aqua shrink-0" />
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-aqua py-1">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-aqua shrink-0" />
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-aqua py-1">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-aqua shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </li>
            </ul>
            <div className="mt-5 space-y-1.5 text-sm sm:mt-4 sm:space-y-1">
              {FOOTER.hours.map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className="text-white/60">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/40">{FOOTER.copyright}</p>
          <p className="mt-2 text-center text-[10px] text-white/20">{FOOTER.seoText}</p>
        </div>
      </div>
    </footer>
  );
}
