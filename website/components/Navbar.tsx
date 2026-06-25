"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Thermometer, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#why-us" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#050b18]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.35)] group-hover:shadow-[0_0_28px_rgba(14,165,233,0.5)] transition-shadow">
            <Thermometer size={17} className="text-white" />
          </div>
          <div className="leading-none">
            <div className="font-black text-[15px] tracking-tight text-white">
              JNC <span className="text-sky-400">Mechanical</span>
            </div>
            <div className="text-[9px] font-semibold tracking-[0.2em] text-sky-400/50 uppercase">
              Services
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onMouseEnter={() => setActive(l.label)}
              onMouseLeave={() => setActive(null)}
              className="relative px-4 py-2 text-[13px] font-medium text-slate-400 hover:text-white transition-colors rounded-lg group"
            >
              {active === l.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-white/[0.05]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+15623820518"
            className="flex items-center gap-2 text-[13px] font-semibold text-slate-300 hover:text-sky-400 transition-colors"
          >
            <Phone size={13} className="text-sky-400" />
            (562) 382-0518
          </a>
          <Separator orientation="vertical" className="h-5" />
          <Button variant="orange" size="sm" asChild>
            <a href="#contact">Free Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            id="mobile-menu"
            className="lg:hidden overflow-hidden bg-[#050b18]/95 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-slate-400 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/[0.04] text-sm transition-all"
                >
                  {l.label}
                </motion.a>
              ))}
              <Separator className="my-2" />
              <a
                href="tel:+15623820518"
                className="flex items-center gap-2 py-2 px-3 text-sky-400 font-semibold text-sm"
              >
                <Phone size={14} />
                (562) 382-0518
              </a>
              <Button variant="orange" className="mt-1" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>Get Free Quote</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
