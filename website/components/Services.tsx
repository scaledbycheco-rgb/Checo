"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, Flame, Wind, Wrench, Zap, Building2, ThumbsUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "AC Installation & Replacement",
    desc: "Top-brand air conditioning systems installed with precision. We size your system correctly for maximum efficiency and comfort.",
    tags: ["Central AC", "Mini-Split", "Ductless"],
    color: "sky",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    desc: "Furnace installation, heat pump systems, and radiant heating. Stay warm all winter with reliable, energy-efficient heating.",
    tags: ["Furnace", "Heat Pump", "Boiler"],
    color: "orange",
  },
  {
    icon: Wind,
    title: "Ventilation & Air Quality",
    desc: "Improve indoor air quality with proper ventilation, air purification, and humidity control systems for healthier living.",
    tags: ["Air Purifiers", "Humidifiers", "ERV/HRV"],
    color: "sky",
  },
  {
    icon: Wrench,
    title: "HVAC Repair & Maintenance",
    desc: "Fast, reliable repairs for all makes and models. Preventive maintenance plans that extend equipment life and prevent breakdowns.",
    tags: ["All Brands", "Tune-Ups", "Diagnostics"],
    color: "orange",
  },
  {
    icon: Zap,
    title: "Emergency Service",
    desc: "HVAC breakdown at 2am? We're there. Our 24/7 emergency team responds fast so you're never left uncomfortable for long.",
    tags: ["24/7", "Same Day", "Fast Response"],
    color: "sky",
    featured: true,
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    desc: "Scalable HVAC solutions for offices, retail, restaurants, and industrial facilities. Minimize downtime with our commercial expertise.",
    tags: ["Offices", "Retail", "Restaurants"],
    color: "orange",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Complete HVAC Solutions{" "}
            <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            From new installations to emergency repairs — JNC Mechanical Services handles it all for residential and commercial clients.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={item}
              className={`card-glow ${svc.color === "orange" ? "card-orange" : ""} rounded-2xl p-7 group hover:border-${svc.color === "sky" ? "sky" : "orange"}-500/30 transition-all duration-300 cursor-default ${
                svc.featured
                  ? "border-sky-500/40 bg-gradient-to-br from-sky-900/20 to-[#0a1628]"
                  : ""
              }`}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {svc.featured && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white text-[11px] font-bold uppercase tracking-wider mb-4">
                  Available 24/7
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                svc.featured
                  ? "bg-sky-600 shadow-[0_0_20px_#0ea5e955]"
                  : svc.color === "sky"
                  ? "bg-sky-500/10 group-hover:bg-sky-500/20 border border-sky-500/20"
                  : "bg-orange-500/10 group-hover:bg-orange-500/20 border border-orange-500/20"
              }`}>
                <svc.icon size={22} className={
                  svc.featured ? "text-white" :
                  svc.color === "sky" ? "text-sky-400" : "text-orange-400"
                } />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-5">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      svc.color === "sky"
                        ? "bg-sky-500/[0.06] border-sky-500/[0.15] text-sky-400/80"
                        : "bg-orange-500/[0.06] border-orange-500/[0.15] text-orange-400/80"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
            <ThumbsUp size={15} className="text-sky-400" />
            Not sure what you need? Our experts will help you find the right solution.
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm font-semibold transition-colors group"
          >
            Get a Free Assessment
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
