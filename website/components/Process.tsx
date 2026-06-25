"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We start with a deep-dive into your brand, goals, and current position. No templates — every strategy is built for you.",
  },
  {
    num: "02",
    title: "Brand Audit",
    desc: "A full analysis of your online presence, competitors, and market opportunities. You'll know exactly where you stand and where to go.",
  },
  {
    num: "03",
    title: "Strategy Blueprint",
    desc: "A custom 90-day roadmap with clear milestones, content plans, growth levers, and KPIs. You know what we're building before we build it.",
  },
  {
    num: "04",
    title: "Execution & Build",
    desc: "I get to work — designing, writing, building, and launching. Weekly check-ins keep you in the loop without wasting your time.",
  },
  {
    num: "05",
    title: "Scale & Optimize",
    desc: "We analyze results, double down on what works, and cut what doesn't. Your brand compounds. Your revenue grows.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-28 px-6 relative">
      {/* bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-violet-800/[0.06] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            A process built for{" "}
            <span className="gradient-text">results, not busywork</span>
          </h2>
          <p className="text-[#9090a8] text-lg max-w-lg mx-auto">
            Clear, proven, and transparent. You&apos;ll always know exactly where we are and what&apos;s coming next.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/60 via-violet-600/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="card-glow rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300">
                    <span className="text-violet-500/60 text-xs font-mono font-bold tracking-wider">
                      STEP {step.num}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{step.title}</h3>
                    <p className="text-[#6b6b80] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#08080c] border-2 border-violet-600 items-center justify-center z-10">
                  <span className="text-violet-400 text-xs font-bold">{i + 1}</span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
