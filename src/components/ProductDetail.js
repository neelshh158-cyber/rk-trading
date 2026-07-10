"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplet, Check, ArrowLeft, ArrowUpRight,
  ShieldCheck, Zap, Recycle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ProductDetail({ product, related }) {
  const specs = [
    { icon: Droplet, label: "Purification", value: product.purification },
    { icon: ShieldCheck, label: "Technology", value: "BARC Govt. of India" },
    { icon: Zap, label: "Copper", value: "Active Copper" },
    { icon: Recycle, label: "Water", value: "Alkaline Enhanced" },
  ];

  return (
    <main className="pt-24">
      {/* Back link */}
      <div className="mx-auto max-w-7xl px-6 pt-6 md:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-navy/60 transition-colors hover:text-royal"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>

      {/* Hero split */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 md:grid-cols-2 md:px-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex h-96 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-ice via-white to-sky/20 shadow-xl shadow-navy/5"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Droplet className="text-royal/10" size={260} strokeWidth={1} />
          </motion.div>
          <span className="absolute font-display text-3xl font-extrabold text-navy/30">
            {product.name}
          </span>
          <span className="absolute left-5 top-5 rounded-full bg-royal px-4 py-1.5 font-body text-xs font-semibold text-white shadow-lg">
            {product.purification}
          </span>
        </motion.div>

        <div>
          <motion.span
            variants={fadeUp} initial="hidden" animate="show"
            className="inline-block rounded-full border border-royal/20 bg-white px-4 py-1.5 font-body text-xs font-semibold text-royal shadow-sm"
          >
            🛡 BARC Govt. of India Developed Technology
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-5 font-display text-4xl font-extrabold text-navy md:text-5xl"
          >
            {product.name}
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-3 font-body text-lg font-semibold text-royal"
          >
            {product.tagline}
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-5 font-body leading-relaxed text-navy/70"
          >
            {product.description}
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="group flex items-center gap-2 rounded-full bg-royal px-6 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:-translate-y-0.5 hover:bg-navy"
            >
              Get a Quote
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/products"
              className="rounded-full border-2 border-navy/15 bg-white px-6 py-3 font-body text-sm font-semibold text-navy transition-all hover:border-royal hover:text-royal"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4 md:px-8">
          {specs.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={i}
                className="rounded-2xl border border-navy/5 bg-ice/40 p-5 text-center"
              >
                <Icon className="mx-auto text-royal" size={22} />
                <p className="mt-2 font-body text-[11px] uppercase tracking-wider text-navy/50">{s.label}</p>
                <p className="font-display text-sm font-bold text-navy">{s.value}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center font-display text-3xl font-extrabold text-navy md:text-4xl"
          >
            Key Features
          </motion.h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f, i) => (
              <motion.div
                key={f}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={i}
                className="flex items-center gap-4 rounded-2xl border border-navy/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky text-white shadow-md shadow-royal/30">
                  <Check size={18} />
                </div>
                <span className="font-body text-sm font-semibold text-navy">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-ice/40 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <h2 className="text-center font-display text-2xl font-extrabold text-navy md:text-3xl">
              You May Also Like
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/products/${r.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/10"
                  >
                    <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-ice via-white to-sky/15">
                      <Droplet className="absolute text-royal/5" size={120} strokeWidth={1} />
                      <span className="font-display text-xl font-extrabold text-navy/25">{r.name}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-bold text-navy">{r.name}</h3>
                      <p className="mt-1 font-body text-xs text-navy/60">{r.tagline}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}