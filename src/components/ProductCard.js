"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplet, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product, index }) {
  const hasPhoto = product.image?.startsWith("http");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/10"
    >
      <Link href={`/products/${product.slug}`}>
        {/* Image panel */}
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-ice via-white to-sky/15">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-royal px-3 py-1 font-body text-[11px] font-semibold text-white shadow">
            {product.purification}
          </span>

          {hasPhoto ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <Droplet
                className="absolute -right-4 -top-4 text-royal/5 transition-transform duration-500 group-hover:scale-125"
                size={140}
                strokeWidth={1}
              />
              <span className="font-display text-2xl font-extrabold text-navy/25 transition-transform duration-500 group-hover:scale-110">
                {product.name}
              </span>
            </>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="font-display text-lg font-bold text-navy">{product.name}</h3>
          <p className="mt-1 font-body text-sm leading-relaxed text-navy/60">
            {product.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="rounded-full bg-ice px-3 py-1 font-body text-[11px] font-medium text-navy/70"
              >
                {f}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-royal">
            View Details
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}