"use client";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <span className="text-sm font-semibold tracking-tight">B</span>
          </span>
          <span className="text-sm font-medium text-white/85 group-hover:text-white">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            className="ml-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90"
          >
            Resume
          </a>
        </nav>

        <a
          href={site.resumeUrl}
          className="md:hidden rounded-full bg-white text-black px-4 py-2 text-sm font-medium"
        >
          Resume
        </a>
      </div>

      <motion.div
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent",
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </header>
  );
}
