"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Chrome";
import { site } from "@/lib/site";
import { useEffect, useState } from "react";

function detectIOSSafari(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) ||
    // iPadOS pretends to be Mac sometimes
    (ua.includes("Mac") && "ontouchend" in document);
  const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua) && !/CriOS\//.test(ua) && !/FxiOS\//.test(ua);
  return isIOS && isSafari;
}

export function Hero() {
  const reduced = useReducedMotion();
  const [iosSafari, setIosSafari] = useState(false);

  useEffect(() => {
    setIosSafari(detectIOSSafari());
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-20 sm:pt-28">
      {/* Accent orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-40 -left-20 h-[420px] w-[420px] rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] translate-x-1/3 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium tracking-[0.22em] text-white/55"
          >
            PORTFOLIO · {site.location}
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            I build
            {iosSafari ? (
              <span className="inline-block px-1 text-white drop-shadow-[0_0_18px_rgba(160,255,255,0.25)]">
                {" "}automation-first systems{" "}
              </span>
            ) : (
              <span className="gradient-text inline-block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200">
                {" "}automation-first systems{" "}
              </span>
            )}
            and modern web experiences.
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 ring-soft"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10"
            >
              Let’s talk
            </a>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { k: "Focus", v: "Automation + Web" },
              { k: "Style", v: "Cinematic, minimal" },
              { k: "Delivery", v: "Fast + auditable" },
            ].map((item) => (
              <div key={item.k} className="glass rounded-2xl p-5">
                <p className="text-xs font-medium tracking-[0.18em] text-white/50">
                  {item.k}
                </p>
                <p className="mt-2 text-sm text-white/85">{item.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
