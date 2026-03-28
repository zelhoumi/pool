"use client";

import { useReducedMotion } from "framer-motion";

export default function WaterSurface() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[2] h-2" aria-hidden="true">
      <div className="water-surface-line" />
    </div>
  );
}
