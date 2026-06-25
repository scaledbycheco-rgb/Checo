"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, TrendingUp, Target, Layers, BarChart2, Sparkles } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Brand Positioning",
    desc: "Carve out your unique space in the market. We craft a positioning strategy that makes you the obvious choice — not just another option.",
    tags: ["Competitive Analysis", "Messaging", "Differentiation"],
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    desc: "Content that converts. From social media to long-form, we build a content engine that consistently attracts your ideal clients.",
    tags: ["Social Media", "Copywriting", "Content Calendar"],
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    desc: "Predictable, scalable growth. We implement proven funnels and automation so your business grows even while you sleep.",
    tags: ["Funnels", "Automation", "Lead Gen"],
  },
  {
    icon: Sparkles,
    title: "Visual Identity",
    desc: "A brand that looks as good as it performs. Logo, colors, typography — everything aligned to make a powerful first impression.",
    tags: ["Logo Design", "Brand Kit", "Style Guide"],
  },
  {
    icon: BarChart2,
    title: "Performance Analytics",
    desc: "Data-driven decisions, not guesswork. We track what matters and continuously optimize for maximum ROI.",
    tags: ["KPI Tracking", "Reporting", "Optimization"],
  },
  {
    icon: Layers,
    title: "Full-Stack Scaling",
    desc: "The complete package. Strategy, execution, and management — everything you need to 10x your brand in 90 days.",
    tags: ["Done-For-You", "End-to-End", "90-Day Sprint"],
    featured: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Every tool you need to{" "}
            <span className="gradient-text">dominate your market</span>
          </h2>
          <p className="text-[#9090a8] text-lg max-w-xl mx-auto">
            From strategy to execution — I handle the heavy lifting so you can focus on what you do best.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={item}
              className={`card-glow rounded-2xl p-7 group hover:border-violet-500/30 transition-all duration-300 cursor-default ${
                svc.featured
                  ? "border-violet-500/40 bg-gradient-to-br from-violet-900/20 to-[#111118]"
                  : ""
              }`}
            >
              {svc.featured && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-violet-600 text-white text-[11px] font-semibold uppercase tracking-wider mb-4">
                  Most Popular
                </span>
              )}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                svc.featured ? "bg-violet-600" : "bg-white/[0.06] group-hover:bg-violet-600/20"
              }`}>
                <svc.icon size={20} className={svc.featured ? "text-white" : "text-violet-400"} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{svc.title}</h3>
              <p className="text-[#6b6b80] text-sm leading-relaxed mb-5">{svc.desc}</p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#9090a8] text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
