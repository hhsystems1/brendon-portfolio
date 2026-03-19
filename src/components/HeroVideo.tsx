"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function HeroVideo({
  videoId,
  title,
  subtitle,
  ctaText,
  ctaHref,
}: {
  videoId: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-grid px-6 pt-28">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/30 to-slate-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-emerald/15 via-transparent to-primary-blue/15" />

      {/* Mascot */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-6 top-24 z-10 hidden md:block"
      >
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-primary-emerald/15 blur-2xl" />
          <div className="absolute -inset-8 rounded-full bg-primary-blue/10 blur-3xl" />
          <Image
            src="/turtle.jpg"
            alt="Turtle mascot"
            width={140}
            height={140}
            className="relative h-[140px] w-[140px] rounded-3xl object-cover ring-1 ring-primary-emerald/30 shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-0 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-4xl mx-auto mb-8"
      >
        <div className="video-container aspect-video rounded-2xl overflow-hidden">
          <LiteYouTubeEmbed
            id={videoId}
            title="Portfolio reel"
            poster="maxresdefault"
            noCookie={true}
          />
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 text-center"
      >
        <a href={ctaHref} className="btn btn-primary">
          {ctaText}
        </a>
      </motion.div>

      {/* Floating accent blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-8 w-24 h-24 rounded-full bg-primary-emerald/25 blur-2xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-8 w-40 h-40 rounded-full bg-primary-blue/25 blur-2xl"
      />
    </section>
  );
}
