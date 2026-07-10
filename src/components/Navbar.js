"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Technology", href: "/technology" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_4px_20px_rgba(11,42,107,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="R.K Trading"
            width={130}
            height={130}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group relative font-body text-sm font-semibold text-navy transition-colors hover:text-royal"
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-royal transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-royal px-5 py-2 font-body text-sm font-semibold text-white shadow-lg shadow-royal/30 transition-all hover:-translate-y-0.5 hover:bg-navy md:block"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className="text-navy md:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            style={{ height: "100dvh" }}
            className="fixed inset-0 z-[100] flex w-full flex-col bg-white md:hidden"
          >
            {/* Header: logo + close */}
            <div className="flex items-center justify-between border-b border-navy/10 px-6 py-4">
              <Image
                src="/logo.png"
                alt="R.K Trading"
                width={100}
                height={100}
                className="h-12 w-auto object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-navy"
                aria-label="Close menu"
              >
                <X size={30} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-1 flex-col justify-center gap-8 px-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-display text-3xl font-bold ${
                      pathname === link.href ? "text-royal" : "text-navy"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-8 pb-10">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-royal px-6 py-4 text-center font-body text-base font-semibold text-white shadow-lg shadow-royal/30"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}