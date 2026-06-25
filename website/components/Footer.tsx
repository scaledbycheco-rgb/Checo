import { Thermometer, Mail, Phone, MapPin, Share2, Camera } from "lucide-react";

const services = [
  "AC Installation", "AC Repair", "Heating Systems", "Furnace Repair",
  "HVAC Maintenance", "Emergency Service", "Commercial HVAC", "Air Quality",
];

const areas = ["Long Beach", "Torrance", "Carson", "Compton", "Lakewood", "Bellflower"];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030810]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-[0_0_16px_#0ea5e944]">
                <Thermometer size={18} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-base tracking-tight text-white">
                  JNC <span className="text-sky-400">Mechanical</span>
                </span>
                <span className="text-[10px] text-sky-400/60 font-medium tracking-widest uppercase">Services</span>
              </div>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed mb-5">
              Southern California&apos;s trusted HVAC experts. Licensed, insured, and committed to your comfort since 2009.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-[#64748b] hover:text-sky-400 hover:border-sky-500/30 transition-all">
                <Share2 size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-[#64748b] hover:text-sky-400 hover:border-sky-500/30 transition-all">
                <Camera size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-[#64748b] hover:text-sky-400 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Service Areas</h4>
            <ul className="space-y-2.5">
              {areas.map(a => (
                <li key={a}>
                  <span className="text-[#64748b] text-sm">{a}, CA</span>
                </li>
              ))}
            </ul>
            <a href="#about" className="text-sky-400 text-sm hover:text-sky-300 transition-colors mt-3 block">
              View all areas →
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+15623820518" className="flex items-center gap-2.5 text-[#64748b] hover:text-orange-400 transition-colors text-sm">
                <Phone size={13} className="text-orange-400 flex-shrink-0" />
                (562) 382-0518
              </a>
              <a href="mailto:info@jncmechanicalservices.com" className="flex items-center gap-2.5 text-[#64748b] hover:text-sky-400 transition-colors text-sm">
                <Mail size={13} className="text-sky-400 flex-shrink-0" />
                info@jncmechanicalservices.com
              </a>
              <div className="flex items-start gap-2.5 text-[#64748b] text-sm">
                <MapPin size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                Greater Los Angeles, CA
              </div>
              <div className="pt-3 mt-1 border-t border-white/[0.04]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">24/7 Emergency Line</span>
                </div>
                <p className="text-[#64748b] text-xs">Always available for urgent HVAC issues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#3a3a50] text-xs">
            © {new Date().getFullYear()} JNC Mechanical Services. All rights reserved. | Licensed & Insured | CA Lic. #XXXXXXX
          </p>
          <div className="flex items-center gap-6 text-[#3a3a50] text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Get a Quote</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
