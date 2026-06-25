"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ClipboardList, Truck, CheckCircle2, Star } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    num: "01",
    title: "Call or Request Online",
    desc: "Reach us by phone or fill out our quick form. We respond within the hour — no waiting days for a callback.",
    color: "sky",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Free Diagnosis & Quote",
    desc: "Our certified technician arrives on time, diagnoses the issue, and gives you a clear, upfront quote. No hidden fees, ever.",
    color: "orange",
  },
  {
    icon: Truck,
    num: "03",
    title: "Expert Service",
    desc: "We carry the parts, we do the job right the first time. Most repairs and installations are completed in a single visit.",
    color: "sky",
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Guaranteed Satisfaction",
    desc: "We stand behind every job with our satisfaction guarantee. If it's not right, we make it right — at no extra cost.",
    color: "orange",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-28 px-6 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-sky-800/[0.06] rounded-full blur-[100px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-orange-800/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Simple, Fast &{" "}
            <span className="gradient-text">Stress-Free</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-lg mx-auto">
            From your first call to a perfectly comfortable home — our 4-step process makes HVAC service effortless.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="card-glow rounded-2xl p-6 relative group"
              whileHover={{ y: -4, borderColor: step.color === "sky" ? "rgba(14,165,233,0.25)" : "rgba(249,115,22,0.25)" }}
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-5xl font-black text-white/[0.03] select-none">
                {step.num}
              </div>

              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                step.color === "sky"
                  ? "bg-sky-500/10 border border-sky-500/20 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_20px_#0ea5e944]"
                  : "bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 group-hover:shadow-[0_0_20px_#f9731644]"
              }`}>
                <step.icon size={20} className={step.color === "sky" ? "text-sky-400" : "text-orange-400"} />
              </div>
              <div className={`text-xs font-bold tracking-widest mb-2 ${step.color === "sky" ? "text-sky-500" : "text-orange-500"}`}>
                STEP {step.num}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why choose us section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left: reasons list */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
              Why Homeowners Choose{" "}
              <span className="gradient-text">JNC Mechanical</span>
            </h3>
            {[
              { title: "Licensed & Certified Technicians", desc: "All our techs are EPA-certified, factory-trained, and background checked." },
              { title: "Transparent Flat-Rate Pricing", desc: "Know the cost before we start. No surprise charges, ever." },
              { title: "All Major Brands Serviced", desc: "Carrier, Trane, Lennox, Rheem, American Standard, and more." },
              { title: "Financing Options Available", desc: "Flexible payment plans to make comfort affordable for every budget." },
            ].map((reason, i) => (
              <motion.div
                key={reason.title}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              >
                <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={13} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{reason.title}</p>
                  <p className="text-[#64748b] text-sm">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: rating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="card-glow rounded-3xl p-8 border-sky-500/20 bg-gradient-to-br from-sky-900/10 to-[#0a1628]"
          >
            <div className="flex items-center gap-1 mb-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={22} className="text-amber-400" fill="currentColor" />
              ))}
            </div>
            <div className="text-6xl font-black gradient-text mb-1">4.9</div>
            <div className="text-[#94a3b8] text-sm mb-6">Average rating from 500+ verified reviews</div>
            <div className="space-y-3">
              {[
                { label: "5 Stars", pct: 92 },
                { label: "4 Stars", pct: 6 },
                { label: "3 Stars", pct: 2 },
              ].map(row => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="text-[#64748b] text-xs w-12">{row.label}</span>
                  <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${row.pct}%` } : {}}
                      transition={{ delay: 1 + Math.random() * 0.3, duration: 1 }}
                    />
                  </div>
                  <span className="text-[#64748b] text-xs w-8 text-right">{row.pct}%</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[#94a3b8] text-sm italic leading-relaxed border-t border-white/[0.06] pt-5">
              &ldquo;JNC came out same day and fixed our AC in under 2 hours. The technician was professional, knowledgeable, and the price was fair. Highly recommend!&rdquo;
            </p>
            <p className="text-white text-xs font-semibold mt-2">— Maria T., Residential Customer</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
