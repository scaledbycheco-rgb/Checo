"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = ["Services", "Process", "Results", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = headerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
        scrolled
          ? "bg-[#08080cdd] backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(280px circle at var(--x) var(--y), #7c3aed22, transparent 80%)",
          opacity: scrolled ? 1 : 0.7,
          "--x": springX,
          "--y": springY,
        } as React.CSSProperties}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useMotionValue("transparent"),
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(300px circle, #7c3aed1a 0%, transparent 70%)",
            left: springX,
            top: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-10">
          <motion.div
            whileHover={{ scale: 1.08, rotate: -6 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center"
          >
            <Zap size={16} className="text-white" fill="white" />
          </motion.div>
          <span className="font-bold text-lg tracking-tight text-white">
            Checo<span className="text-violet-400">Marketing</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1 z-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 text-sm text-[#9090a8] hover:text-white transition-colors duration-200 rounded-lg"
            >
              {hovered === link && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-lg bg-white/[0.06]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
              <span className="relative z-10">{link}</span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors duration-200 hover:shadow-[0_0_24px_#7c3aed66] z-10"
        >
          Book a Call
        </motion.a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1 z-10"
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#08080cf0] backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-[#9090a8] hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/[0.04]"
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06 }}
                className="mt-3 text-center px-5 py-2.5 rounded-full bg-violet-600 text-white text-sm font-medium"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
