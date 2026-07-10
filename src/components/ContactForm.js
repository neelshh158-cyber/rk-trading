"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const params = useSearchParams();
  const preProduct = params.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: preProduct ? `I'm interested in the ${preProduct}. Please share details.` : "",
  });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the user's WhatsApp with a pre-filled enquiry to Neel Shah
    const text = `Hello R.K Trading,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/919510935509?text=${text}`, "_blank");
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20";

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-navy/5 bg-white p-8 shadow-xl shadow-navy/5"
    >
      {sent ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="text-green-500" size={64} />
          </motion.div>
          <h3 className="mt-5 font-display text-2xl font-bold text-navy">Thank you!</h3>
          <p className="mt-2 font-body text-sm text-navy/60">
            Your enquiry is ready in WhatsApp. Just hit send and we&apos;ll get back to you shortly.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-6 rounded-full bg-royal px-6 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-navy"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-display text-xl font-bold text-navy">Send us an enquiry</h3>
          <input name="name" required placeholder="Your Name" value={form.name} onChange={update} className={field} />
          <input name="phone" required placeholder="Phone Number" value={form.phone} onChange={update} className={field} />
          <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={update} className={field} />
          <textarea name="message" required rows={4} placeholder="Your message" value={form.message} onChange={update} className={field} />
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-royal py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:-translate-y-0.5 hover:bg-navy"
          >
            Send via WhatsApp
            <Send size={17} className="transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-center font-body text-xs text-navy/40">
            Opens WhatsApp with your details pre-filled — no data is stored.
          </p>
        </form>
      )}
    </motion.div>
  );
}