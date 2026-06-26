"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ClipboardList, Wrench, CheckCircle2, Star, Shield, DollarSign, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: PhoneCall,
    num: "01",
    title: "Call or Book Online",
    desc: "Reach us anytime by phone or the form below. We respond within the hour — guaranteed.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Free Diagnosis & Quote",
    desc: "A certified tech arrives on time, diagnoses the issue, and gives you a clear flat-rate quote upfront.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Expert Service",
    desc: "We carry the parts. Most repairs and installs are completed in a single visit so you're comfortable fast.",
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Guaranteed Results",
    desc: "Every job is backed by our satisfaction guarantee. If it's not right, we fix it — no extra charge.",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Licensed & EPA Certified",
    desc: "Every technician is background-checked, factory-trained, and EPA certified.",
  },
  {
    icon: DollarSign,
    title: "Flat-Rate Transparent Pricing",
    desc: "Know your exact price before we start. Zero hidden fees, ever.",
  },
  {
    icon: Award,
    title: "All Major Brands",
    desc: "Carrier, Trane, Lennox, Rheem, American Standard, York, and more.",
  },
  {
    icon: Star,
    title: "4.9-Star Rated",
    desc: "500+ verified five-star reviews from homeowners across LA County.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" className="py-24 px-5 bg-[#050b18] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Simple. Fast.{" "}
            <span className="text-sky-400">Done Right.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%_-_12px)] w-6 h-px bg-white/10 z-10" />
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                    <step.icon size={19} className="text-sky-400" />
                  </div>
                  <span className="text-5xl font-black text-white/[0.05] select-none leading-none">{step.num}</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-sky-600 mb-1.5">Step {step.num}</p>
                  <h3 className="text-white font-bold text-[15px] mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why JNC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="bg-[#0a1628] border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
              <p className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Why Choose JNC</p>
              <h3 className="text-white text-2xl font-black mb-8">The JNC Difference</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {differentiators.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <d.icon size={15} className="text-sky-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold mb-0.5">{d.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{d.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — rating callout */}
            <div className="p-10 flex flex-col justify-between gap-8">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Average Customer Rating</p>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-7xl font-black text-white leading-none">4.9</span>
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-amber-400" fill="currentColor" />)}
                    </div>
                    <p className="text-slate-400 text-sm">out of 5 — 500+ reviews</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  {[["5 Stars", 92], ["4 Stars", 6], ["3 Stars", 2]].map(([label, pct]) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-14 shrink-0">{label}</span>
                      <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-amber-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${pct}%` } : {}}
                          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-8 text-right font-semibold">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-2 border-sky-500/40 pl-4">
                <p className="text-slate-300 text-sm leading-relaxed italic mb-2">
                  &ldquo;JNC came same day and had our AC running in under 2 hours. Price matched the quote exactly. Will never use anyone else.&rdquo;
                </p>
                <p className="text-white text-xs font-bold">— Maria T., Long Beach CA</p>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
