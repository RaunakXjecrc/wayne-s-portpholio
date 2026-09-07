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

// Blue Pill Holographic Contact Modal Component
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
      className="fixed inset-0 z-[9990] bg-black/85 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative max-w-2xl w-full bg-[#0d131a] border border-cyan-500/50 p-8 rounded-xs shadow-[0_0_50px_rgba(6,182,212,0.4)] text-[#ded8ce] font-mono cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 hover:text-white text-sm font-bold p-1 cursor-pointer"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 text-cyan-400 text-xs tracking-widest uppercase mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>// BLUE PILL ACTIVATED: ARCHITECT CONTACT</span>
        </div>

        <h3 className="text-3xl font-serif text-white font-light mb-6">
          Raunak Shrivastva — Direct Channels
        </h3>

        {/* Email Box */}
        <div className="p-4 bg-[#080d12] border border-cyan-500/40 rounded-xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest block mb-1">
              ✉ DIRECT EMAIL
            </span>
            <span className="text-base text-white font-bold tracking-wide select-all">
              raunakxshrivastva@gmail.com
            </span>
          </div>

          <button
            onClick={copyEmail}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold text-xs uppercase tracking-widest rounded-xs transition-colors cursor-pointer whitespace-nowrap"
          >
            {copied ? "✓ COPIED!" : "COPY EMAIL"}
          </button>
        </div>

        {/* Location & Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
          <div className="p-4 bg-[#080d12] border border-[#1e2630] rounded-xs">
            <span className="text-[10px] text-amber-400 uppercase tracking-widest block mb-1">
              📍 OPERATING REGION
            </span>
            <strong className="text-white block text-sm">Jaipur, Rajasthan, India</strong>
            <span className="text-[10px] text-[#706a61] block pt-1">
              [26.9124° N, 75.7873° E]
            </span>
          </div>

          <div className="p-4 bg-[#080d12] border border-[#1e2630] rounded-xs">
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest block mb-1">
              ⚡ STATUS &amp; AVAILABILITY
            </span>
            <strong className="text-white block text-sm">Open for AI &amp; Systems Roles</strong>
            <span className="text-[10px] text-[#706a61] block pt-1">
              Active (2026) · Remote / On-Site
            </span>
          </div>
        </div>

        {/* Social Profiles */}
        <div className="pt-4 border-t border-[#1e2630] flex flex-wrap gap-3 text-xs">
          <a
            href="https://github.com/raunakxshrivastva"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#080d12] border border-cyan-500/40 hover:border-cyan-400 text-white rounded-xs transition-colors flex items-center gap-2"
          >
            <span>🐙 GitHub</span>
            <span className="text-[10px] text-cyan-400">↗</span>
          </a>

          <a
            href="https://linkedin.com/in/raunakxshrivastva"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#080d12] border border-cyan-500/40 hover:border-cyan-400 text-white rounded-xs transition-colors flex items-center gap-2"
          >
            <span>💼 LinkedIn</span>
            <span className="text-[10px] text-cyan-400">↗</span>
          </a>

          <a
            href="https://instagram.com/raunakxshrivastva"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#080d12] border border-cyan-500/40 hover:border-cyan-400 text-white rounded-xs transition-colors flex items-center gap-2"
          >
            <span>📸 Instagram</span>
            <span className="text-[10px] text-cyan-400">↗</span>
          </a>
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

      {/* Blue Pill Contact Modal if Blue Pill Chosen */}
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
                {/* Seamless Glow aura directly over the pill in hand - NO mismatching outer ring */}
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
                {/* Seamless Glow aura directly over the pill in hand - NO mismatching outer ring */}
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
