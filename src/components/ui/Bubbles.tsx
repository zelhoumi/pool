"use client";

import { useReducedMotion } from "framer-motion";

const BUBBLES = [
  { size: 80, left: 5, delay: 0, duration: 16 },
  { size: 50, left: 15, delay: 2, duration: 13 },
  { size: 110, left: 25, delay: 4, duration: 18 },
  { size: 40, left: 35, delay: 1, duration: 12 },
  { size: 65, left: 50, delay: 3, duration: 15 },
  { size: 90, left: 62, delay: 5, duration: 17 },
  { size: 45, left: 72, delay: 2.5, duration: 13 },
  { size: 75, left: 80, delay: 0.5, duration: 16 },
  { size: 35, left: 90, delay: 3.5, duration: 12 },
  { size: 55, left: 45, delay: 6, duration: 14 },
  { size: 48, left: 55, delay: 7, duration: 13 },
  { size: 85, left: 10, delay: 4.5, duration: 17 },
];

export default function Bubbles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
