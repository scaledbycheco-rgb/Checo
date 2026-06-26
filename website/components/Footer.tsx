import { Mail, Phone, MapPin } from "lucide-react";
import JncLogo from "@/components/JncLogo";

const services = ["Commercial HVAC","Chiller Service","Mechanical Retrofits","Preventive Care","Service Repair","Installation"];
const areas = ["Los Angeles County","Orange County","Greater LA Area"];

export default function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <JncLogo size={40} />
              <div className="leading-none">
                <div className="font-black text-[15px] text-white">JNC <span className="text-orange-400">Mechanical</span></div>
                <div className="text-[9px] text-cyan-400/60 font-bold tracking-[0.2em] uppercase">Services Inc.</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Trusted commercial and industrial HVAC solutions serving Los Angeles and Orange County with decades of hands-on experience.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold text-[11px] uppercase tracking-widest mb-5">Services</p>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-slate-500 hover:text-white text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="text-white font-bold text-[11px] uppercase tracking-widest mb-5">Service Areas</p>
            <ul className="space-y-2.5">
              {areas.map(a => (
                <li key={a} className="text-slate-500 text-sm">{a}, CA</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold text-[11px] uppercase tracking-widest mb-5">Contact</p>
            <div className="space-y-4">
              <a href="tel:+15626442129" className="flex items-center gap-2.5 text-slate-400 hover:text-orange-400 text-sm transition-colors">
                <Phone size={13} className="text-orange-400 flex-shrink-0" />
                (562) 644-2129
              </a>
              <a href="mailto:JNCMechanical@yahoo.com" className="flex items-center gap-2.5 text-slate-400 hover:text-sky-400 text-sm transition-colors">
                <Mail size={13} className="text-sky-400 flex-shrink-0" />
                JNCMechanical@yahoo.com
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                Greater Los Angeles, CA
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">24/7 Emergency Line</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} JNC Mechanical Services. All rights reserved. · Licensed & Insured
          </p>
          <div className="flex items-center gap-5 text-slate-600 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors font-semibold">Get a Quote</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
