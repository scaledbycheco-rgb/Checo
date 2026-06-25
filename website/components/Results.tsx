"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Snowflake, Flame, Wind, Wrench } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Years in Business" },
  { value: 5000, suffix: "+", label: "Jobs Completed" },
  { value: 500, suffix: "+", label: "5-Star Reviews" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = (Number.isInteger(value) ? Math.floor(v) : v.toFixed(1)).toLocaleString() + suffix;
      },
    });
    return controls.stop;
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const serviceAreas = [
  "Long Beach", "Torrance", "Carson", "Compton", "Lakewood",
  "Bellflower", "Downey", "Signal Hill", "Wilmington", "San Pedro",
  "Hawthorne", "Gardena", "Paramount", "Lynwood", "Inglewood",
];

const recentJobs = [
  {
    icon: Snowflake,
    type: "AC Installation",
    location: "Long Beach, CA",
    detail: "3-ton Carrier central AC system installed in 4 hours. Customer thrilled with energy savings.",
    color: "sky",
  },
  {
    icon: Flame,
    type: "Furnace Replacement",
    location: "Torrance, CA",
    detail: "Old furnace replaced with high-efficiency Trane unit. 40% reduction in heating bills.",
    color: "orange",
  },
  {
    icon: Wrench,
    type: "Emergency AC Repair",
    location: "Carson, CA",
    detail: "Compressor failure diagnosed and replaced same day. Family comfortable by evening.",
    color: "sky",
  },
  {
    icon: Wind,
    type: "Ductwork Replacement",
    location: "Compton, CA",
    detail: "Full duct system replaced and sealed. Solved hot/cold spots throughout the home.",
    color: "orange",
  },
  {
    icon: Snowflake,
    type: "Mini-Split Install",
    location: "Lakewood, CA",
    detail: "Ductless mini-split system added to garage conversion. Perfect temperature control.",
    color: "sky",
  },
  {
    icon: Flame,
    type: "Heat Pump Install",
    location: "Bellflower, CA",
    detail: "Dual-fuel heat pump system installed. Heating and cooling in one efficient unit.",
    color: "orange",
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-sky-800/[0.06] rounded-full blur-[120px]" />
        <div className="absolute left-0 bottom-1/3 w-96 h-96 bg-orange-800/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            Our Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Trusted by Thousands of{" "}
            <span className="gradient-text-orange">Families & Businesses</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            For over 15 years, JNC Mechanical Services has been the go-to HVAC company for Southern California.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-glow rounded-2xl p-6 text-center group"
              whileHover={{ y: -3 }}
            >
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#64748b] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Jobs */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl font-bold text-white/50 mb-8 text-center"
          >
            Recent Completed Jobs
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentJobs.map((job, i) => (
              <motion.div
                key={job.type + job.location}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="card-glow rounded-2xl p-5 flex flex-col gap-3 hover:border-white/10 transition-all duration-300 group"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    job.color === "sky" ? "bg-sky-500/15 border border-sky-500/20" : "bg-orange-500/15 border border-orange-500/20"
                  }`}>
                    <job.icon size={16} className={job.color === "sky" ? "text-sky-400" : "text-orange-400"} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${job.color === "sky" ? "text-sky-400" : "text-orange-400"}`}>{job.type}</p>
                    <div className="flex items-center gap-1 text-[#64748b] text-xs">
                      <MapPin size={10} />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{job.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="card-glow rounded-3xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={18} className="text-sky-400" />
            <h3 className="text-xl font-bold text-white">Service Areas</h3>
          </div>
          <p className="text-[#64748b] text-sm mb-6">Proudly serving Southern California communities</p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.04 }}
                className="px-3 py-1.5 rounded-full border border-sky-500/15 bg-sky-500/[0.05] text-[#94a3b8] text-xs font-medium hover:border-sky-500/30 hover:text-sky-300 transition-all cursor-default"
              >
                {area}, CA
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
