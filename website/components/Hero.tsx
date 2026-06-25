"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Phone, Shield, Clock, Star, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

function AnimatedParticle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-sky-400/20"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.5, 0.1],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 3 + Math.random() * 8,
  delay: i * 0.3,
}));

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid noise bg-[#050b18]"
    >
      {/* Animated background blobs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Floating particles */}
        {particles.map((p) => (
          <AnimatedParticle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
        ))}
        {/* Animated circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0 300 Q 400 200 800 350 T 1600 300"
            stroke="#38bdf8"
            strokeWidth="1"
            fill="none"
            strokeDasharray="1200"
            animate={{ strokeDashoffset: [1200, 0, -1200] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 0 600 Q 300 500 600 620 T 1200 580"
            stroke="#f97316"
            strokeWidth="1"
            fill="none"
            strokeDasharray="1200"
            animate={{ strokeDashoffset: [0, -1200] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }}
          />
        </svg>
      </motion.div>

      {/* Rotating ring accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="w-[700px] h-[700px] rounded-full border border-sky-500/[0.05]"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-orange-500/[0.04]"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Emergency badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-semibold mb-8 badge-pulse"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          24/7 Emergency HVAC Service Available
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.0] mb-6"
        >
          <span className="gradient-text-animate">Expert HVAC</span>
          <br />
          <span className="text-white">You Can Count</span>
          <br />
          <span className="text-white/50">On. Day or Night.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          JNC Mechanical Services delivers premium heating, cooling & ventilation solutions
          for homes and businesses. Licensed, insured, and trusted by thousands of customers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+15623820518"
            className="shimmer-btn group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-base transition-all duration-300 hover:shadow-[0_0_40px_#f9731655] w-full sm:w-auto justify-center"
          >
            <Phone size={18} />
            Call Now: (562) 382-0518
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full border border-sky-500/30 hover:border-sky-400/50 text-sky-300 hover:text-white text-base font-semibold transition-all duration-300 bg-sky-500/[0.06] hover:bg-sky-500/[0.12] w-full sm:w-auto justify-center"
          >
            Get Free Estimate
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#64748b]"
        >
          <div className="flex items-center gap-2">
            <Shield size={15} className="text-sky-400" />
            <span>Licensed & Insured</span>
          </div>
          <span className="hidden sm:block text-white/[0.08]">•</span>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
              ))}
            </div>
            <span className="ml-1">500+ 5-Star Reviews</span>
          </div>
          <span className="hidden sm:block text-white/[0.08]">•</span>
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-sky-400" />
            <span>Same-Day Service</span>
          </div>
          <span className="hidden sm:block text-white/[0.08]">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-green-400" />
            <span>100% Satisfaction Guaranteed</span>
          </div>
        </motion.div>

        {/* Animated stats row */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { val: "15+", label: "Years Experience" },
            { val: "5,000+", label: "Jobs Completed" },
            { val: "24/7", label: "Emergency Service" },
            { val: "100%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="card-glow rounded-2xl p-4 text-center"
              whileHover={{ scale: 1.03, borderColor: "rgba(14,165,233,0.3)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="text-2xl font-black gradient-text">{stat.val}</div>
              <div className="text-[11px] text-[#64748b] mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050b18] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-sky-400/40 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-sky-400/40" />
      </motion.div>
    </section>
  );
}
