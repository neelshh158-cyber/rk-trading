import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />

      {/* CTA band */}
      <section className="bg-gradient-to-r from-navy to-royal py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
            Ready for cleaner, healthier water?
          </h2>
          <p className="mt-3 font-body text-white/80">
            Explore our full range of B.Nova purifiers or reach out for a free consultation.
          </p>
          <Link
            href="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-body text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-ice"
          >
            Explore Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}