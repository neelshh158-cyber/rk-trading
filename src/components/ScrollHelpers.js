"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollHelpers() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-royal to-sky"
      />

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white shadow-lg shadow-royal/40 transition-colors hover:bg-navy"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}