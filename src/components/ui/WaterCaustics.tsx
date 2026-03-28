"use client";

import { useReducedMotion } from "framer-motion";

export default function WaterCaustics() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Caustic light pattern layer 1 */}
      <div className="caustic-layer caustic-1" />
      {/* Caustic light pattern layer 2 */}
      <div className="caustic-layer caustic-2" />
      {/* Subtle light rays from above */}
      <div className="light-rays" />
    </div>
  );
}
