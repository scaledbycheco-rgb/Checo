"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Star, Clock, CheckCircle, ArrowRight, Thermometer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050b18] overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_60%_40%,rgba(14,165,233,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_0%,rgba(14,165,233,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050b18] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-7">
            <motion.div {...fade(0)}>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-sky-400 border border-sky-500/25 bg-sky-500/[0.07] rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Serving Southern California Since 2009
              </span>
            </motion.div>

            <motion.h1 {...fade(0.08)} className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight text-white">
              Southern California&apos;s{" "}
              <span className="text-sky-400">Most Trusted</span>{" "}
              <br className="hidden sm:block" />
              HVAC Company
            </motion.h1>

            <motion.p {...fade(0.16)} className="text-lg text-slate-300 leading-relaxed max-w-lg">
              Licensed, insured HVAC technicians serving Long Beach, Torrance, Carson & the greater LA area.
              Same-day service. Flat-rate pricing. 100% satisfaction guaranteed.
            </motion.p>

            <motion.div {...fade(0.22)} className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+15623820518"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-7 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-base transition-all shadow-[0_4px_24px_rgba(249,115,22,0.35)] hover:shadow-[0_4px_32px_rgba(249,115,22,0.5)] active:scale-[0.98]"
              >
                <Phone size={17} />
                (562) 382-0518
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/[0.06] hover:border-white/35 transition-all"
              >
                Get Free Estimate
                <ArrowRight size={15} />
              </a>
            </motion.div>

            <motion.div {...fade(0.3)} className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: Shield, label: "Licensed & Insured", color: "text-sky-400" },
                { icon: Star, label: "4.9★ — 500+ Reviews", color: "text-amber-400" },
                { icon: Clock, label: "Same-Day Available", color: "text-sky-400" },
                { icon: CheckCircle, label: "Satisfaction Guarantee", color: "text-green-400" },
              ].map((t) => (
                <span key={t.label} className="flex items-center gap-1.5 text-sm text-slate-300">
                  <t.icon size={13} className={t.color} />
                  {t.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — call card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-[#0a1628] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(14,165,233,0.08)]">
              {/* Orange header strip */}
              <div className="bg-orange-500 px-7 py-5">
                <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mb-1">Need HVAC service?</p>
                <p className="text-white text-2xl font-black">Call or Text Us Now</p>
              </div>

              <div className="p-7 flex flex-col gap-5">
                <a href="tel:+15623820518" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/25 transition-colors">
                    <Phone size={19} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Call or Text</p>
                    <p className="text-white text-xl font-black group-hover:text-orange-400 transition-colors">(562) 382-0518</p>
                  </div>
                </a>

                <div className="border-t border-white/[0.07]" />

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Mon – Fri</span>
                    <span className="text-white font-semibold">7:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-white font-semibold">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-white font-semibold">9:00 AM – 5:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-green-500/[0.08] border border-green-500/20 rounded-xl px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-green-400 text-sm font-semibold">24/7 Emergency Line Always Open</span>
                </div>

                <div className="border-t border-white/[0.07]" />

                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { val: "15+", label: "Yrs Exp." },
                    { val: "5K+", label: "Jobs Done" },
                    { val: "4.9★", label: "Rating" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/[0.03] rounded-xl py-3 border border-white/[0.06]">
                      <p className="text-white text-lg font-black">{s.val}</p>
                      <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wide mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all"
                >
                  Schedule Free Estimate
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Brands */}
            <div className="mt-5 flex items-center gap-2 flex-wrap">
              <span className="text-slate-600 text-xs">Authorized service for:</span>
              {["Carrier", "Trane", "Lennox", "Rheem", "York"].map((b) => (
                <span key={b} className="text-xs font-bold text-slate-400 bg-white/[0.04] border border-white/[0.07] rounded-lg px-2.5 py-1">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
