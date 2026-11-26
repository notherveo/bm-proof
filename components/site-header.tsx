"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const nav = [
  { href: "/spirits", label: "Spirits" },
  { href: "/distillery", label: "Distillery" },
  { href: "/visit", label: "Visit" },
  { href: "/cocktails", label: "Cocktails" },
  { href: "/where-to-buy", label: "Where to Buy" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-0 z-40 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-semibold tracking-wide">
            PROOF DISTILLING CO.
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-[#C7C0B3] transition-colors hover:text-[#E8E2D6]"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden text-[#C7C0B3]"
          >
            Menu
          </button>
        </div>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setOpen(false)}
        >
          <div className="flex w-full max-w-sm flex-col gap-4 p-8" onClick={(e) => e.stopPropagation()}>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-xl text-[#E8E2D6]"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
