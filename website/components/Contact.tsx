"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Mail, Phone, MessageSquare } from "lucide-react";

const perks = [
  "No long-term contracts — results or we fix it",
  "Weekly progress reports and open Slack access",
  "Strategy call within 48 hours of signing",
  "30-day money-back guarantee",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", brand: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[800px] h-[400px] bg-violet-900/[0.08] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to scale your brand?
          </h2>
          <p className="text-[#9090a8] text-lg max-w-lg mx-auto">
            Fill out the form and I&apos;ll reach out within 24 hours to schedule your free strategy call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="card-glow rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">What you get</h3>
              <div className="flex flex-col gap-3">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#9090a8] text-sm">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glow rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold">Prefer to reach directly?</h3>
              <a
                href="mailto:scaledbycheco@gmail.com"
                className="flex items-center gap-3 text-[#9090a8] hover:text-violet-400 transition-colors text-sm"
              >
                <Mail size={15} />
                scaledbycheco@gmail.com
              </a>
              <a
                href="tel:+15623820518"
                className="flex items-center gap-3 text-[#9090a8] hover:text-violet-400 transition-colors text-sm"
              >
                <Phone size={15} />
                (562) 382-0518
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-[#9090a8] hover:text-violet-400 transition-colors text-sm"
              >
                <MessageSquare size={15} />
                DM on Instagram @checoscale
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-glow rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">You&apos;re in the queue!</h3>
                  <p className="text-[#6b6b80] max-w-xs">
                    I&apos;ll review your submission and reach out within 24 hours to schedule your free strategy call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#6b6b80] mb-1.5 font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#6b6b80] mb-1.5 font-medium">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@yourband.co"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#6b6b80] mb-1.5 font-medium">Brand / Business Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your brand name"
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#6b6b80] mb-1.5 font-medium">What&apos;s your #1 goal right now?</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="E.g. I want to grow my Instagram to 100k and start landing brand deals..."
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_#7c3aed55] mt-1"
                  >
                    Send My Application
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[#3a3a50] text-xs">
                    Free strategy call • No commitment required
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
