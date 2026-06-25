"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock, Wrench } from "lucide-react";

const serviceTypes = [
  "AC Repair", "AC Installation", "Heating Repair", "Heating Installation",
  "Maintenance Tune-Up", "Emergency Service", "Commercial HVAC", "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[900px] h-[400px] bg-sky-900/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Request Your{" "}
            <span className="gradient-text">Free Estimate</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-lg mx-auto">
            Tell us about your HVAC needs and we&apos;ll get back to you within the hour with a free, no-obligation quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact info */}
            <div className="card-glow rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold mb-5">Contact Information</h3>
              <a href="tel:+15623820518" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Phone size={15} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-[#64748b] text-xs">Call or Text</p>
                  <p className="text-white text-sm font-semibold group-hover:text-orange-300 transition-colors">(562) 382-0518</p>
                </div>
              </a>
              <a href="mailto:info@jncmechanicalservices.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                  <Mail size={15} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-[#64748b] text-xs">Email Us</p>
                  <p className="text-white text-sm font-semibold group-hover:text-sky-300 transition-colors">info@jncmechanicalservices.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-[#64748b] text-xs">Service Area</p>
                  <p className="text-white text-sm font-semibold">Greater Los Angeles, CA</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-glow rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={15} className="text-sky-400" />
                <h3 className="text-white font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
                  { day: "Sunday", hours: "9:00 AM – 5:00 PM" },
                ].map(row => (
                  <div key={row.day} className="flex justify-between">
                    <span className="text-[#64748b]">{row.day}</span>
                    <span className="text-white font-medium">{row.hours}</span>
                  </div>
                ))}
                <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">24/7 Emergency Service Available</span>
                </div>
              </div>
            </div>

            {/* Quick call CTA */}
            <a
              href="tel:+15623820518"
              className="shimmer-btn flex items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold transition-all duration-300 hover:shadow-[0_0_30px_#f9731655] group"
            >
              <Phone size={20} />
              <div className="text-left">
                <div className="text-sm">Need emergency service?</div>
                <div className="text-lg">(562) 382-0518</div>
              </div>
              <ArrowRight size={18} className="ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
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
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center"
                  >
                    <CheckCircle size={40} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white">Request Received!</h3>
                  <p className="text-[#64748b] max-w-xs">
                    We&apos;ll review your request and call you back within the hour. For immediate help, call us at (562) 382-0518.
                  </p>
                  <a
                    href="tel:+15623820518"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm mt-2"
                  >
                    <Phone size={15} />
                    Call Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench size={16} className="text-sky-400" />
                    <h3 className="text-white font-bold">Request a Free Quote</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#64748b] mb-1.5 font-medium">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#64748b] mb-1.5 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(562) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5 font-medium">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5 font-medium">Service Address</label>
                    <input
                      type="text"
                      placeholder="123 Main St, Long Beach, CA"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5 font-medium">Service Needed *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
                    >
                      <option value="" className="bg-[#0a1628]">Select a service...</option>
                      {serviceTypes.map(s => (
                        <option key={s} value={s} className="bg-[#0a1628]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5 font-medium">Tell Us More (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Describe the issue, your equipment type, or any other details..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#3a3a50] focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="shimmer-btn group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_#0ea5e955] mt-1"
                  >
                    Get My Free Quote
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[#3a3a50] text-xs">
                    Free estimate • No obligation • Response within 1 hour
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
