"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, Flame, Wind, Wrench, Zap, Building2, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const card = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="services" className="py-24 px-5 bg-[#070e1f] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Our Services</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl">
              Complete HVAC Solutions{" "}
              <span className="text-sky-400">Under One Roof</span>
            </h2>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors shrink-0">
              Free consultation <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">

          {/* AC Install — large, spans 2 cols on lg */}
          <motion.div {...card(0.05)} className="lg:col-span-2">
            <div className="group h-full min-h-[200px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-8 hover:border-sky-500/20 hover:bg-[#0c1e38] transition-all duration-300 relative overflow-hidden flex flex-col justify-between gap-6">
              <div className="absolute right-0 top-0 w-48 h-48 bg-[radial-gradient(ellipse,rgba(14,165,233,0.07)_0%,transparent_70%)] pointer-events-none" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 group-hover:bg-sky-500/15 transition-colors">
                    <Snowflake size={22} className="text-sky-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">AC Installation & Replacement</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    Right-sized systems for maximum comfort and lower energy bills. We carry all top brands and size every install to your specific space — no guessing, no overselling.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Central AC", "Ductless Mini-Split", "Free Load Calc", "Financing Available"].map(t => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-sky-500/[0.07] border border-sky-500/15 text-sky-400/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Emergency — tall, accent */}
          <motion.div {...card(0.1)} className="lg:row-span-2">
            <div className="group h-full min-h-[200px] rounded-xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.08] to-[#0a1628] p-8 hover:border-orange-500/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between gap-6">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-orange-400 border border-orange-500/25 bg-orange-500/10 rounded-full px-3 py-1 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  Always On
                </span>
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                  <Zap size={22} className="text-orange-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">24/7 Emergency Service</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  HVAC down at 2 AM? We pick up — every time. Our emergency team dispatches fast, nights, weekends, and holidays.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {["We answer every call", "Fast dispatch, all hours", "No after-hours upcharge"].map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle size={13} className="text-orange-400 flex-shrink-0" />
                    {b}
                  </div>
                ))}
                <a
                  href="tel:+15623820518"
                  className="mt-3 w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm transition-all"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Heating */}
          <motion.div {...card(0.15)}>
            <div className="group h-full min-h-[180px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-orange-500/20 hover:bg-[#0f1a2e] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/15 transition-colors">
                <Flame size={20} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-1.5">Heating Systems</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Furnace installs, heat pumps, and boiler service. Stay warm all winter with efficient, reliable heating.</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Furnace", "Heat Pump", "Boiler"].map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/[0.07] border border-orange-500/15 text-orange-400/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Repair & Maintenance */}
          <motion.div {...card(0.2)}>
            <div className="group h-full min-h-[180px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-sky-500/20 hover:bg-[#0c1e38] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/15 transition-colors">
                <Wrench size={20} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-1.5">Repair & Maintenance</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Fast diagnostics and repairs on any brand. Preventive tune-ups that catch problems before they get expensive.</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["All Brands", "Tune-Ups", "Flat-Rate"].map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sky-500/[0.07] border border-sky-500/15 text-sky-400/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ventilation */}
          <motion.div {...card(0.25)}>
            <div className="group h-full min-h-[180px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-sky-500/20 hover:bg-[#0c1e38] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/15 transition-colors">
                <Wind size={20} className="text-sky-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-1.5">Ventilation & Air Quality</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Breathe cleaner air with proper ventilation, purification, and humidity control.</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Air Purifiers", "Humidifiers", "ERV/HRV"].map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sky-500/[0.07] border border-sky-500/15 text-sky-400/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Commercial — spans 2 cols */}
          <motion.div {...card(0.3)} className="lg:col-span-2">
            <div className="group h-full min-h-[160px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-white/15 hover:bg-[#0c1e38] transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="absolute right-0 inset-y-0 w-64 bg-[radial-gradient(ellipse_at_right,rgba(14,165,233,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/15 transition-colors">
                <Building2 size={20} className="text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-[15px] mb-1.5">Commercial HVAC</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Offices, restaurants, retail — scalable solutions with planned maintenance contracts and priority response to minimize your downtime.</p>
              </div>
              <a href="#contact" className="shrink-0 inline-flex items-center gap-2 h-10 px-5 rounded-xl border border-white/15 text-white text-sm font-semibold hover:bg-white/[0.06] transition-colors">
                Get a quote <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
