"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <form
      name="portfolio-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-5"
    >
      {/* Netlify required hidden inputs */}
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            First name
          </label>
          <input
            name="firstName"
            required
            className="w-full rounded-2xl bg-white/5 border border-primary-emerald/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-emerald/40"
            placeholder="Brendon"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Last name
          </label>
          <input
            name="lastName"
            required
            className="w-full rounded-2xl bg-white/5 border border-primary-emerald/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-emerald/40"
            placeholder="Curry-Hobbs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-2xl bg-white/5 border border-primary-emerald/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-emerald/40"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Phone (optional)
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full rounded-2xl bg-white/5 border border-primary-emerald/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-emerald/40"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl bg-white/5 border border-primary-emerald/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-emerald/40"
          placeholder="What are you building? Timeline, budget, and any links help."
        />
      </div>

      <motion.button
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        className="btn btn-primary w-full"
        type="submit"
      >
        Send
      </motion.button>

      <p className="text-xs text-white/45">
        You’ll get a reply within 24 hours.
      </p>
    </form>
  );
}
