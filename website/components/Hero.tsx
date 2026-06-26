"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Users, DollarSign, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: "easeOut" as const },
  }),
};

const metrics = [
  { icon: DollarSign, label: "Client Revenue", value: "$2M+", color: "#10b981" },
  { icon: Users, label: "Happy Clients", value: "50+", color: "#7c3aed" },
  { icon: TrendingUp, label: "Avg. Growth", value: "3.2×", color: "#ec4899" },
  { icon: Zap, label: "Avg. Ramp Time", value: "14d", color: "#f59e0b" },
];

function MetricCard({
  icon: Icon,
  label,
  value,
  color,
  delay,
}: {
  icon: typeof DollarSign;
  label: string;
  value: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
        style={{ background: `${color}20` }}
      >
        <Icon size={16} style={{ color }} />
      </div>
      <div>
        <p className="text-xs text-[#6b6b80]">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden hero-grid noise">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.09] blur-[130px]" />
        <div className="absolute right-1/4 top-2/3 h-[350px] w-[350px] rounded-full bg-pink-600/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-violet-900/[0.12] blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-2 lg:gap-20">
        {/* Left — copy */}
        <div>
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300"
          >
            <Star size={12} fill="currentColor" />
            <span>Checo Marketing — Brand Scaling Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6 text-5xl font-bold leading-[1.07] tracking-tight md:text-6xl lg:text-7xl"
          >
            Your Brand.{" "}
            <span className="gradient-text-animate">Scaled.</span>
            <br />
            <span className="text-white/55">Without the</span>
            <br />
            <span className="text-white/55">Agency Price Tag.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#9090a8]"
          >
            I help ambitious founders and creators turn their brand into a
            revenue‑generating machine — through sharp positioning,
            high‑converting content, and growth systems that actually work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_32px_#7c3aed66]"
            >
              Start Scaling
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#results"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              See Results
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-5 text-sm text-[#6b6b80]"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {(["#7c3aed", "#ec4899", "#06b6d4", "#10b981"] as const).map(
                  (c, i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-[#08080c]"
                      style={{ background: c }}
                    />
                  )
                )}
              </div>
              <span>50+ happy clients</span>
            </div>
            <span className="text-white/10">|</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
              ))}
              <span className="ml-1">5.0 average rating</span>
            </div>
          </motion.div>
        </div>

        {/* Right — visual dashboard */}
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Main card */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#111118] to-[#1a1a24] p-6 shadow-2xl">
            {/* Card header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#6b6b80]">
                  Brand Performance
                </p>
                <p className="mt-0.5 text-xl font-bold text-white">Live Dashboard</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>

            {/* Fake chart bars */}
            <div className="mb-6 flex h-28 items-end gap-1.5">
              {[40, 55, 35, 65, 50, 75, 60, 85, 70, 95, 80, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    background: `linear-gradient(to top, #7c3aed, #ec4899)`,
                    opacity: 0.15 + (i / 12) * 0.85,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.5, ease: "easeOut" }}
                />
              ))}
            </div>

            {/* Metric grid */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m, i) => (
                <MetricCard key={m.label} {...m} delay={0.6 + i * 0.08} />
              ))}
            </div>
          </div>

          {/* Floating badge — top-right */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -right-6 -top-5 flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#111118]/90 px-4 py-2.5 backdrop-blur-md"
          >
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-sm font-semibold text-white">+312% reach</span>
          </motion.div>

          {/* Floating badge — bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#111118]/90 px-4 py-2.5 backdrop-blur-md"
          >
            <DollarSign size={14} className="text-violet-400" />
            <span className="text-sm font-semibold text-white">$24k new MRR</span>
          </motion.div>

          {/* Decorative glow behind card */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-violet-600/[0.07] blur-3xl" />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080c] to-transparent" />
    </section>
  );
}
