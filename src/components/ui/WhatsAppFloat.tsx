"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discutons sur WhatsApp"
      title="Discutons sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 group sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 group-hover:scale-110 sm:w-14 sm:h-14">
        <MessageCircle className="w-8 h-8 sm:w-7 sm:h-7" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-deep px-3 py-1.5 text-sm text-white opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 hidden sm:block">
        Discutons sur WhatsApp
      </span>
    </a>
  );
}
