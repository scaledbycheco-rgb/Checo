import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
            <Zap size={14} className="text-white" fill="white" />
          </div>
          <span className="font-bold text-white">
            Checo<span className="text-violet-400">Scale</span>
          </span>
        </div>
        <p className="text-[#3a3a50] text-sm">
          © {new Date().getFullYear()} ChecoScale. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-[#3a3a50] text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
