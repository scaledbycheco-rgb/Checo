"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Snowflake, Flame, Wind, Wrench, Zap, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Snowflake,
    title: "AC Installation & Replacement",
    desc: "Top-brand systems sized correctly for your space — maximum comfort, minimum energy bills.",
    tags: ["Central AC", "Mini-Split", "Ductless"],
    accent: "sky",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    desc: "Furnace installs, heat pumps, and boilers. Stay warm all winter with efficient, reliable heating.",
    tags: ["Furnace", "Heat Pump", "Boiler"],
    accent: "orange",
  },
  {
    icon: Wind,
    title: "Ventilation & Air Quality",
    desc: "Breathe cleaner air with proper ventilation, purification, and humidity control systems.",
    tags: ["Air Purifiers", "Humidifiers", "ERV/HRV"],
    accent: "sky",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    desc: "Fast diagnostics and repairs on all brands. Preventive tune-ups that extend equipment life.",
    tags: ["All Brands", "Tune-Ups", "Diagnostics"],
    accent: "orange",
  },
  {
    icon: Zap,
    title: "24/7 Emergency Service",
    desc: "HVAC down at 2am? We pick up. Our emergency team gets there fast so you're never stuck.",
    tags: ["24/7 Response", "Same Day", "All Hours"],
    accent: "sky",
    featured: true,
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    desc: "Scalable solutions for offices, restaurants, and retail. Minimize downtime with expert commercial service.",
    tags: ["Offices", "Retail", "Restaurants"],
    accent: "orange",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 px-5 relative bg-[#050b18]">
      {/* Subtle section separator glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14 gap-4"
        >
          <Badge variant="default">Our Services</Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl">
            Complete HVAC Solutions{" "}
            <span className="text-sky-400">Under One Roof</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg leading-relaxed">
            From brand-new installs to urgent emergency repairs — JNC handles it all for homes and businesses across Southern California.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card
                className={cn(
                  "h-full group transition-all duration-300 hover:-translate-y-1",
                  svc.featured && "border-sky-500/25 bg-gradient-to-br from-sky-950/40 to-[#0a1628]",
                  !svc.featured && "hover:border-white/10"
                )}
              >
                <CardContent className="p-7 flex flex-col gap-4 h-full">
                  {svc.featured && (
                    <Badge variant="default" className="self-start text-[10px] py-0.5">
                      Available 24/7
                    </Badge>
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border",
                      svc.featured
                        ? "bg-sky-500 border-sky-400/50 shadow-[0_0_24px_rgba(14,165,233,0.4)]"
                        : svc.accent === "sky"
                        ? "bg-sky-500/10 border-sky-500/15 group-hover:bg-sky-500/20 group-hover:border-sky-500/25"
                        : "bg-orange-500/10 border-orange-500/15 group-hover:bg-orange-500/20 group-hover:border-orange-500/25"
                    )}
                  >
                    <svc.icon
                      size={20}
                      className={cn(
                        svc.featured ? "text-white" :
                        svc.accent === "sky" ? "text-sky-400" : "text-orange-400"
                      )}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[15px] font-bold text-white mb-1.5">{svc.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "text-[10px] font-medium px-2 py-0.5 rounded-full border",
                          svc.accent === "sky"
                            ? "bg-sky-500/[0.07] border-sky-500/15 text-sky-400/70"
                            : "bg-orange-500/[0.07] border-orange-500/15 text-orange-400/70"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12 text-sm text-slate-500"
        >
          <span>Not sure what you need?</span>
          <Button variant="link" asChild className="p-0 h-auto">
            <a href="#contact" className="flex items-center gap-1.5">
              Get a free expert consultation
              <ArrowRight size={13} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
