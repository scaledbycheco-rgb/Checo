"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Zap, Building2, CheckCircle, ArrowRight, Phone, Thermometer, Settings, RefreshCw } from "lucide-react";

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
          <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Our Services</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl">
              Complete HVAC Solutions{" "}
              <span className="text-orange-400">Under One Roof</span>
            </h2>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors shrink-0">
              Free consultation <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">

          {/* Commercial HVAC — large, spans 2 cols */}
          <motion.div {...card(0.05)} className="lg:col-span-2">
            <div className="group h-full min-h-[200px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-8 hover:border-cyan-500/20 hover:bg-[#0c1e38] transition-all duration-300 relative overflow-hidden flex flex-col justify-between gap-6">
              <div className="absolute right-0 top-0 w-48 h-48 bg-[radial-gradient(ellipse,rgba(34,211,238,0.07)_0%,transparent_70%)] pointer-events-none" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/15 transition-colors">
                    <Building2 size={22} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Commercial HVAC</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    Reliable repair and installation tailored for your business needs. From offices to restaurants, retail to warehouses — scalable solutions with planned maintenance contracts and priority response to minimize your downtime.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Offices", "Restaurants", "Retail", "Warehouses", "Industrial Facilities"].map(t => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/[0.07] border border-cyan-500/15 text-cyan-400/80">{t}</span>
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
                  Core Service
                </span>
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                  <Zap size={22} className="text-orange-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Service Repair</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Fast diagnostics and repairs on any commercial or industrial HVAC system. We minimize downtime and get your systems back running at peak efficiency.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {["All commercial brands", "Industrial systems", "Fast dispatch"].map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle size={13} className="text-orange-400 flex-shrink-0" />
                    {b}
                  </div>
                ))}
                <a
                  href="tel:+15626442129"
                  className="mt-3 w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm transition-all"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Chiller Service */}
          <motion.div {...card(0.15)}>
            <div className="group h-full min-h-[180px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-cyan-500/20 hover:bg-[#0f1a2e] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                <Thermometer size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-1.5">Chiller Service</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Expert maintenance and repairs to keep your chillers running smoothly and efficiently year-round.</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Maintenance", "Repairs", "Diagnostics"].map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-500/[0.07] border border-cyan-500/15 text-cyan-400/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mechanical Retrofits */}
          <motion.div {...card(0.2)}>
            <div className="group h-full min-h-[180px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-orange-500/20 hover:bg-[#0c1e38] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/15 transition-colors">
                <RefreshCw size={20} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-1.5">Mechanical Retrofits</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Customized mechanical retrofits that improve efficiency and performance for your existing systems.</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Upgrades", "Efficiency", "Custom"].map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/[0.07] border border-orange-500/15 text-orange-400/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Preventive Care — spans 2 cols */}
          <motion.div {...card(0.25)} className="lg:col-span-2">
            <div className="group h-full min-h-[160px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-white/15 hover:bg-[#0c1e38] transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="absolute right-0 inset-y-0 w-64 bg-[radial-gradient(ellipse_at_right,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/15 transition-colors">
                <Settings size={20} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-[15px] mb-1.5">Preventive Care</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">Scheduled maintenance programs to avoid costly downtime. We keep your commercial and industrial systems operating at peak performance with proactive service plans.</p>
              </div>
              <a href="#contact" className="shrink-0 inline-flex items-center gap-2 h-10 px-5 rounded-xl border border-white/15 text-white text-sm font-semibold hover:bg-white/[0.06] transition-colors">
                Get Started <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Installation */}
          <motion.div {...card(0.3)}>
            <div className="group h-full min-h-[180px] rounded-xl border border-white/[0.08] bg-[#0a1628] p-7 hover:border-cyan-500/20 hover:bg-[#0c1e38] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/15 transition-colors">
                <Wrench size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-1.5">Installation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Expert commercial and industrial HVAC installation. Every system sized and configured for your specific facility requirements.</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {["Commercial", "Industrial", "All Brands"].map(t => (
                  <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-500/[0.07] border border-cyan-500/15 text-cyan-400/80">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
