"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, CheckCircle, Phone, ArrowRight } from "lucide-react";

const highlights = [
  "Serving Southern California since 2009",
  "Licensed, EPA certified technicians",
  "Same-day service, flat-rate pricing",
  "100% satisfaction — or we come back free",
];

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-24 px-5 bg-[#050b18] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(14,165,233,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0a1628] border border-white/[0.08] aspect-video group shadow-[0_0_60px_rgba(14,165,233,0.08)]">
              {/* Video element — swap /video/hvac-jobsite.mp4 with your footage */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/video/hvac-poster.jpg"
                preload="none"
                playsInline
                controls={playing}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src="/video/hvac-jobsite.mp4" type="video/mp4" />
              </video>

              {/* Placeholder shown when no video file is present */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center bg-[#080f20] transition-opacity duration-300 ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(14,165,233,0.08),transparent)]" />

                {/* Animated ring */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <motion.div
                    className="relative cursor-pointer"
                    onClick={handlePlay}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] transition-shadow">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-orange-400/40"
                      animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-orange-400/25"
                      animate={{ scale: [1, 1.8, 1.8], opacity: [0.4, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                    />
                  </motion.div>
                  <div className="text-center">
                    <p className="text-white font-bold text-sm">Watch Us In Action</p>
                    <p className="text-slate-500 text-xs mt-1">See a real HVAC install from start to finish</p>
                  </div>
                </div>

                {/* Corner label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white text-xs font-semibold">JNC Mechanical Services</span>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-4 bg-[#0a1628] border border-white/10 rounded-xl px-5 py-3.5 shadow-xl hidden sm:block"
            >
              <p className="text-2xl font-black text-white leading-none">5,000+</p>
              <p className="text-slate-500 text-xs mt-0.5 font-medium">Jobs Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-orange-500 rounded-xl px-4 py-3 shadow-xl hidden sm:block"
            >
              <p className="text-xl font-black text-white leading-none">15+</p>
              <p className="text-orange-100 text-xs mt-0.5 font-medium">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-7"
          >
            <div>
              <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.2em] mb-3">About JNC Mechanical</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Real Technicians.{" "}
                <span className="text-sky-400">Real Results.</span>
              </h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              JNC Mechanical isn&apos;t a call center — it&apos;s a family-owned HVAC company built on the belief that every customer deserves honest pricing, skilled technicians, and work that&apos;s done right the first time.
            </p>

            <ul className="flex flex-col gap-3.5">
              {highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 text-slate-200 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-sky-500/15 border border-sky-500/25 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={11} className="text-sky-400" />
                  </div>
                  {h}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+15623820518"
                className="inline-flex items-center justify-center gap-2.5 h-13 px-6 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)]"
              >
                <Phone size={15} />
                (562) 382-0518
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-13 px-6 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/[0.06] transition-all"
              >
                Get Free Estimate
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
