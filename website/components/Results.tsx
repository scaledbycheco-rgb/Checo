"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Snowflake, Flame, Wind, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience", desc: "Trusted expertise since day one" },
  { value: 150, suffix: "+", label: "Customers Satisfied", desc: "Commercial & industrial clients" },
  { value: 2, suffix: " Counties", label: "Service Area", desc: "Los Angeles & Orange County" },
  { value: 100, suffix: "%", label: "Commitment", desc: "Precision on every project" },
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
  { icon: Wrench, type: "Commercial HVAC", location: "Los Angeles, CA", detail: "Full commercial HVAC installation for an office building. Optimized for energy efficiency and tenant comfort.", accent: "sky" },
  { icon: Wind, type: "Chiller Service", location: "Orange County, CA", detail: "Expert chiller maintenance and repair for an industrial facility. System restored to full capacity.", accent: "orange" },
  { icon: Wrench, type: "Mechanical Retrofit", location: "Los Angeles, CA", detail: "Customized mechanical retrofit that improved efficiency by 35% for a commercial warehouse.", accent: "sky" },
  { icon: Snowflake, type: "Preventive Care", location: "Orange County, CA", detail: "Scheduled preventive maintenance program keeping a restaurant chain's HVAC running smoothly all year.", accent: "orange" },
  { icon: Flame, type: "Industrial Installation", location: "Los Angeles, CA", detail: "Large-scale industrial HVAC installation completed on schedule and on budget.", accent: "sky" },
  { icon: Wind, type: "Service Repair", location: "Orange County, CA", detail: "Emergency repair for a retail center's HVAC system. Back online within hours, minimizing business disruption.", accent: "orange" },
];

const serviceAreas = [
  "Los Angeles","Orange County","Downtown LA","West LA","South Bay",
  "San Gabriel Valley","Long Beach","Anaheim","Irvine","Santa Ana",
  "Pasadena","Torrance","Fullerton","Garden Grove",
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
            <span className="text-orange-400">Businesses Across LA &amp; OC</span>
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
          <p className="text-slate-500 text-sm mb-6">Proudly serving commercial and industrial clients across Los Angeles and Orange County</p>
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
