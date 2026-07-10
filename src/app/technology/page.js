"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Gauge, Filter, Droplet, Zap, Leaf, Award,
} from "lucide-react";
import PressureGauge from "@/components/PressureGauge";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const zones = [
  { color: "bg-green-500", title: "Green Zone", sub: "Normal Operation", desc: "System operating efficiently." },
  { color: "bg-yellow-500", title: "Yellow Zone", sub: "Service Recommended", desc: "Clean the filter to maintain optimal performance." },
  { color: "bg-red-500", title: "Red Zone", sub: "Maintenance Required", desc: "Filter requires immediate cleaning or replacement." },
];

const stages = [
  { icon: Filter, title: "Sediment Filter", desc: "Removes dust, sand & suspended particles." },
  { icon: Droplet, title: "RO Membrane", desc: "Eliminates dissolved salts & heavy metals." },
  { icon: ShieldCheck, title: "UV / UF Chamber", desc: "Deactivates bacteria & viruses." },
  { icon: Zap, title: "Active Copper", desc: "Enriches water with beneficial copper." },
  { icon: Leaf, title: "Alkaline Boost", desc: "Balances pH for refreshing taste." },
];

const certs = [
  { title: "BWRO Desalination Technology", body: "Rupali Industries holds a licence from BARC for Composite Polyamide Reverse Osmosis Membrane for Brackish Water (BWRO) Desalination technology." },
  { title: "Ultrafiltration Membrane", body: "Licensed for On-line Domestic Water Purifier based on ultrafiltration polysulfone membrane developed by BARC." },
  { title: "Haffkine Institute Tested", body: "Independently tested — the online candle-based water filter achieves about 99.9% reduction of test bacteria (E. coli)." },
];

export default function TechnologyPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ice to-white py-16 md:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.span
            variants={fadeUp} initial="hidden" animate="show"
            className="inline-block rounded-full border border-royal/20 bg-white px-4 py-1.5 font-body text-xs font-semibold text-royal shadow-sm"
          >
            Technology & Innovation
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 font-display text-4xl font-extrabold text-navy md:text-5xl"
          >
            Engineered for{" "}
            <span className="bg-gradient-to-r from-royal to-sky bg-clip-text text-transparent">
              Safer Water
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-4 font-body text-navy/70"
          >
            Advanced engineering designed to deliver safer, healthier, and
            better-tasting drinking water — built on BARC Govt. of India
            developed technology.
          </motion.p>
        </div>
      </section>

      {/* Pressure Monitoring System */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-navy/5 bg-ice/30 p-10 shadow-sm"
          >
            <PressureGauge />
          </motion.div>

          <div>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex items-center gap-2 font-display text-2xl font-extrabold text-navy md:text-3xl"
            >
              <Gauge className="text-royal" /> Pressure Monitoring System
            </motion.h2>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="mt-4 font-body leading-relaxed text-navy/70"
            >
              The integrated pressure gauge gives a simple visual indication of the
              purifier&apos;s operating condition. It helps you spot filter blockage
              early — ensuring timely maintenance, consistent water flow, and
              reliable purification.
            </motion.p>

            <div className="mt-6 space-y-3">
              {zones.map((z, i) => (
                <motion.div
                  key={z.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true }} custom={i + 2}
                  className="flex items-start gap-3 rounded-xl border border-navy/5 bg-white p-4 shadow-sm"
                >
                  <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${z.color}`} />
                  <div>
                    <p className="font-display text-sm font-bold text-navy">
                      {z.title} — <span className="text-navy/70">{z.sub}</span>
                    </p>
                    <p className="font-body text-sm text-navy/60">{z.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purification process flow */}
      <section className="bg-ice/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center font-display text-3xl font-extrabold text-navy md:text-4xl"
          >
            Multi-Stage Purification Process
          </motion.h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true }} custom={i}
                  className="relative rounded-2xl border border-navy/5 bg-white p-6 text-center shadow-sm"
                >
                  <span className="absolute right-4 top-3 font-display text-3xl font-extrabold text-royal/10">
                    {i + 1}
                  </span>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white shadow-lg shadow-royal/30">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 font-body text-xs text-navy/60">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BARC certifications */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal/10 text-royal">
              <Award size={26} />
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy md:text-4xl">
              BARC Govt. of India Certified
            </h2>
            <p className="mt-3 font-body text-navy/60">
              Our technology is developed and licensed by the Bhabha Atomic
              Research Centre, Department of Atomic Energy, Government of India.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={i}
                className="rounded-2xl border border-navy/5 bg-gradient-to-b from-white to-ice/40 p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-navy/10"
              >
                <ShieldCheck className="text-royal" size={28} />
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{c.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-navy/60">{c.body}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center font-body text-xs text-navy/40">
            Licences granted to Rupali Industries, Mumbai. Independent bacteria
            testing by Haffkine Institute for Training, Research & Testing.
          </p>
        </div>
      </section>
    </main>
  );
}