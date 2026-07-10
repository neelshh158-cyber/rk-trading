"use client";

import { motion } from "framer-motion";
import { Droplet, Shield, Leaf, Settings } from "lucide-react";

const features = [
  { icon: Droplet, title: "RO • UV • UF", desc: "Advanced multi-stage purification removes impurities and harmful contaminants." },
  { icon: Shield, title: "Active Copper", desc: "Enriches purified water with copper while supporting everyday wellness." },
  { icon: Leaf, title: "Alkaline", desc: "Maintains balanced pH and delivers refreshing, great-tasting water." },
  { icon: Settings, title: "Smart TDS", desc: "Maintains essential minerals for better taste and balanced purification." },
];

export default function Features() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
            Advanced Purification Technology
          </h2>
          <p className="mt-3 font-body text-navy/60">
            Every B.Nova purifier is built with quality, innovation, and your
            family&apos;s wellbeing in mind.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-navy/5 bg-ice/40 p-6 transition-all hover:-translate-y-2 hover:border-royal/20 hover:bg-white hover:shadow-xl hover:shadow-navy/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white shadow-lg shadow-royal/30 transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-navy/60">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}