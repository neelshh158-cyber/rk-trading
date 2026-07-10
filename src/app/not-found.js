import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-ice to-white px-6 text-center">
      <p className="font-display text-7xl font-extrabold text-royal md:text-9xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-navy md:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md font-body text-navy/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back to clean water.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:-translate-y-0.5 hover:bg-navy"
      >
        <Home size={18} /> Back to Home
      </Link>
    </main>
  );
}