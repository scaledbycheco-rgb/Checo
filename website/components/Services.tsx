"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, Flame, Wind, Wrench, Zap, Building2, ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Snowflake,
    title: "AC Installation & Replacement",
    desc: "Right-sized systems for maximum comfort and efficiency. We carry top brands and size every install to your specific space.",
    bullets: ["Central AC & Ductless", "Free load calculation", "Financing available"],
    accent: "sky",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    desc: "Furnace installs, heat pumps, and boiler service. Stay warm all winter with reliable, efficient heating solutions.",
    bullets: ["Furnace & Heat Pump", "Boiler service", "All major brands"],
    accent: "orange",
  },
  {
    icon: Wind,
    title: "Ventilation & Air Quality",
    desc: "Breathe cleaner air at home. We install air purifiers, humidifiers, and balanced ventilation systems.",
    bullets: ["Air purification", "Humidity control", "ERV/HRV systems"],
    accent: "sky",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    desc: "Fast diagnostics and repairs on any brand. Preventive tune-ups that catch problems before they become expensive.",
    bullets: ["All brands serviced", "Annual tune-ups", "Flat-rate pricing"],
    accent: "orange",
  },
  {
    icon: Zap,
    title: "24/7 Emergency Service",
    desc: "HVAC down at 2 AM in a heat wave? We pick up. Our emergency team dispatches fast — nights, weekends, holidays.",
    bullets: ["We answer every call", "Fast dispatch", "No after-hours upcharge"],
    accent: "sky",
    featured: true,
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    desc: "Offices, restaurants, retail — we keep your business comfortable and your equipment running with minimal downtime.",
    bullets: ["Planned maintenance", "Priority response", "All building types"],
    accent: "orange",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 px-5 bg-[#070e1f] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Our Services</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl">
              Complete HVAC Solutions{" "}
              <span className="text-sky-400">Under One Roof</span>
            </h2>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors shrink-0">
              Get a free consultation
              <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className={cn(
                "bg-[#070e1f] p-8 flex flex-col gap-5 group hover:bg-[#0a1628] transition-colors duration-300 relative overflow-hidden",
                svc.featured && "bg-[#080f22]"
              )}
            >
              {svc.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              )}

              {/* Icon */}
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300",
                svc.featured
                  ? "bg-sky-500 border-sky-400/50 shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                  : svc.accent === "sky"
                  ? "bg-sky-500/10 border-sky-500/20 group-hover:bg-sky-500/15 group-hover:border-sky-500/30"
                  : "bg-orange-500/10 border-orange-500/20 group-hover:bg-orange-500/15 group-hover:border-orange-500/30"
              )}>
                <svc.icon size={20} className={svc.featured ? "text-white" : svc.accent === "sky" ? "text-sky-400" : "text-orange-400"} />
              </div>

              {svc.featured && (
                <span className="absolute top-6 right-6 text-[10px] font-bold tracking-widest uppercase text-sky-400 border border-sky-500/30 bg-sky-500/10 rounded-full px-2.5 py-1">
                  24/7
                </span>
              )}

              <div>
                <h3 className="text-white font-bold text-[16px] mb-2 leading-snug">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>

              <ul className="flex flex-col gap-2 mt-auto">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle size={12} className={svc.accent === "sky" ? "text-sky-500 flex-shrink-0" : "text-orange-500 flex-shrink-0"} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
