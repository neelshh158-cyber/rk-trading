"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/*
  Semicircle gauge (180°). The needle sweeps from the green zone,
  through yellow, into red, then settles in the green "normal" zone.
*/
export default function PressureGauge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [angle, setAngle] = useState(-90); // start far-left (green)

  useEffect(() => {
    if (!inView) return;
    // demo sweep: green -> red -> settle in green
    const timeline = [
      { a: 60, t: 900 },   // sweep up into red
      { a: -55, t: 1800 }, // settle back in green (normal)
    ];
    const timers = timeline.map((step) =>
      setTimeout(() => setAngle(step.a), step.t)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-sm">
      <svg viewBox="0 0 200 120" className="w-full">
        {/* Zone arcs */}
        {/* green 180°->120° */}
        <path d="M 20 100 A 80 80 0 0 1 45 43" fill="none" stroke="#22c55e" strokeWidth="16" strokeLinecap="round" />
        {/* yellow 120°->60° */}
        <path d="M 52 37 A 80 80 0 0 1 148 37" fill="none" stroke="#eab308" strokeWidth="16" />
        {/* red 60°->0° */}
        <path d="M 155 43 A 80 80 0 0 1 180 100" fill="none" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" />

        {/* Needle (rotates around the hub at 100,100) */}
        <motion.line
          x1="100" y1="100" x2="100" y2="35"
          stroke="#0b2a6b" strokeWidth="4" strokeLinecap="round"
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: angle }}
          transition={{ type: "spring", stiffness: 45, damping: 12 }}
        />
        {/* Hub */}
        <circle cx="100" cy="100" r="8" fill="#0b2a6b" />
        <circle cx="100" cy="100" r="3" fill="#fff" />
      </svg>

      {/* Labels under the gauge */}
      <div className="mt-2 flex justify-between px-2 font-body text-[11px] font-semibold">
        <span className="text-green-600">Normal</span>
        <span className="text-yellow-600">Service</span>
        <span className="text-red-600">Replace</span>
      </div>
    </div>
  );
}