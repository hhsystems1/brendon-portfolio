"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { site } from "@/lib/site";

export default function NavIsland() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: isScrolled ? 8 : 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "p-2 sm:p-4" : "p-0"
        }`}
      >
        <motion.div
          animate={{
            borderRadius: isScrolled ? "9999px" : "0px",
            backdropFilter: isScrolled ? "blur(24px)" : "blur(8px)",
            backgroundColor: isScrolled
              ? "rgba(15, 23, 42, 0.8)"
              : "rgba(15, 23, 42, 0.6)",
            border: isScrolled
              ? "1px solid rgba(52, 211, 153, 0.3)"
              : "1px solid rgba(52, 211, 153, 0.1)",
            boxShadow: isScrolled
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(52, 211, 153, 0.1)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? "max-w-fit px-4 sm:px-6 md:px-8 py-3"
              : "max-w-7xl px-4 sm:px-6 md:px-8 py-4 sm:py-6"
          }`}
        >
          <div className="flex items-center justify-between w-full gap-6">
            <a
              href="#top"
              className="flex items-center hover:opacity-90 hover:scale-105 transition-all duration-300 flex-shrink-0 group"
            >
              <div className="h-9 w-9 rounded-full bg-primary-emerald/10 border border-primary-emerald/30 shadow-lg shadow-primary-emerald/10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/turtle.jpg"
                  alt="Turtle mascot"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-cover"
                  priority
                />
              </div>
              <span className="ml-3 text-white/90 font-medium hidden sm:inline">
                {site.name}
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 relative group font-medium text-base lg:text-lg whitespace-nowrap px-3 py-2 rounded-full hover:bg-primary-emerald/10 hover:shadow-lg hover:shadow-primary-emerald/20"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-primary-emerald to-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-primary-emerald/30 transition-all duration-300"></div>
                </a>
              ))}
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                LinkedIn
              </a>
              <a
                href={site.resumeUrl}
                className="btn btn-primary px-5 py-3 text-sm"
              >
                Resume
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-primary-emerald/20 hover:text-primary-emerald hover:scale-110 rounded-full transition-all duration-300 flex-shrink-0 hover:shadow-lg hover:shadow-primary-emerald/25"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full max-w-xs"
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-xl sm:text-2xl text-white hover:text-primary-emerald hover:scale-105 transition-all duration-300 py-3 px-6 rounded-full hover:bg-primary-emerald/10 hover:shadow-lg hover:shadow-primary-emerald/20 border border-transparent hover:border-primary-emerald/30"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <a
                href={site.resumeUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary w-full max-w-xs"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
