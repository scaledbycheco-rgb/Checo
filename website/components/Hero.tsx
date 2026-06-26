"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Star, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import JncLogo from "@/components/JncLogo";

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
            <motion.div {...fade(0)} className="flex items-center gap-3">
              <JncLogo size={48} />
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-400 border border-cyan-500/25 bg-cyan-500/[0.07] rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                20+ Years Serving LA &amp; Orange County
              </span>
            </motion.div>

            <motion.h1 {...fade(0.08)} className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight text-white">
              Trusted HVAC{" "}
              <span className="text-orange-400">Solutions</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-cyan-400">for You</span>
            </motion.h1>

            <motion.p {...fade(0.16)} className="text-lg text-slate-300 leading-relaxed max-w-lg">
              At JNC Mechanical Service Inc., we bring decades of hands-on experience serving Los Angeles and Orange County with top-tier commercial and industrial HVAC solutions.
            </motion.p>

            <motion.div {...fade(0.22)} className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+15626442129"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-7 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-base transition-all shadow-[0_4px_24px_rgba(249,115,22,0.35)] hover:shadow-[0_4px_32px_rgba(249,115,22,0.5)] active:scale-[0.98]"
              >
                <Phone size={17} />
                (562) 644-2129
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
                { icon: Shield, label: "Licensed & Insured", color: "text-cyan-400" },
                { icon: Star, label: "150+ Satisfied Customers", color: "text-amber-400" },
                { icon: Clock, label: "Mon–Sun 7am–5pm", color: "text-cyan-400" },
                { icon: CheckCircle, label: "Commercial & Industrial", color: "text-green-400" },
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
                <a href="tel:+15626442129" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/25 transition-colors">
                    <Phone size={19} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Call or Text</p>
                    <p className="text-white text-xl font-black group-hover:text-orange-400 transition-colors">(562) 644-2129</p>
                  </div>
                </a>

                <div className="border-t border-white/[0.07]" />

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Mon – Sun</span>
                    <span className="text-white font-semibold">7:00 AM – 5:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-cyan-500/[0.08] border border-cyan-500/20 rounded-xl px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                  <span className="text-cyan-400 text-sm font-semibold">Serving LA &amp; Orange County</span>
                </div>

                <div className="border-t border-white/[0.07]" />

                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { val: "20+", label: "Yrs Exp." },
                    { val: "150+", label: "Customers" },
                    { val: "LA+OC", label: "Service Area" },
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
            <div className="mt-5">
              <p className="text-slate-600 text-xs mb-3 uppercase tracking-wider font-semibold">Specializations</p>
              <div className="flex flex-wrap gap-2">
                {["Commercial", "Industrial", "Chiller Service", "Retrofits", "Preventive Care"].map((b) => (
                  <span key={b} className="text-xs font-bold text-slate-400 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-1.5">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats ticker strip */}
      <div className="relative border-t border-white/[0.06] bg-[#040913]">
        <Marquee className="py-4 [--duration:22s] [--gap:3rem]" pauseOnHover>
          {[
            "✦ Licensed & Insured",
            "✦ Commercial HVAC Specialists",
            "✦ Industrial HVAC Solutions",
            "✦ Chiller Service & Repairs",
            "✦ Mechanical Retrofits",
            "✦ 20+ Years Serving LA & Orange County",
            "✦ 150+ Satisfied Customers",
            "✦ Preventive Maintenance Programs",
          ].map((item) => (
            <span key={item} className="text-xs font-semibold text-slate-500 whitespace-nowrap hover:text-slate-300 transition-colors">
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
