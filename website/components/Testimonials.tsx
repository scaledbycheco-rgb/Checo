"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Founder, FitFounder Co.",
    avatar: "SM",
    color: "#10b981",
    stars: 5,
    text: "Checo completely transformed how we show up online. We went from invisible to everywhere in under 60 days. The positioning work alone was worth 10x the investment.",
  },
  {
    name: "James K.",
    role: "CEO, DevStack Agency",
    avatar: "JK",
    color: "#7c3aed",
    stars: 5,
    text: "I was skeptical about hiring a freelancer over an agency. Best decision I ever made. More responsive, more strategic, and the results were insane. $180k in new contracts in 90 days.",
  },
  {
    name: "Mia L.",
    role: "Creator, Luxe Collective",
    avatar: "ML",
    color: "#f59e0b",
    stars: 5,
    text: "The content strategy Checo built for us is a machine. Every week we have content that consistently brings in brand deals and new followers. 120k in 3 months. I tell every creator I know about this.",
  },
  {
    name: "David R.",
    role: "Founder, HorizonTech",
    avatar: "DR",
    color: "#06b6d4",
    stars: 5,
    text: "Most consultants give you a deck and disappear. Checo actually does the work. Hands-on, fast, and brutally honest about what will and won't work. Finally someone who gets it.",
  },
  {
    name: "Priya S.",
    role: "Coach, MindfulEdge",
    avatar: "PS",
    color: "#ec4899",
    stars: 5,
    text: "Within the first month, my email list doubled and my first online course sold out. The funnel strategy was precise and the copy was incredible. I wish I had found Checo sooner.",
  },
  {
    name: "Tom W.",
    role: "E-commerce Owner, TrailBlazer",
    avatar: "TW",
    color: "#f97316",
    stars: 5,
    text: "Our ROAS went from 1.8x to 5.4x in 45 days. The brand audit revealed exactly what was killing our conversions. Professional, detailed, and genuinely cares about your success.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-violet-800/[0.05] rounded-full blur-[80px]" />
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Don&apos;t take my word for it
          </h2>
          <p className="text-[#9090a8] text-lg max-w-lg mx-auto">
            Real results from real clients who trusted the process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="card-glow rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-all duration-300"
            >
              <Quote size={20} className="text-violet-500/40" />
              <p className="text-white/80 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.color + "33", border: `1px solid ${t.color}44`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-[#6b6b80] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
