"use client";

import { motion } from "framer-motion";

import { useState } from "react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`
    )
    .join("&");
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Record<string, string> = {};
    fd.forEach((v, k) => {
      payload[k] = String(v);
    });

    try {
      // Post to the static detection file (Next runtime migration requirement)
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="portfolio-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-5"
      onSubmit={onSubmit}
      action="/__forms.html"
    >
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
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send"}
      </motion.button>

      {status === "sent" ? (
        <p className="text-sm text-primary-emerald">Sent — I’ll reply soon.</p>
      ) : status === "error" ? (
        <p className="text-sm text-red-300">
          Something went wrong. Email me directly at{" "}
          <a className="underline" href="mailto:brendon1798@gmail.com">
            brendon1798@gmail.com
          </a>
          .
        </p>
      ) : (
        <p className="text-xs text-white/45">You’ll get a reply within 24 hours.</p>
      )}
    </form>
  );
}
