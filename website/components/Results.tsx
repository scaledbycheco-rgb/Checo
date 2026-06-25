"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Snowflake, Flame, Wind, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "+", label: "Years in Business" },
  { value: 5000, suffix: "+", label: "Jobs Completed" },
  { value: 500, suffix: "+", label: "5-Star Reviews" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;
    const ctrl = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = Math.floor(v).toLocaleString() + suffix;
      },
    });
    return ctrl.stop;
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const recentJobs = [
  { icon: Snowflake, type: "AC Installation",      location: "Long Beach, CA",  detail: "3-ton Carrier central AC installed in 4 hours. Energy bill dropped 30% first month.", accent: "sky" },
  { icon: Flame,     type: "Furnace Replacement",  location: "Torrance, CA",    detail: "High-efficiency Trane furnace. Customer saw a 40% reduction in heating costs.", accent: "orange" },
  { icon: Wrench,    type: "Emergency AC Repair",  location: "Carson, CA",      detail: "Compressor failure diagnosed and replaced same day. Family comfortable by evening.", accent: "sky" },
  { icon: Wind,      type: "Ductwork Replacement", location: "Compton, CA",     detail: "Full duct system replaced and sealed — solved hot/cold spots throughout the home.", accent: "orange" },
  { icon: Snowflake, type: "Mini-Split Install",   location: "Lakewood, CA",    detail: "Ductless mini-split for new garage conversion. Perfect zone control added.", accent: "sky" },
  { icon: Flame,     type: "Heat Pump Install",    location: "Bellflower, CA",  detail: "Dual-fuel heat pump. Heating and cooling now in one ultra-efficient system.", accent: "orange" },
];

const serviceAreas = [
  "Long Beach","Torrance","Carson","Compton","Lakewood","Bellflower",
  "Downey","Signal Hill","Wilmington","San Pedro","Hawthorne","Gardena",
  "Paramount","Lynwood","Inglewood",
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-5 relative bg-[#050b18]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14 gap-4"
        >
          <Badge variant="orange">Track Record</Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Trusted by{" "}
            <span className="text-orange-400">Thousands of Families</span>
          </h2>
          <p className="text-slate-400 text-base max-w-md">
            For over 15 years, JNC Mechanical has been Southern California&apos;s go-to HVAC company.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.5 }}
            >
              <Card className="text-center group hover:-translate-y-1 transition-all duration-300 hover:border-white/10">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-br from-sky-300 to-sky-500 bg-clip-text text-transparent mb-1">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{s.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Jobs */}
        <div className="mb-16">
          <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest text-center mb-8">
            Recent Completed Jobs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentJobs.map((job, i) => (
              <motion.div
                key={job.type + job.location}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
              >
                <Card className="group hover:-translate-y-1 transition-all duration-300 hover:border-white/10">
                  <CardContent className="p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0",
                        job.accent === "sky"
                          ? "bg-sky-500/10 border-sky-500/15"
                          : "bg-orange-500/10 border-orange-500/15"
                      )}>
                        <job.icon size={15} className={job.accent === "sky" ? "text-sky-400" : "text-orange-400"} />
                      </div>
                      <div>
                        <p className={cn("text-xs font-bold", job.accent === "sky" ? "text-sky-400" : "text-orange-400")}>
                          {job.type}
                        </p>
                        <div className="flex items-center gap-1 text-slate-600 text-xs">
                          <MapPin size={9} />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{job.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="mb-12 opacity-60" />

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Card className="border-sky-500/10">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin size={15} className="text-sky-400" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Service Areas</h3>
              </div>
              <p className="text-slate-600 text-xs mb-6">Proudly serving Southern California communities</p>
              <div className="flex flex-wrap justify-center gap-2">
                {serviceAreas.map((area, i) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.035 }}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] text-slate-500 hover:border-sky-500/25 hover:text-sky-400 hover:bg-sky-500/[0.05] transition-all cursor-default"
                  >
                    {area}, CA
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
