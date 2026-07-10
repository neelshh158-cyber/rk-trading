"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Droplet, Shield, Leaf, Settings, Home, Wrench,
  Layers, Boxes, Gauge, Handshake,
} from "lucide-react";

/* ---- reusable count-up number ---- */
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ---- animation presets ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stats = [
  { to: 15, suffix: "+", label: "Purifier Models" },
  { to: 7, suffix: "", label: "Stage Filtration" },
  { to: 4, suffix: "", label: "Water Sources" },
  { to: 99, suffix: "%", label: "Bacteria Reduction" },
];

const reasons = [
  { icon: Droplet, title: "Advanced Multi-Stage Purification", desc: "Removes impurities, harmful contaminants, and improves water quality." },
  { icon: Shield, title: "Active Copper Technology", desc: "Enriches purified water with copper while supporting everyday wellness." },
  { icon: Leaf, title: "Alkaline Enhancement", desc: "Helps maintain balanced pH and delivers refreshing drinking water." },
  { icon: Settings, title: "Smart TDS Control", desc: "Maintains essential minerals for better taste and balanced purification." },
  { icon: Home, title: "Multiple Water Sources", desc: "Suitable for municipal supply, borewell, tanker, and well water." },
  { icon: Wrench, title: "Low Maintenance", desc: "Reliable performance with simple servicing and long-lasting operation." },
];

const badges = [
  { icon: Shield, title: "Advanced Filtration", desc: "Engineered for effective purification." },
  { icon: Boxes, title: "Wide Product Range", desc: "Solutions for homes, offices & commercial spaces." },
  { icon: Gauge, title: "Reliable Performance", desc: "Designed for long-term everyday use." },
  { icon: Handshake, title: "Customer-Focused Service", desc: "Dedicated support and after-sales assistance." },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* ---- Intro ---- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ice to-white py-16 md:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.span
            variants={fadeUp} initial="hidden" animate="show"
            className="inline-block rounded-full border border-royal/20 bg-white px-4 py-1.5 font-body text-xs font-semibold text-royal shadow-sm"
          >
            About B.Nova
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 font-display text-4xl font-extrabold text-navy md:text-5xl"
          >
            Innovative Water Purification,{" "}
            <span className="bg-gradient-to-r from-royal to-sky bg-clip-text text-transparent">
              Built for Life
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-navy/70 md:text-lg"
          >
            B.Nova is dedicated to providing innovative water purification
            solutions that combine advanced filtration technology with dependable
            performance. Our products deliver safe, healthy, and great-tasting
            drinking water while ensuring durability, efficiency, and ease of
            maintenance — whether your source is municipal, borewell, tanker, or
            well water.
          </motion.p>
        </div>
      </section>

      {/* ---- Stats count-up ---- */}
      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i}
              className="rounded-2xl border border-navy/5 bg-ice/40 py-8 text-center"
            >
              <div className="font-display text-4xl font-extrabold text-royal md:text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-2 font-body text-sm font-semibold text-navy/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---- Why Choose ---- */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
              Why Choose B.Nova?
            </h2>
            <p className="mt-3 font-body text-navy/60">
              Advanced technology, reliable performance, and a commitment to
              healthier living.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true }} custom={i}
                  className="group rounded-2xl border border-navy/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-2 hover:border-royal/20 hover:shadow-xl hover:shadow-navy/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white shadow-lg shadow-royal/30 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{r.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-navy/60">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Commitment band ---- */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy to-royal px-8 py-14 text-center shadow-2xl shadow-navy/20"
          >
            <Layers className="pointer-events-none absolute -right-6 -top-6 text-white/10" size={140} />
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Our Commitment
            </h2>
            <p className="mx-auto mt-4 max-w-3xl font-body leading-relaxed text-white/85">
              We believe every family deserves access to clean, safe, and healthy
              drinking water. Every B.Nova water purifier is built with a focus on
              quality, innovation, and customer satisfaction to provide dependable
              performance every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---- Badges ---- */}
      <section className="bg-ice/40 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 120 }}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-royal/10 text-royal">
                  <Icon size={20} />
                </div>
                <h4 className="mt-4 font-display text-sm font-bold text-navy">{b.title}</h4>
                <p className="mt-1 font-body text-xs text-navy/60">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}