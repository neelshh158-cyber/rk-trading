"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Technology", href: "/technology" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-white p-1.5">
              <Image src="/logo.png" alt="R.K Trading" width={40} height={40} />
            </div>
            <span className="font-display text-lg font-extrabold">R.K TRADING</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A trusted choice for advanced water purification solutions designed
            for homes, offices, and commercial spaces.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-sky">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-sky">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-sky" /> Rajesh Shah — +91 93745 03780
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-sky" /> Neel Shah — +91 95109 35509
            </li>
            <li className="flex items-center gap-2">
           <Mail size={16} className="text-sky" /> info@rktrading.cc
            </li>
       <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sky" />
              R.K Trading, Bhandari Chawl, Beside Shetrunjay Tower, Behind Navyug
              College, Rander Road, Surat – 395009
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-sky">
            Company
          </h4>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            <li>
              <span className="text-white/50">Manufactured By</span>
              <br />
              Rupali Industries
            </li>
            <li>
              <span className="text-white/50">Marketed &amp; Distributed By</span>
              <br />
              R.K Trading
            </li>
            <li>
              <span className="text-white/50">Support</span>
              <br />
              Sales • Installation • Service
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 R.K Trading. All Rights Reserved. · BARC Govt. of India Developed
        Technology Products
      </div>
    </footer>
  );
}