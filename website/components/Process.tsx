"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ClipboardList, Truck, CheckCircle2, Star, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const steps = [
  { icon: PhoneCall,    num: "01", title: "Call or Request Online",  desc: "Reach us by phone or form. We respond within the hour — no waiting days for a callback.", accent: "sky" },
  { icon: ClipboardList,num: "02", title: "Free Diagnosis & Quote",  desc: "A certified tech arrives on time, diagnoses the issue, and gives you a clear, flat-rate quote. No surprises.", accent: "orange" },
  { icon: Truck,        num: "03", title: "Expert Service",          desc: "We carry the parts. Most repairs and installs are done in one visit so your home is comfortable fast.", accent: "sky" },
  { icon: CheckCircle2, num: "04", title: "Satisfaction Guaranteed", desc: "Every job is backed by our guarantee. If it's not right, we make it right — no extra charge.", accent: "orange" },
];

const reasons = [
  { title: "Licensed & Certified Technicians", desc: "EPA-certified, factory-trained, and background checked." },
  { title: "Transparent Flat-Rate Pricing", desc: "Know the price before we start. No hidden fees, ever." },
  { title: "All Major Brands Serviced", desc: "Carrier, Trane, Lennox, Rheem, American Standard & more." },
  { title: "Flexible Financing Available", desc: "Affordable payment plans to fit any budget." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-28 px-5 relative bg-[#040a17]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14 gap-4"
        >
          <Badge variant="default">How It Works</Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Simple. Fast.{" "}
            <span className="text-sky-400">Done Right.</span>
          </h2>
          <p className="text-slate-400 text-base max-w-md leading-relaxed">
            Our 4-step process makes getting your HVAC fixed or installed completely stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <Card className="h-full group hover:-translate-y-1 transition-all duration-300 hover:border-white/10">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300",
                      step.accent === "sky"
                        ? "bg-sky-500/10 border-sky-500/15 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_16px_rgba(14,165,233,0.2)]"
                        : "bg-orange-500/10 border-orange-500/15 group-hover:bg-orange-500/20 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.2)]"
                    )}>
                      <step.icon size={18} className={step.accent === "sky" ? "text-sky-400" : "text-orange-400"} />
                    </div>
                    <span className="text-4xl font-black text-white/[0.04] select-none">{step.num}</span>
                  </div>
                  <div>
                    <div className={cn("text-[10px] font-bold tracking-widest uppercase mb-1", step.accent === "sky" ? "text-sky-600" : "text-orange-600")}>
                      Step {step.num}
                    </div>
                    <h3 className="text-[15px] font-bold text-white mb-1.5">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ChevronRight size={16} className="text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why choose us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {/* Reasons */}
          <Card className="h-full">
            <CardContent className="p-8 flex flex-col gap-6 h-full">
              <div>
                <Badge variant="default" className="mb-4">Why Choose JNC</Badge>
                <h3 className="text-2xl font-black text-white">
                  The JNC Difference
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {reasons.map((r, i) => (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-sky-500/15 border border-sky-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={11} className="text-sky-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{r.title}</p>
                      <p className="text-slate-500 text-sm">{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ratings card */}
          <Card className="h-full border-sky-500/15 bg-gradient-to-br from-sky-950/30 to-[#0a1628]">
            <CardContent className="p-8 flex flex-col gap-5">
              <Badge variant="amber" className="self-start">Customer Reviews</Badge>

              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black text-white">4.9</span>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-slate-500 text-xs">from 500+ verified reviews</span>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-2.5">
                {[["5 Stars", 92], ["4 Stars", 6], ["3 Stars", 2]].map(([label, pct]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-12">{label}</span>
                    <div className="flex-1 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${pct}%` } : {}}
                        transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-xs text-slate-500 w-8 text-right">{pct}%</span>
                  </div>
                ))}
              </div>

              <Separator />

              <blockquote className="text-slate-400 text-sm leading-relaxed italic">
                &ldquo;JNC came out same day and had our AC running in under 2 hours. The tech was professional, explained everything clearly, and the price matched the quote exactly. Couldn&apos;t be happier.&rdquo;
              </blockquote>
              <p className="text-white text-xs font-semibold -mt-2">— Maria T., Long Beach CA</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
