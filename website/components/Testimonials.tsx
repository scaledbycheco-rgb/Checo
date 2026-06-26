"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Maria T.",   role: "Homeowner · Long Beach, CA",     avatar: "MT", color: "#0ea5e9", stars: 5,
    text: "JNC came out same day when our AC died in the middle of a heat wave. Fixed it in 2 hours flat. Tech explained everything clearly and the price matched the quote exactly. Will never use anyone else." },
  { name: "Robert K.",  role: "Property Manager · Torrance, CA", avatar: "RK", color: "#f97316", stars: 5,
    text: "I manage 12 rental units and JNC is my go-to for everything HVAC. Fast response, fair pricing, always done right. I've tried other companies — nobody comes close to their reliability." },
  { name: "Lisa M.",    role: "Homeowner · Carson, CA",          avatar: "LM", color: "#10b981", stars: 5,
    text: "Had them replace our 20-year-old furnace. They walked us through every option, didn't push anything unnecessary, and finished ahead of schedule. Our heating bill dropped 35% the first month." },
  { name: "James D.",   role: "Restaurant Owner · Compton, CA",  avatar: "JD", color: "#a855f7", stars: 5,
    text: "My commercial kitchen HVAC went down on a Friday night. JNC had a tech out within 90 minutes and we were back up by midnight. That response saved me thousands. These guys are the real deal." },
  { name: "Sandra R.",  role: "Homeowner · Lakewood, CA",        avatar: "SR", color: "#f59e0b", stars: 5,
    text: "Got a mini-split installed in our new home office. Team was professional, clean, and efficient — done in half a day. Everything works perfectly. Couldn't be happier with the experience." },
  { name: "Michael P.", role: "Business Owner · Bellflower, CA", avatar: "MP", color: "#06b6d4", stars: 5,
    text: "JNC did a full HVAC overhaul for our office building. Kept us informed every step of the way, finished on time and on budget. Our employees are more comfortable and energy costs are down." },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-[#0a1628] border border-white/[0.08] rounded-xl p-6 flex flex-col gap-4 h-full hover:border-white/15 transition-colors">
      <Quote size={20} className="text-sky-500/30" />
      <p className="text-slate-300 text-sm leading-relaxed flex-1">{t.text}</p>
      <div className="flex gap-0.5 mb-1">
        {Array.from({ length: t.stars }).map((_, j) => (
          <Star key={j} size={11} className="text-amber-400" fill="currentColor" />
        ))}
      </div>
      <div className="border-t border-white/[0.06] pt-4 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
          style={{ "--avatar-color": t.color, background: "color-mix(in srgb, var(--avatar-color) 15%, transparent)", border: "1px solid color-mix(in srgb, var(--avatar-color) 25%, transparent)", color: t.color } as React.CSSProperties}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{t.name}</p>
          <p className="text-slate-500 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="reviews" className="py-24 px-5 bg-[#050b18] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Hear It From Our{" "}
              <span className="text-sky-400">Customers</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
            ))}
            <span className="text-white font-bold text-sm ml-1">4.9</span>
            <span className="text-slate-500 text-sm">/ 5 · 500+ reviews</span>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCard t={testimonials[current]} />
          </motion.div>

          <div className="flex items-center justify-between mt-5">
            <Button variant="ghost" size="icon" aria-label="Previous review"
              onClick={() => { setPaused(true); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length); }}>
              <ChevronLeft size={18} />
            </Button>
            <div className="flex gap-1.5" role="tablist" aria-label="Review slides">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-label={`Review by ${t.name}`}
                  aria-selected={i === current}
                  onClick={() => { setPaused(true); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === current ? "bg-sky-400 w-5" : "bg-white/15 w-1.5"}`}
                />
              ))}
            </div>
            <Button variant="ghost" size="icon" aria-label="Next review"
              onClick={() => { setPaused(true); setCurrent(c => (c + 1) % testimonials.length); }}>
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
