"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid noise">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/[0.08] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-pink-600/[0.06] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-violet-800/[0.06] blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8"
        >
          <Star size={13} fill="currentColor" />
          <span>Checo Marketing — Brand Scaling Agency</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Your Brand.{" "}
          <span className="gradient-text-animate">Scaled.</span>
          <br />
          <span className="text-white/60">Without the Agency</span>
          <br />
          <span className="text-white/60">Price Tag.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-lg md:text-xl text-[#9090a8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I help ambitious founders and creators turn their brand into a
          revenue-generating machine — through sharp positioning, high-converting
          content, and growth systems that actually work.
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
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_#7c3aed66]"
          >
            Start Scaling
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#results"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm font-medium transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.06]"
          >
            See Results
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#6b6b80]"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-2">
              {["#7c3aed","#ec4899","#06b6d4","#10b981"].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#08080c]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="ml-1">50+ happy clients</span>
          </div>
          <span className="hidden sm:block text-white/10">|</span>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
            ))}
            <span className="ml-1">5.0 average rating</span>
          </div>
          <span className="hidden sm:block text-white/10">|</span>
          <span>$2M+ in client revenue generated</span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080c] to-transparent" />
    </section>
  );
}
