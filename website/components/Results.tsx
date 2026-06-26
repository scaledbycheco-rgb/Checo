"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Snowflake, Flame, Wind, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "+", label: "Years in Business", desc: "Serving SoCal since 2009" },
  { value: 5000, suffix: "+", label: "Jobs Completed", desc: "Residential & commercial" },
  { value: 500, suffix: "+", label: "5-Star Reviews", desc: "Verified customer ratings" },
  { value: 100, suffix: "%", label: "Satisfaction Rate", desc: "We make it right, guaranteed" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const ctrl = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) { node.textContent = Math.floor(v).toLocaleString() + suffix; },
    });
    return ctrl.stop;
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const recentJobs = [
  { icon: Snowflake, type: "AC Installation", location: "Long Beach, CA", detail: "3-ton Carrier central AC. Energy bill dropped 30% in the first month.", accent: "sky" },
  { icon: Flame, type: "Furnace Replacement", location: "Torrance, CA", detail: "High-efficiency Trane furnace. Customer saw 40% reduction in heating costs.", accent: "orange" },
  { icon: Wrench, type: "Emergency AC Repair", location: "Carson, CA", detail: "Compressor failure diagnosed and replaced same day. Family comfortable by evening.", accent: "sky" },
  { icon: Wind, type: "Ductwork Replacement", location: "Compton, CA", detail: "Full duct system sealed — solved hot and cold spots throughout the home.", accent: "orange" },
  { icon: Snowflake, type: "Mini-Split Install", location: "Lakewood, CA", detail: "Ductless mini-split for new garage conversion. Perfect zone control added.", accent: "sky" },
  { icon: Flame, type: "Heat Pump Install", location: "Bellflower, CA", detail: "Dual-fuel heat pump for heating and cooling in one ultra-efficient system.", accent: "orange" },
];

const serviceAreas = [
  "Long Beach","Torrance","Carson","Compton","Lakewood","Bellflower",
  "Downey","Signal Hill","Wilmington","San Pedro","Hawthorne","Gardena",
  "Paramount","Lynwood","Inglewood",
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-24 px-5 bg-[#070e1f] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-orange-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Track Record</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Trusted by{" "}
            <span className="text-orange-400">Thousands of Families</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-[#070e1f] px-6 py-8 hover:bg-[#0a1628] transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black text-sky-400 mb-1">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white text-sm font-bold mb-1">{s.label}</p>
              <p className="text-slate-500 text-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Jobs */}
        <div className="mb-14">
          <h3 className="text-white font-bold text-lg mb-6">Recent Completed Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentJobs.map((job, i) => (
              <motion.div
                key={job.type + job.location}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
                className="bg-[#0a1628] border border-white/[0.08] rounded-xl p-5 hover:border-white/15 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0",
                    job.accent === "sky" ? "bg-sky-500/10 border-sky-500/20" : "bg-orange-500/10 border-orange-500/20"
                  )}>
                    <job.icon size={15} className={job.accent === "sky" ? "text-sky-400" : "text-orange-400"} />
                  </div>
                  <div>
                    <p className={cn("text-xs font-bold", job.accent === "sky" ? "text-sky-400" : "text-orange-400")}>
                      {job.type}
                    </p>
                    <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                      <MapPin size={9} />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{job.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="bg-[#0a1628] border border-white/[0.08] rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={15} className="text-sky-400" />
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Service Areas</h3>
          </div>
          <p className="text-slate-500 text-sm mb-6">Proudly serving communities across Southern California</p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="text-xs px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-sky-500/30 hover:text-sky-400 hover:bg-sky-500/[0.06] transition-all cursor-default"
              >
                {area}, CA
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
