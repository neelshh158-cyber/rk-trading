"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ice to-white py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-royal/20 bg-white px-4 py-1.5 font-body text-xs font-semibold text-royal shadow-sm"
          >
            Our Product Range
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-extrabold text-navy md:text-5xl"
          >
            B.Nova Water{" "}
            <span className="bg-gradient-to-r from-royal to-sky bg-clip-text text-transparent">
              Purifiers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-body text-navy/70"
          >
            Explore our complete range — from advanced RO systems to non-electric
            purifiers — all powered by BARC Govt. of India developed technology.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative rounded-full px-5 py-2 font-body text-sm font-semibold transition-colors ${
                active === cat.id ? "text-white" : "text-navy/70 hover:text-royal"
              }`}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-royal shadow-lg shadow-royal/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}