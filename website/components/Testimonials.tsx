"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const testimonials = [
  { name: "Maria T.",    role: "Homeowner",          city: "Long Beach",   avatar: "MT", color: "#0ea5e9", stars: 5,
    text: "JNC came out same day when our AC died in a heat wave. Fixed in 2 hours flat. Price matched the quote exactly. Will never use anyone else." },
  { name: "Robert K.",   role: "Property Manager",   city: "Torrance",     avatar: "RK", color: "#f97316", stars: 5,
    text: "I manage 12 rental units and JNC is my go-to for everything HVAC. Fast response, fair pricing, always done right." },
  { name: "Lisa M.",     role: "Homeowner",           city: "Carson",       avatar: "LM", color: "#10b981", stars: 5,
    text: "Replaced our 20-year-old furnace. Didn't push anything unnecessary. Our heating bill dropped 35% the first month." },
  { name: "James D.",    role: "Restaurant Owner",    city: "Compton",      avatar: "JD", color: "#a855f7", stars: 5,
    text: "Commercial kitchen HVAC went down Friday night. JNC had a tech out in 90 minutes. Back up by midnight. Saved me thousands." },
  { name: "Sandra R.",   role: "Homeowner",           city: "Lakewood",     avatar: "SR", color: "#f59e0b", stars: 5,
    text: "Mini-split installed in our home office. Professional, clean, efficient — done in half a day. Couldn't be happier." },
  { name: "Michael P.",  role: "Business Owner",      city: "Bellflower",   avatar: "MP", color: "#06b6d4", stars: 5,
    text: "Full HVAC overhaul for our office building. On time, on budget. Employees are more comfortable and energy costs are down." },
  { name: "Diana C.",    role: "Homeowner",           city: "Downey",       avatar: "DC", color: "#ec4899", stars: 5,
    text: "Called at 11pm for a broken heater. Technician arrived within the hour, professional and efficient. So grateful." },
  { name: "Tony V.",     role: "Building Manager",    city: "Hawthorne",    avatar: "TV", color: "#8b5cf6", stars: 5,
    text: "Manage 40+ units. JNC handles all my HVAC work. Never missed a scheduled visit in 3 years. Outstanding reliability." },
];

function ReviewCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <figure className="relative w-72 cursor-default overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a1628] p-5 hover:border-white/15 hover:bg-[#0d1c35] transition-all duration-300 flex-shrink-0">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0"
          style={{ background: `color-mix(in srgb, ${t.color} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${t.color} 25%, transparent)`, color: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-bold leading-tight">{t.name}</p>
          <p className="text-slate-500 text-xs">{t.role} · {t.city}, CA</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: t.stars }).map((_, j) => (
            <Star key={j} size={9} className="text-amber-400" fill="currentColor" />
          ))}
        </div>
      </div>
      <blockquote className="text-slate-300 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</blockquote>
    </figure>
  );
}

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4);

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="reviews" className="py-24 relative bg-[#050b18] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050b18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050b18] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 mb-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              What Our Customers{" "}
              <span className="text-sky-400">Are Saying</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={15} className="text-amber-400" fill="currentColor" />)}
            </div>
            <span className="text-white font-bold">4.9</span>
            <span className="text-slate-500 text-sm">/ 5 · 500+ reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <Marquee pauseOnHover className="[--duration:35s]">
          {row1.map((t) => <ReviewCard key={t.name} t={t} />)}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:38s]">
          {row2.map((t) => <ReviewCard key={t.name} t={t} />)}
        </Marquee>
      </motion.div>
    </section>
  );
}
