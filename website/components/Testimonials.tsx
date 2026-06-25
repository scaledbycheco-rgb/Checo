"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  { name: "Maria T.",  role: "Homeowner · Long Beach, CA",    avatar: "MT", color: "#0ea5e9", stars: 5,
    text: "JNC came out same day when our AC died in the middle of a heat wave. Fixed it in 2 hours flat. Tech explained everything clearly and the price matched the quote exactly. Will never use anyone else." },
  { name: "Robert K.", role: "Property Manager · Torrance, CA", avatar: "RK", color: "#f97316", stars: 5,
    text: "I manage 12 rental units and JNC is my go-to for everything HVAC. Fast response, fair pricing, always done right. I've tried other companies — nobody comes close to their reliability." },
  { name: "Lisa M.",   role: "Homeowner · Carson, CA",         avatar: "LM", color: "#10b981", stars: 5,
    text: "Had them replace our 20-year-old furnace. They walked us through every option, didn't push anything unnecessary, and finished ahead of schedule. Our heating bill dropped 35% the first month." },
  { name: "James D.",  role: "Restaurant Owner · Compton, CA", avatar: "JD", color: "#a855f7", stars: 5,
    text: "My commercial kitchen HVAC went down on a Friday night. JNC had a tech out within 90 minutes and we were back up by midnight. That response saved me thousands. These guys are the real deal." },
  { name: "Sandra R.", role: "Homeowner · Lakewood, CA",       avatar: "SR", color: "#f59e0b", stars: 5,
    text: "Got a mini-split installed in our new home office. Team was professional, clean, and efficient — done in half a day. Everything works perfectly. Couldn't be happier with the experience." },
  { name: "Michael P.",role: "Business Owner · Bellflower, CA",avatar: "MP", color: "#06b6d4", stars: 5,
    text: "JNC did a full HVAC overhaul for our office building. Kept us informed every step of the way, finished on time and on budget. Our employees are more comfortable and energy costs are down." },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="reviews" className="py-28 px-5 relative bg-[#040a17]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14 gap-4"
        >
          <Badge variant="amber">Customer Reviews</Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Hear It From Our{" "}
            <span className="text-sky-400">Happy Customers</span>
          </h2>
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
            ))}
            <span className="text-white font-bold text-sm ml-1">4.9</span>
            <span className="text-slate-500 text-sm">/ 5 from 500+ reviews</span>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card className="h-full group hover:-translate-y-1 transition-all duration-300 hover:border-white/10">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <Quote size={18} className="text-sky-500/25" />
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{t.text}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={11} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                      style={{ background: t.color + "20", border: `1px solid ${t.color}35`, color: t.color }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-slate-600 text-xs">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col gap-4">
                <Quote size={18} className="text-sky-500/25" />
                <p className="text-slate-400 text-sm leading-relaxed">{testimonials[current].text}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={11} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ background: testimonials[current].color + "20", border: `1px solid ${testimonials[current].color}35`, color: testimonials[current].color }}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{testimonials[current].name}</p>
                    <p className="text-slate-600 text-xs">{testimonials[current].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <div className="flex items-center justify-between mt-5">
            <Button variant="ghost" size="icon" onClick={() => { setPaused(true); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length); }}>
              <ChevronLeft size={18} />
            </Button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPaused(true); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === current ? "bg-sky-400 w-5" : "bg-white/15 w-1.5"}`}
                />
              ))}
            </div>
            <Button variant="ghost" size="icon" onClick={() => { setPaused(true); setCurrent(c => (c + 1) % testimonials.length); }}>
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
