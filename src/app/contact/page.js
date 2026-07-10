"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const contacts = [
  { icon: Phone, label: "Rajesh Shah", value: "+91 93745 03780", href: "tel:+919374503780" },
  { icon: Phone, label: "Neel Shah", value: "+91 95109 35509", href: "tel:+919510935509" },
  { icon: Mail, label: "Email", value: "neelshh158@gmail.com", href: "mailto:neelshh158@gmail.com" },
];

export default function ContactPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ice to-white py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.span
            variants={fadeUp} initial="hidden" animate="show"
            className="inline-block rounded-full border border-royal/20 bg-white px-4 py-1.5 font-body text-xs font-semibold text-royal shadow-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="mt-6 font-display text-4xl font-extrabold text-navy md:text-5xl"
          >
            Let&apos;s Talk{" "}
            <span className="bg-gradient-to-r from-royal to-sky bg-clip-text text-transparent">
              Pure Water
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-4 font-body text-navy/70"
          >
            Reach out for sales, installation, or service. We&apos;re here to help
            you choose the right purifier for your home or business.
          </motion.p>
        </div>
      </section>

      {/* Contact + form */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-8">
          {/* Left: info */}
          <div>
            <div className="space-y-4">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    variants={fadeUp} initial="hidden" whileInView="show"
                    viewport={{ once: true }} custom={i}
                    className="flex items-center gap-4 rounded-2xl border border-navy/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-royal/20 hover:shadow-lg hover:shadow-navy/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white shadow-lg shadow-royal/30">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-body text-xs uppercase tracking-wider text-navy/50">{c.label}</p>
                      <p className="font-display text-base font-bold text-navy">{c.value}</p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Address */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={3}
                className="flex items-start gap-4 rounded-2xl border border-navy/5 bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white shadow-lg shadow-royal/30">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-navy/50">Address</p>
                  <p className="font-body text-sm font-semibold text-navy">
                    Bhandari Chawl, Beside Shetrunjay Tower, Behind Navyug College,
                    Rander Road, Surat – 395009
                  </p>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919510935509"
                target="_blank"
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} custom={4}
                className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-body text-sm font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5 hover:bg-green-600"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </motion.a>
            </div>

            {/* Map */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={5}
              className="mt-6 overflow-hidden rounded-2xl border border-navy/5 shadow-sm"
            >
              <iframe
                title="R.K Trading location"
                src="https://www.google.com/maps?q=Rander%20Road%20Surat&output=embed"
                className="h-56 w-full"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right: form (Suspense required for useSearchParams) */}
          <Suspense fallback={<div className="rounded-3xl bg-ice/40 p-8" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}