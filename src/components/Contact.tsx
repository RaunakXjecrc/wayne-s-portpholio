"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Smooth Bottom-to-Top Vanishing Wave & Scroll Up Component
function SmoothDisintegrationOverlay({ onReset }: { onReset: () => void }) {
  const [fullyVanished, setFullyVanished] = useState(false);

  useEffect(() => {
    // Smoothly scroll to top as the bottom-to-top wipe happens
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      setFullyVanished(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col justify-between overflow-hidden">
      {/* Smooth Bottom-to-Top Dissolve Mask */}
      <motion.div
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0 }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[#070707] z-10 flex flex-col items-center justify-center p-6 text-[#ded8ce] font-mono"
      >
        {/* Ambient Red Glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)] pointer-events-none" />

        {/* Once fully vanished from bottom to top, show the See You Later popup */}
        <AnimatePresence>
          {fullyVanished && (
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-20 max-w-lg w-full p-8 bg-[#100c0c] border border-red-500/60 rounded-xs shadow-[0_0_80px_rgba(239,68,68,0.35)] text-center space-y-6 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-center gap-3 text-red-500 font-bold tracking-widest text-xs uppercase">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                <span>[MATRIX PROTOCOL // SESSION TERMINATED]</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-serif text-white font-light tracking-wider uppercase">
                See You Later.
              </h2>

              <p className="text-xs text-[#a8a295] leading-relaxed font-sans">
                You took the Red Pill. The entire webpage has vanished from bottom to top.
              </p>

              <div className="pt-4 border-t border-[#2a1c1c] flex justify-center">
                <button
                  onClick={onReset}
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-xs shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>⚡ REBOOT MATRIX &amp; RESTORE</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Redesigned Futuristic Blue Pill Holographic Contact Modal Component
function ContactModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("raunakxshrivastva@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9990] bg-black/90 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl cursor-pointer overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 25, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 25, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl w-full bg-[#030914] border border-cyan-500/40 rounded-[20px] p-6 sm:p-10 shadow-[0_0_80px_rgba(6,182,212,0.35)] text-[#ded8ce] font-sans cursor-default overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cosmic Ambient Blue Nebula Energy Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.25),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

        {/* 4-Point Cosmic Star Burst Graphic Top Right */}
        <div className="absolute top-6 right-8 pointer-events-none flex flex-col items-center">
          <svg className="w-10 h-10 text-cyan-400 opacity-80 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Vertical Left Label */}
        <div className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6 font-mono text-[9px] tracking-[0.4em] text-cyan-500/60 uppercase writing-mode-vertical pointer-events-none">
          <span>✦</span>
          <span>C O N N E C T</span>
          <span>✦</span>
        </div>

        {/* Close X Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cyan-400/80 hover:text-white text-base font-mono font-bold p-2 transition-colors cursor-pointer z-20"
          title="Close Modal"
        >
          ✕
        </button>

        {/* Header Block */}
        <div className="relative z-10 mb-8 pl-0 lg:pl-6">
          <div className="flex items-center justify-between font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">
            <span>04 / 04</span>
            <span className="text-cyan-500/80">// GET IN TOUCH</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none mb-3">
                Let's Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 font-normal">
                  Extraordinary
                </span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#8e9bb0] max-w-xl leading-relaxed">
                Have a project in mind, a question, or just want to say hi? I'm always open to new opportunities, collaborations, and interesting conversations.
              </p>
            </div>

            <div className="lg:col-span-4 border-l border-cyan-500/30 pl-4 py-1 font-mono text-[10px] text-[#7888a3] tracking-widest uppercase leading-relaxed hidden sm:block">
              "GOOD IDEAS START WITH A SIMPLE CONVERSATION."
            </div>
          </div>
        </div>

        {/* Direct Email Card (Full Width Cybernetic Glass Box) */}
        <div className="relative z-10 pl-0 lg:pl-6 mb-6">
          <div className="p-6 sm:p-7 bg-[#061221]/90 border border-cyan-500/30 rounded-[16px] shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-cyan-400/60 transition-colors">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase">
                <span>✈ DIRECT EMAIL</span>
              </div>
              <div className="text-lg sm:text-2xl font-mono text-white font-bold tracking-wide select-all">
                raunakxshrivastva@gmail.com
              </div>
              <div className="font-mono text-[10px] text-[#637594] tracking-widest uppercase">
                I'LL REPLY AS SOON AS POSSIBLE ▪
              </div>
            </div>

            {/* Beveled Metallic Copy Button */}
            <button
              onClick={copyEmail}
              className="group relative px-6 py-3 bg-[#0a1e36] hover:bg-cyan-400 border border-cyan-500/60 hover:border-cyan-300 text-cyan-200 hover:text-black font-mono font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer flex items-center gap-2.5 whitespace-nowrap active:scale-95"
            >
              <span>{copied ? "✓ COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
              <span className="text-sm">📋</span>
            </button>
          </div>
        </div>

        {/* Middle Row: 2 Cybernetic Telemetry Cards */}
        <div className="relative z-10 pl-0 lg:pl-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 font-mono">
          {/* Left Card: Operating Region with Globe Graphic Overlay */}
          <div className="relative p-6 bg-[#061221]/90 border border-cyan-500/30 rounded-[16px] overflow-hidden hover:border-cyan-400/60 transition-colors">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs text-cyan-400 tracking-widest uppercase mb-2">
                <span>📍 OPERATING REGION</span>
              </div>
              <strong className="text-base text-white block mb-1 font-sans">
                Jaipur, Rajasthan, India
              </strong>
              <span className="text-xs text-[#637594] block">
                26.9124° N, 75.7873° E
              </span>
            </div>

            {/* Wireframe Holographic Globe Overlay on Right */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-24 h-24 pointer-events-none opacity-25">
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 stroke-current fill-none">
                <circle cx="50" cy="50" r="40" strokeWidth="1" />
                <ellipse cx="50" cy="50" rx="40" ry="18" strokeWidth="1" />
                <ellipse cx="50" cy="50" rx="18" ry="40" strokeWidth="1" />
                <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1" />
                <line x1="50" y1="10" x2="50" y2="90" strokeWidth="1" />
                <circle cx="65" cy="40" r="3" fill="#06b6d4" />
              </svg>
            </div>
          </div>

          {/* Right Card: Status & Availability with Line Graph Overlay */}
          <div className="relative p-6 bg-[#061221]/90 border border-cyan-500/30 rounded-[16px] overflow-hidden hover:border-cyan-400/60 transition-colors">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs text-cyan-400 tracking-widest uppercase mb-2">
                <span>⚡ STATUS &amp; AVAILABILITY</span>
              </div>
              <strong className="text-base text-white block mb-1 font-sans">
                Open for AI &amp; Systems Roles
              </strong>
              <span className="text-xs text-[#637594] block">
                Active (2026) · Remote / On-Site
              </span>
            </div>

            {/* Glowing Pulse Wave Telemetry Line Graph on Right */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-28 h-12 pointer-events-none opacity-35">
              <svg viewBox="0 0 120 40" className="w-full h-full text-cyan-400 stroke-current fill-none" strokeWidth="1.5">
                <path d="M0 20 Q 20 20, 30 10 T 50 30 T 70 5 T 90 25 T 120 20" strokeDasharray="2 2" />
                <circle cx="90" cy="25" r="3" fill="#06b6d4" className="animate-ping" />
                <circle cx="90" cy="25" r="2" fill="#38bdf8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Social Pill Link Buttons */}
        <div className="relative z-10 pl-0 lg:pl-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-cyan-500/20 font-mono text-xs">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/raunakxshrivastva"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#061221] hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-300 text-white rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <span>🐙 GitHub</span>
              <span className="text-[10px] text-cyan-400">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/raunak-shrivastva-319551427/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#061221] hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-300 text-white rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <span>💼 LinkedIn</span>
              <span className="text-[10px] text-cyan-400">↗</span>
            </a>

            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#061221] hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-300 text-white rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <span>𝕏 / Twitter</span>
              <span className="text-[10px] text-cyan-400">↗</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#061221] hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-300 text-white rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <span>📄 Resume</span>
              <span className="text-[10px] text-cyan-400">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-cyan-500/60 text-[10px] tracking-widest">
            <span>SYS_ONLINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export function Contact() {
  const [pillChosen, setPillChosen] = useState<"red" | "blue" | null>(null);

  return (
    <section
      id="contact"
      className="relative w-full bg-[#050505] text-[#ded8ce] py-12 border-t border-[#1c1b19] overflow-hidden min-h-screen flex flex-col justify-center items-center px-0"
    >
      {/* Smooth Bottom-to-Top Vanishing Overlay if Red Pill Chosen */}
      <AnimatePresence>
        {pillChosen === "red" && (
          <SmoothDisintegrationOverlay onReset={() => setPillChosen(null)} />
        )}
      </AnimatePresence>

      {/* Redesigned Blue Pill Contact Modal if Blue Pill Chosen */}
      <AnimatePresence>
        {pillChosen === "blue" && (
          <ContactModal onClose={() => setPillChosen(null)} />
        )}
      </AnimatePresence>

      {/* Cybernetic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121110_1px,transparent_1px),linear-gradient(to_bottom,#121110_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="w-full relative z-10 flex flex-col items-center">
        
        {/* Massive Section Header */}
        <motion.div
          {...fadeInUp}
          className="w-full max-w-7xl px-6 mb-8 text-left"
        >
          <div className="flex items-center justify-between border-b border-[#24221f] pb-3 mb-6 font-mono text-xs text-[#8c867a]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-bold tracking-widest uppercase">
                // 04 INTERACTIVE NEURAL CONSOLE
              </span>
            </div>
            <div className="hidden sm:block tracking-widest text-[#666157]">
              LAT: 26.9124° N // LON: 75.7873° E
            </div>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white uppercase tracking-tight leading-none mb-3">
            Get In Touch.
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#a8a295] tracking-widest uppercase">
            CHOOSE YOUR MATRIX REALITY — CLICK A PILL IN THE ROBOT'S HANDS TO CONNECT OR DISINTEGRATE.
          </p>
        </motion.div>

        {/* 100% EDGE-TO-EDGE FULL WIDTH STAGE FOR THE ROBOT & PILLS */}
        <motion.div
          {...fadeInUp}
          className="relative w-full px-0 mx-auto flex justify-center items-center overflow-hidden"
        >
          <div className="relative w-full bg-black border-y border-[#24221f] overflow-hidden shadow-2xl group flex items-center justify-center">
            
            {/* Edge-to-Edge Full-Width Cybernetic Robot Image */}
            <img
              src="/robot_pills.png"
              alt="Cybernetic Humanoid Robot holding Red and Blue Pills"
              className="w-full h-auto object-cover block min-w-full max-h-[88vh] mx-auto filter contrast-110 brightness-95"
            />

            {/* BLUE PILL ANIMATED CLICK HOTSPOT (Positioned EXACTLY over the Blue Pill in hand) */}
            <div className="absolute left-[25.2%] top-[67.2%] -translate-x-1/2 -translate-y-1/2 z-30">
              <button
                onClick={() => setPillChosen("blue")}
                className="relative group/pill flex items-center justify-center cursor-pointer p-2 focus:outline-none"
                title="Click Blue Pill to Contact Me"
              >
                {/* Seamless Glow aura directly over the pill in hand */}
                <span className="absolute w-12 sm:w-16 h-6 sm:h-8 rounded-full bg-cyan-400/70 blur-md animate-pulse pointer-events-none group-hover/pill:scale-125 transition-transform" />
                <span className="absolute w-16 sm:w-20 h-8 sm:h-10 rounded-full bg-blue-500/40 blur-lg animate-ping pointer-events-none" />

                {/* Hotspot Target Box over image pill */}
                <span className="w-10 sm:w-16 h-5 sm:h-7 rounded-full group-hover/pill:scale-125 transition-transform duration-300 flex items-center justify-center" />

                {/* Hover Tooltip Badge */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1.5 bg-[#090909]/95 border border-cyan-400 text-cyan-300 text-[10px] sm:text-xs font-mono tracking-widest uppercase rounded-xs shadow-2xl opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 pointer-events-none">
                  ✦ CLICK: TAKE BLUE PILL (GET IN TOUCH)
                </span>
              </button>
            </div>

            {/* RED PILL ANIMATED CLICK HOTSPOT (Positioned EXACTLY over the Red Pill in hand) */}
            <div className="absolute left-[74.8%] top-[67.2%] -translate-x-1/2 -translate-y-1/2 z-30">
              <button
                onClick={() => setPillChosen("red")}
                className="relative group/pill flex items-center justify-center cursor-pointer p-2 focus:outline-none"
                title="Click Red Pill to Disintegrate Matrix"
              >
                {/* Seamless Glow aura directly over the pill in hand */}
                <span className="absolute w-12 sm:w-16 h-6 sm:h-8 rounded-full bg-red-500/70 blur-md animate-pulse pointer-events-none group-hover/pill:scale-125 transition-transform" />
                <span className="absolute w-16 sm:w-20 h-8 sm:h-10 rounded-full bg-red-600/40 blur-lg animate-ping pointer-events-none" />

                {/* Hotspot Target Box over image pill */}
                <span className="w-10 sm:w-16 h-5 sm:h-7 rounded-full group-hover/pill:scale-125 transition-transform duration-300 flex items-center justify-center" />

                {/* Hover Tooltip Badge */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1.5 bg-[#090909]/95 border border-red-500 text-red-300 text-[10px] sm:text-xs font-mono tracking-widest uppercase rounded-xs shadow-2xl opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 pointer-events-none">
                  ✦ CLICK: TAKE RED PILL (SEE YOU LATER)
                </span>
              </button>
            </div>

            {/* CLICKABLE REGIONS OVER LEFT / RIGHT SIDES OF THE IMAGE */}
            <div 
              onClick={() => setPillChosen("blue")}
              className="absolute left-0 top-0 w-1/2 h-full z-20 cursor-pointer"
              title="Click anywhere on Left side to Take Blue Pill"
            />
            <div 
              onClick={() => setPillChosen("red")}
              className="absolute right-0 top-0 w-1/2 h-full z-20 cursor-pointer"
              title="Click anywhere on Right side to Take Red Pill"
            />

          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="w-full max-w-7xl px-6 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-[#6b655b]"
        >
          <p>© {new Date().getFullYear()} Raunak Shrivastva. All rights reserved.</p>
          <p>Jaipur, Rajasthan, India [26.9124° N, 75.7873° E]</p>
        </motion.footer>

      </div>
    </section>
  );
}
