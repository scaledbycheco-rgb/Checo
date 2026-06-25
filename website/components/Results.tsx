"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Brands Scaled" },
  { value: 2, prefix: "$", suffix: "M+", label: "Revenue Generated" },
  { value: 3.8, suffix: "x", label: "Avg. ROI for Clients" },
  { value: 90, suffix: "-Day", label: "Results Guaranteed" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
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
        node.textContent = prefix + (Number.isInteger(value) ? Math.floor(v) : v.toFixed(1)) + suffix;
      },
    });
    return controls.stop;
  }, [inView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const caseStudies = [
  {
    brand: "FitFounder Co.",
    category: "Health & Wellness",
    result: "4.2x revenue in 60 days",
    detail: "Repositioned brand, rebuilt content strategy, launched lead funnel. Went from $8k/mo to $34k/mo.",
    color: "#10b981",
  },
  {
    brand: "Luxe Collective",
    category: "Fashion & Lifestyle",
    result: "120k followers in 90 days",
    detail: "Built viral content system and influencer network. Instagram grew from 2k to 120k with 5-figure brand deals.",
    color: "#f59e0b",
  },
  {
    brand: "DevStack Agency",
    category: "B2B SaaS",
    result: "$180k in new contracts",
    detail: "Rebuilt positioning and LinkedIn strategy. Inbound leads went from 0 to 23/month within 90 days.",
    color: "#7c3aed",
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Numbers that{" "}
            <span className="gradient-text">speak for themselves</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-glow rounded-2xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-[#6b6b80] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <h3 className="text-xl font-semibold text-white/60 mb-6 text-center">Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="card-glow rounded-2xl p-6 group hover:border-white/10 transition-all duration-300"
            >
              <div
                className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold mb-4"
                style={{ background: cs.color + "22", color: cs.color }}
              >
                {cs.category}
              </div>
              <h4 className="text-white font-bold text-lg mb-1">{cs.brand}</h4>
              <p
                className="text-2xl font-bold mb-3"
                style={{ color: cs.color }}
              >
                {cs.result}
              </p>
              <p className="text-[#6b6b80] text-sm leading-relaxed">{cs.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
