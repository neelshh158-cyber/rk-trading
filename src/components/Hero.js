"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplet, Shield, Leaf, Settings, ArrowRight } from "lucide-react";

const chips = [
  { icon: Droplet, label: "RO • UV • UF", pos: "top-0 left-0" },
  { icon: Shield, label: "Active Copper", pos: "top-1/4 right-0" },
  { icon: Leaf, label: "Alkaline", pos: "bottom-1/4 left-0" },
  { icon: Settings, label: "Smart TDS", pos: "bottom-2 right-6" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ice via-white to-white pt-28 md:pt-32">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-sky/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 md:grid-cols-2 md:px-8 md:pb-28">
        {/* LEFT — text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-royal/20 bg-white px-4 py-1.5 font-body text-xs font-semibold text-royal shadow-sm"
          >
            🛡 BARC Govt. of India Developed Technology
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl"
          >
            Pure Water. <br />
            <span className="bg-gradient-to-r from-royal to-sky bg-clip-text text-transparent">
              Smarter Living.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md font-body text-base leading-relaxed text-navy/70 sm:text-lg"
          >
            Innovative B.Nova water purification solutions designed for healthier
            families and modern lifestyles — for homes, offices & commercial spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-full bg-royal px-6 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:-translate-y-0.5 hover:bg-navy"
            >
              View Products
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-navy/15 bg-white px-6 py-3 font-body text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-royal hover:text-royal"
            >
              Get a Quote
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 font-body text-xs text-navy/50"
          >
            Manufactured by <span className="font-semibold text-navy/70">Rupali Industries</span> ·
            Marketed &amp; Distributed by <span className="font-semibold text-navy/70">R.K Trading</span>
          </motion.p>
        </div>

        {/* RIGHT — animated water orb */}
        <div className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
          {/* pulsing rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-royal/20"
              style={{ width: `${100 - i * 22}%`, height: `${100 - i * 22}%` }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* main orb */}
       <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy shadow-2xl shadow-royal/40 sm:h-56 sm:w-56"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-lg sm:h-44 sm:w-44"
            >
              <Image
                src="/logo.png"
                alt="R.K Trading"
                width={150}
                height={150}
                className="h-28 w-28 object-contain sm:h-36 sm:w-36"
              />
            </motion.div>
          </motion.div>

          {/* rising bubbles */}
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute bottom-8 h-2 w-2 rounded-full bg-sky/60"
              style={{ left: `${20 + i * 12}%` }}
              animate={{ y: [0, -120], opacity: [0, 1, 0] }}
              transition={{ duration: 3 + i * 0.3, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
            />
          ))}

          {/* floating feature chips (desktop only) */}
          {chips.map((chip, i) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={chip.label}
                className={`absolute ${chip.pos} hidden items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-navy/10 backdrop-blur md:flex`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={16} className="text-royal" />
                <span className="font-body text-xs font-semibold text-navy">{chip.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}