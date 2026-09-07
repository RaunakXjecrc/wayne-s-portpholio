"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Thanos Disintegration Dust Canvas Component
function DisintegrationOverlay({ onReset }: { onReset: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dissolved, setDissolved] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate thousands of dust particles
    const particleCount = 7000;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
    }> = [];

    const colors = ["#ef4444", "#dc2626", "#991b1b", "#ffffff", "#f59e0b", "#3b82f6", "#06b6d4"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 5 + 3, // Rightward Thanos drift
        vy: (Math.random() - 0.5) * 4 - 2, // Upward drift
        size: Math.random() * 2.8 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.95 + 0.05,
        decay: Math.random() * 0.007 + 0.002,
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.fillStyle = "rgba(8, 8, 8, 0.25)";
      ctx.fillRect(0, 0, width, height);

      let aliveCount = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.alpha > 0) {
          aliveCount++;
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      if (aliveCount > 100) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        setDissolved(true);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#080808] flex flex-col items-center justify-center p-6 text-[#ded8ce] font-mono overflow-hidden backdrop-blur-3xl"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Disintegration Alert Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-20 max-w-xl w-full p-8 bg-[#12110f]/90 border border-red-500/60 rounded-xs shadow-[0_0_60px_rgba(239,68,68,0.4)] backdrop-blur-xl text-center space-y-6"
      >
        <div className="flex items-center justify-center gap-3 text-red-500 font-bold tracking-widest text-sm uppercase">
          <span className="w-3.5 h-3.5 rounded-full bg-red-500 animate-ping" />
          <span>[SYSTEM PROTOCOL // MATRIX DISSOLVED]</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif text-white font-light tracking-wide">
          "The Matrix has turned to dust."
        </h2>

        <p className="text-xs text-[#a8a295] leading-relaxed font-sans">
          You chose the Red Pill. The web dossier has disintegrated into ash. See you later, Architect.
        </p>

        <div className="pt-4 border-t border-[#292420] flex justify-center">
          <button
            onClick={onReset}
            className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-xs shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>⚡ REBOOT MATRIX &amp; RESTORE WEBSITE</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Contact() {
  const [pillChosen, setPillChosen] = useState<"red" | "blue" | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#050505] text-[#ded8ce] py-24 border-t border-[#1c1b19] overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Thanos Disintegration Overlay if Red Pill Chosen */}
      <AnimatePresence>
        {pillChosen === "red" && (
          <DisintegrationOverlay onReset={() => setPillChosen(null)} />
        )}
      </AnimatePresence>

      {/* Cybernetic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121110_1px,transparent_1px),linear-gradient(to_bottom,#121110_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Telemetry Header */}
        <motion.div
          {...fadeInUp}
          className="flex items-center justify-between border-b border-[#24221f] pb-4 mb-10 font-mono text-xs text-[#8c867a]"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-bold tracking-widest uppercase">
              // TELEMETRY HUD: GET IN TOUCH
            </span>
          </div>
          <div className="hidden sm:block tracking-widest text-[#666157]">
            PROTOCOL // CHOICE_SELECTION
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeInUp} className="text-center mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            // INTERACTIVE NEURAL CONSOLE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-white font-light tracking-tight uppercase">
            Take The Pill
          </h2>
          <p className="text-sm font-sans text-[#a8a295] max-w-xl mx-auto mt-2">
            Click directly on the animated glowing pills held in the robot's hands below.
          </p>
        </motion.div>

        {/* Interactive 3D Robot Image & Pill Hotspots Stage */}
        <motion.div
          {...fadeInUp}
          className="relative w-full max-w-5xl mx-auto bg-[#0a0a09] border border-[#24221f] rounded-xs overflow-hidden shadow-2xl group mb-12"
        >
          {/* Main Cybernetic Robot Image */}
          <img
            src="/robot_pills.png"
            alt="Cybernetic Humanoid Robot holding Red and Blue Pills"
            className="w-full h-auto object-cover filter contrast-110 brightness-95"
          />

          {/* BLUE PILL INTERACTIVE OVERLAY (Robot's Right Hand / Viewer's Left) */}
          <div className="absolute left-[17%] sm:left-[21%] top-[64%] sm:top-[66%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            {/* Animated Pulsating Glowing Aura */}
            <button
              onClick={() => setPillChosen("blue")}
              className="relative group/pill flex items-center justify-center cursor-pointer p-3 focus:outline-none"
              title="Click to Take Blue Pill & Open Contact Channels"
            >
              {/* Outer Pulse Rings */}
              <span className="absolute w-16 h-10 rounded-full bg-cyan-500/40 blur-md animate-ping pointer-events-none" />
              <span className="absolute w-20 h-12 rounded-full bg-blue-600/30 blur-lg animate-pulse pointer-events-none" />

              {/* Glowing Interactive Capsule Button */}
              <span className="relative w-12 sm:w-16 h-6 sm:h-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 border-2 border-cyan-200 shadow-[0_0_25px_#06b6d4] group-hover/pill:scale-125 transition-transform duration-300 flex items-center justify-center">
                <span className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,transparent_70%)] opacity-80" />
              </span>

              {/* Tooltip Badge */}
              <span className="absolute -top-10 whitespace-nowrap px-3 py-1 bg-[#090909]/95 border border-cyan-400 text-cyan-300 text-[10px] font-mono tracking-widest uppercase rounded-xs shadow-xl opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 pointer-events-none">
                ✦ CLICK: TAKE BLUE PILL (GET IN TOUCH)
              </span>
            </button>
          </div>

          {/* RED PILL INTERACTIVE OVERLAY (Robot's Left Hand / Viewer's Right) */}
          <div className="absolute right-[17%] sm:right-[21%] top-[64%] sm:top-[66%] translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            {/* Animated Pulsating Glowing Aura */}
            <button
              onClick={() => setPillChosen("red")}
              className="relative group/pill flex items-center justify-center cursor-pointer p-3 focus:outline-none"
              title="Click to Take Red Pill & Disintegrate Website"
            >
              {/* Outer Pulse Rings */}
              <span className="absolute w-16 h-10 rounded-full bg-red-500/40 blur-md animate-ping pointer-events-none" />
              <span className="absolute w-20 h-12 rounded-full bg-red-600/30 blur-lg animate-pulse pointer-events-none" />

              {/* Glowing Interactive Capsule Button */}
              <span className="relative w-12 sm:w-16 h-6 sm:h-8 rounded-full bg-gradient-to-r from-red-500 via-rose-600 to-red-400 border-2 border-red-200 shadow-[0_0_25px_#ef4444] group-hover/pill:scale-125 transition-transform duration-300 flex items-center justify-center">
                <span className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,transparent_70%)] opacity-80" />
              </span>

              {/* Tooltip Badge */}
              <span className="absolute -top-10 whitespace-nowrap px-3 py-1 bg-[#090909]/95 border border-red-500 text-red-300 text-[10px] font-mono tracking-widest uppercase rounded-xs shadow-xl opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 pointer-events-none">
                ✦ CLICK: TAKE RED PILL (SEE YOU LATER)
              </span>
            </button>
          </div>
        </motion.div>

        {/* Quick Action Button Bar */}
        <motion.div {...fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mb-16 font-mono">
          <button
            onClick={() => setPillChosen("blue")}
            className="px-6 py-3.5 bg-[#0a141a] border border-cyan-500/60 rounded-full hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
          >
            <span className="w-4 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
            <span className="text-xs text-white font-bold tracking-widest uppercase">
              TAKE THE BLUE PILL // GET IN TOUCH
            </span>
          </button>

          <button
            onClick={() => setPillChosen("red")}
            className="px-6 py-3.5 bg-[#170a0a] border border-red-500/60 rounded-full hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
          >
            <span className="w-4 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
            <span className="text-xs text-white font-bold tracking-widest uppercase">
              TAKE THE RED PILL // SEE YOU LATER
            </span>
          </button>
        </motion.div>

        {/* Contact Dossier & Message Console */}
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto p-8 bg-[#12110f] border border-[#24221f] rounded-xs relative"
        >
          {/* Header */}
          <div className="border-b border-[#24221f] pb-4 mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
              // ARCHITECT CONTACT CONSOLE
            </span>
            <h3 className="text-2xl font-serif text-white font-light">
              Direct Communication Channels &amp; Inquiry Form
            </h3>
          </div>

          {/* Quick Info Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-mono text-xs">
            <a
              href="mailto:raunakxshrivastva@gmail.com"
              className="p-4 bg-[#0a0a09] border border-[#1e1c19] rounded-xs hover:border-cyan-400 transition-colors block group"
            >
              <span className="text-[10px] text-cyan-400 uppercase block mb-1">
                ✉ EMAIL DIRECT
              </span>
              <strong className="text-white block truncate group-hover:text-cyan-300">
                raunakxshrivastva@gmail.com
              </strong>
            </a>

            <div className="p-4 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
              <span className="text-[10px] text-amber-400 uppercase block mb-1">
                📍 LOCATION
              </span>
              <strong className="text-white block">
                Jaipur, Rajasthan, India
              </strong>
              <span className="text-[9px] text-[#706a61] block">
                [26.9124° N, 75.7873° E]
              </span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="mb-8">
            <span className="text-[10px] font-mono text-[#8c867a] uppercase tracking-widest block mb-3">
              // CONNECTED NETWORKS
            </span>
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <a
                href="https://github.com/raunakxshrivastva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#090909] border border-[#24221f] hover:border-cyan-400 text-white rounded-xs transition-all flex items-center gap-2"
              >
                <span>🐙 GitHub</span>
                <span className="text-[10px] text-[#6b655b]">↗</span>
              </a>

              <a
                href="https://linkedin.com/in/raunakxshrivastva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#090909] border border-[#24221f] hover:border-cyan-400 text-white rounded-xs transition-all flex items-center gap-2"
              >
                <span>💼 LinkedIn</span>
                <span className="text-[10px] text-[#6b655b]">↗</span>
              </a>

              <a
                href="https://instagram.com/raunakxshrivastva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#090909] border border-[#24221f] hover:border-cyan-400 text-white rounded-xs transition-all flex items-center gap-2"
              >
                <span>📸 Instagram</span>
                <span className="text-[10px] text-[#6b655b]">↗</span>
              </a>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="pt-6 border-t border-[#1e1d1a]">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-4">
              // SEND DIRECT INQUIRY
            </span>

            {formSubmitted ? (
              <div className="p-6 bg-cyan-950/30 border border-cyan-500/50 rounded-xs text-center font-mono space-y-2">
                <span className="text-xs text-cyan-300 font-bold block">
                  ✓ TELEMETRY TRANSMITTED SUCCESSFULLY
                </span>
                <p className="text-[11px] text-[#a8a295]">
                  Thank you! Raunak will receive your message and respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-[#8c867a] uppercase mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sam Altman"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2.5 bg-[#090909] border border-[#24221f] text-white rounded-xs focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-[#4d4942]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#8c867a] uppercase mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2.5 bg-[#090909] border border-[#24221f] text-white rounded-xs focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-[#4d4942]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-[#8c867a] uppercase mb-1">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="AI Systems / Kernel Optimization / Research"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-[#090909] border border-[#24221f] text-white rounded-xs focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-[#4d4942]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-[#8c867a] uppercase mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-[#090909] border border-[#24221f] text-white rounded-xs focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-[#4d4942] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg.171614 hover:bg-cyan-500 hover:text-black border border-[#383633] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>⚡ TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-20 pt-8 border-t border-[#1c1b19] flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-[#6b655b]"
        >
          <p>© {new Date().getFullYear()} Raunak Shrivastva. All rights reserved.</p>
          <p>Jaipur, Rajasthan, India [26.9124° N, 75.7873° E]</p>
        </motion.footer>
      </div>
    </section>
  );
}
