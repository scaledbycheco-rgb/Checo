import { Zap, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
              <Zap size={14} className="text-white" fill="white" />
            </div>
            <span className="font-bold text-white">
              Checo<span className="text-violet-400">Marketing</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
            <a
              href="mailto:scaledbycheco@gmail.com"
              className="flex items-center gap-2 text-[#6b6b80] hover:text-violet-400 transition-colors"
            >
              <Mail size={13} />
              scaledbycheco@gmail.com
            </a>
            <span className="hidden sm:block text-white/10">|</span>
            <a
              href="tel:+15623820518"
              className="flex items-center gap-2 text-[#6b6b80] hover:text-violet-400 transition-colors"
            >
              <Phone size={13} />
              (562) 382-0518
            </a>
          </div>

          <div className="flex items-center gap-6 text-[#3a3a50] text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 text-center">
          <p className="text-[#3a3a50] text-xs">
            © {new Date().getFullYear()} Checo Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
