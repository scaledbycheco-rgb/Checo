"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const serviceTypes = ["AC Repair","AC Installation","Heating Repair","Heating Installation","Maintenance Tune-Up","Emergency Service","Commercial HVAC","Other"];

const hours = [
  { day: "Mon – Fri", hours: "7:00 AM – 8:00 PM" },
  { day: "Saturday",  hours: "8:00 AM – 6:00 PM" },
  { day: "Sunday",    hours: "9:00 AM – 5:00 PM" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", address:"", service:"", message:"" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="py-28 px-5 relative bg-[#050b18]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(14,165,233,0.04),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14 gap-4"
        >
          <Badge variant="orange">Get In Touch</Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Request Your{" "}
            <span className="text-sky-400">Free Estimate</span>
          </h2>
          <p className="text-slate-400 text-base max-w-md leading-relaxed">
            Tell us about your HVAC needs and we&apos;ll respond within the hour with a free, no-obligation quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Contact info */}
            <Card>
              <CardContent className="p-6 flex flex-col gap-4">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h3>
                <Separator />
                {[
                  { icon: Phone, label: "Call or Text", value: "(562) 382-0518", href: "tel:+15623820518", color: "orange" },
                  { icon: Mail,  label: "Email",        value: "info@jncmechanicalservices.com", href: "mailto:info@jncmechanicalservices.com", color: "sky" },
                  { icon: MapPin,label: "Area",         value: "Greater Los Angeles, CA", href: null, color: "sky" },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 group">
                    <div className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors",
                      item.color === "orange"
                        ? "bg-orange-500/10 border-orange-500/15 group-hover:bg-orange-500/20"
                        : "bg-sky-500/10 border-sky-500/15 group-hover:bg-sky-500/20"
                    )}>
                      <item.icon size={14} className={item.color === "orange" ? "text-orange-400" : "text-sky-400"} />
                    </div>
                    <div>
                      <p className="text-slate-600 text-[10px] font-medium uppercase tracking-wider">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-white text-sm font-semibold hover:text-sky-300 transition-colors">{item.value}</a>
                        : <p className="text-white text-sm font-semibold">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-sky-400" />
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider">Hours</h3>
                </div>
                <Separator />
                <div className="flex flex-col gap-2.5">
                  {hours.map(h => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-slate-500">{h.day}</span>
                      <span className="text-white font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">24/7 Emergency Service Available</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency CTA */}
            <Button variant="orange" size="lg" asChild className="w-full">
              <a href="tel:+15623820518">
                <Phone size={16} />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium opacity-80">Emergency? Call now</span>
                  <span className="text-base font-black">(562) 382-0518</span>
                </div>
                <ArrowRight size={16} className="ml-auto" />
              </a>
            </Button>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center"
                    >
                      <CheckCircle size={38} className="text-green-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
                      <p className="text-slate-500 text-sm max-w-xs">
                        We&apos;ll call you back within the hour. For urgent help, dial us directly.
                      </p>
                    </div>
                    <Button variant="orange" asChild>
                      <a href="tel:+15623820518"><Phone size={14} />Call Now</a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-white font-bold mb-1">Request a Free Quote</h3>
                      <p className="text-slate-500 text-xs">We respond within 1 hour during business hours.</p>
                    </div>
                    <Separator />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-500 font-medium">Full Name *</label>
                        <Input placeholder="John Smith" required value={form.name} onChange={set("name")} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-500 font-medium">Phone Number *</label>
                        <Input type="tel" placeholder="(562) 000-0000" required value={form.phone} onChange={set("phone")} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-medium">Email Address</label>
                      <Input type="email" placeholder="john@email.com" value={form.email} onChange={set("email")} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-medium">Service Address</label>
                      <Input placeholder="123 Main St, Long Beach, CA" value={form.address} onChange={set("address")} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-medium">Service Needed *</label>
                      <select
                        required
                        value={form.service}
                        onChange={set("service")}
                        className="flex h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
                      >
                        <option value="" className="bg-[#0a1628]">Select a service…</option>
                        {serviceTypes.map(s => <option key={s} value={s} className="bg-[#0a1628]">{s}</option>)}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-medium">Additional Details</label>
                      <Textarea
                        rows={3}
                        placeholder="Describe the issue, equipment brand, age, or anything else helpful…"
                        value={form.message}
                        onChange={set("message")}
                      />
                    </div>

                    <Button type="submit" variant="default" size="lg" className="w-full mt-1">
                      Get My Free Quote
                      <ArrowRight size={15} />
                    </Button>
                    <p className="text-center text-slate-600 text-xs">No obligation · Free estimate · 1-hour response</p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
