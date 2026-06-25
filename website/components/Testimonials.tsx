"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maria T.",
    role: "Homeowner · Long Beach, CA",
    avatar: "MT",
    color: "#0ea5e9",
    stars: 5,
    text: "JNC came out same day when our AC died in the middle of a heat wave. Fixed it in 2 hours flat. The technician explained everything clearly and the price was exactly what they quoted. Will never use another HVAC company.",
  },
  {
    name: "Robert K.",
    role: "Property Manager · Torrance, CA",
    avatar: "RK",
    color: "#f97316",
    stars: 5,
    text: "I manage 12 rental units and JNC is my go-to for everything HVAC. Fast response, fair pricing, and they always get the job done right. I've tried other companies — nobody comes close to their reliability.",
  },
  {
    name: "Lisa M.",
    role: "Homeowner · Carson, CA",
    avatar: "LM",
    color: "#10b981",
    stars: 5,
    text: "Had them replace our 20-year-old furnace. They walked us through every option, didn't push anything unnecessary, and finished the install ahead of schedule. Our heating bill dropped by 35% the first month.",
  },
  {
    name: "James D.",
    role: "Restaurant Owner · Compton, CA",
    avatar: "JD",
    color: "#a855f7",
    stars: 5,
    text: "My commercial kitchen HVAC went down on a Friday night. JNC had a tech out within 90 minutes and we were back up by midnight. That kind of response saved me thousands. These guys are the real deal.",
  },
  {
    name: "Sandra R.",
    role: "Homeowner · Lakewood, CA",
    avatar: "SR",
    color: "#f59e0b",
    stars: 5,
    text: "Got a mini-split installed in our new home office. The team was professional, clean, and efficient. They were done in half a day and everything works perfectly. Couldn't be happier with the whole experience.",
  },
  {
    name: "Michael P.",
    role: "Business Owner · Bellflower, CA",
    avatar: "MP",
    color: "#06b6d4",
    stars: 5,
    text: "JNC Mechanical did a full HVAC overhaul for our office building. The project manager kept us informed every step of the way, finished on time and on budget. Our employees are more comfortable and our energy costs are down.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => { setAutoplay(false); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setAutoplay(false); setCurrent(c => (c + 1) % testimonials.length); };

  return (
    <section id="reviews" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-sky-800/[0.05] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Hear It From Our{" "}
            <span className="gradient-text">Happy Customers</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-lg mx-auto">
            Real reviews from real Southern California homeowners and businesses.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={18} className="text-amber-400" fill="currentColor" />
            ))}
            <span className="text-white font-bold ml-1">4.9</span>
            <span className="text-[#64748b] text-sm">/ 5 from 500+ reviews</span>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="card-glow rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <Quote size={20} className="text-sky-500/30" />
              <p className="text-white/80 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-0.5 mt-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.color + "25", border: `1px solid ${t.color}40`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-[#64748b] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="card-glow rounded-2xl p-6 flex flex-col gap-4"
          >
            <Quote size={20} className="text-sky-500/30" />
            <p className="text-white/80 text-sm leading-relaxed">{testimonials[current].text}</p>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: testimonials[current].stars }).map((_, j) => (
                <Star key={j} size={12} className="text-amber-400" fill="currentColor" />
              ))}
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: testimonials[current].color + "25",
                  border: `1px solid ${testimonials[current].color}40`,
                  color: testimonials[current].color
                }}
              >
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{testimonials[current].name}</p>
                <p className="text-[#64748b] text-xs">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-between mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/20 transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-sky-400 w-4" : "bg-white/20"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-white/20 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
