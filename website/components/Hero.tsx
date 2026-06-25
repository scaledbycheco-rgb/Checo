"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Shield, Clock, Star, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const;
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050b18]"
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY, opacity }}>
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        {/* Radial fade over grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.12),transparent)]" />
        {/* Accent glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(249,115,22,0.05)_0%,transparent_65%)]" />
        {/* Animated orbs */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-sky-400/40"
          animate={{ y: [0,-20,0], opacity:[0.3,0.8,0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[35%] right-[12%] w-1.5 h-1.5 rounded-full bg-orange-400/40"
          animate={{ y: [0,-16,0], opacity:[0.2,0.7,0.2] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[22%] w-1 h-1 rounded-full bg-sky-300/50"
          animate={{ y: [0,-12,0], opacity:[0.3,0.9,0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-32 pb-24 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center gap-6">

          {/* Live badge */}
          <motion.div variants={fadeUp}>
            <Badge variant="green" className="text-[11px] tracking-wide py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              24/7 Emergency HVAC Service — We Answer Every Call
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] text-white">
              Southern California&apos;s{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 bg-clip-text text-transparent">
                  Most Trusted
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                />
              </span>
              <br />
              HVAC Company
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Expert heating, cooling & ventilation for homes and businesses.
            Licensed, insured, and backed by 15+ years of 5-star service.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button variant="orange" size="lg" asChild>
              <a href="tel:+15623820518">
                <Phone size={16} />
                Call (562) 382-0518
                <ArrowRight size={15} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get Free Estimate</a>
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500 mt-2"
          >
            {[
              { icon: Shield, label: "Licensed & Insured", color: "text-sky-400" },
              { icon: Star, label: "500+ Five-Star Reviews", color: "text-amber-400" },
              { icon: Clock, label: "Same-Day Service", color: "text-sky-400" },
              { icon: CheckCircle, label: "100% Satisfaction", color: "text-green-400" },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <item.icon size={12} className={item.color} />
                {item.label}
              </span>
            ))}
          </motion.div>

          <Separator className="w-full max-w-md opacity-40 mt-4" />

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06] w-full max-w-2xl"
          >
            {[
              { val: "15+", sub: "Years Experience" },
              { val: "5,000+", sub: "Jobs Completed" },
              { val: "24/7", sub: "Emergency Line" },
              { val: "4.9★", sub: "Average Rating" },
            ].map((s) => (
              <div
                key={s.sub}
                className="bg-[#080f20] px-4 py-5 text-center hover:bg-[#0c1829] transition-colors group"
              >
                <div className="text-xl font-black text-white group-hover:text-sky-300 transition-colors">{s.val}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 font-medium uppercase tracking-wider">{s.sub}</div>
              </div>
            ))}
          </motion.div>

          {/* Brands served */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 text-xs text-slate-600 mt-2">
            <Zap size={11} className="text-sky-600" />
            <span>Authorized service provider for</span>
            {["Carrier", "Trane", "Lennox", "Rheem", "York"].map((b, i) => (
              <span key={b} className="font-semibold text-slate-500 hover:text-slate-300 transition-colors cursor-default">
                {b}{i < 4 ? " ·" : ""}
              </span>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050b18] to-transparent pointer-events-none" />

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-sky-400/0 via-sky-400/40 to-transparent" />
      </motion.div>
    </section>
  );
}
