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
    const particleCount = 6000;
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
        vx: (Math.random() - 0.5) * 4 + 2, // Slight right drift like Thanos snap
        vy: (Math.random() - 0.5) * 4 - 1.5, // Upward drift
        size: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.9 + 0.1,
        decay: Math.random() * 0.008 + 0.002,
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.fillStyle = "rgba(9, 9, 9, 0.25)";
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
          ctx.shadowBlur = 4;
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
      className="fixed inset-0 z-[9999] bg-[#090909] flex flex-col items-center justify-center p-6 text-[#ded8ce] font-mono overflow-hidden backdrop-blur-3xl"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Futuristic Dissolution Status Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20 max-w-xl w-full p-8 bg-[#12110f]/90 border border-red-500/50 rounded-xs shadow-[0_0_50px_rgba(239,68,68,0.3)] backdrop-blur-xl text-center space-y-6"
      >
        <div className="flex items-center justify-center gap-3 text-red-500 font-bold tracking-widest text-sm uppercase">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
          <span>[SYSTEM PROTOCOL // MATRIX DISSOLVED]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif text-white font-light tracking-wide">
          "The Matrix has been snapped."
        </h2>

        <p className="text-xs text-[#a8a295] leading-relaxed">
          The webpage telemetry has disintegrated into digital dust particles. See you later, Architect.
        </p>

        <div className="pt-4 border-t border-[#292420] flex justify-center">
          <button
            onClick={onReset}
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-xs shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>⚡ REBOOT MATRIX &amp; RESTORE</span>
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

  // Mouse move perspective tracking for 3D robot head
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

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
      className="relative w-full bg-[#080808] text-[#ded8ce] py-28 border-t border-[#1c1b19] overflow-hidden min-h-screen flex flex-col justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Thanos Disintegration Overlay if Red Pill Chosen */}
      <AnimatePresence>
        {pillChosen === "red" && (
          <DisintegrationOverlay onReset={() => setPillChosen(null)} />
        )}
      </AnimatePresence>

      {/* Cybernetic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141311_1px,transparent_1px),linear-gradient(to_bottom,#141311_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Telemetry Section Header */}
        <motion.div
          {...fadeInUp}
          className="flex items-center justify-between border-b border-[#24221f] pb-4 mb-12 font-mono text-xs text-[#8c867a]"
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

        {/* Section Heading */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            // INTERACTIVE NEURAL CONSOLE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-white font-light tracking-tight uppercase">
            Choose Your Reality
          </h2>
          <p className="text-sm font-sans text-[#a8a295] max-w-xl mx-auto mt-3">
            Interact with the 3D Cybernetic Humanoid Guardian below. Select your path to connect or dissolve the matrix.
          </p>
        </motion.div>

        {/* 3D Humanoid Robot HUD & Pill Matrix Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left / Center 3D Cybernetic Humanoid Hologram (Col 6) */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[460px] p-6 bg-[#0f0e0c]/90 border border-[#24221f] rounded-xs shadow-2xl overflow-hidden group"
          >
            {/* Corner Blueprint Markers */}
            <span className="absolute top-3 left-3 font-mono text-[9px] text-[#4d4942]">
              HUMANOID_UNIT // CORE-3D
            </span>
            <span className="absolute top-3 right-3 font-mono text-[9px] text-cyan-400/80">
              STATUS: ONLINE
            </span>
            <span className="absolute bottom-3 left-3 font-mono text-[9px] text-[#6b655b]">
              26.9124° N, 75.7873° E
            </span>

            {/* 3D Rotating Holographic Cybernetic Robot Head */}
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 25}deg) rotateX(${-mousePos.y * 25}deg)`,
                perspective: 1000,
              }}
            >
              {/* Outer Cybernetic Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-amber-500/20 border-dashed animate-[spin_15s_linear_infinite_reverse]" />

              {/* 3D Cybernetic Humanoid Robot SVG Core */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full filter drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                {/* Robot Skull Structure */}
                <path
                  d="M50 80 C50 35, 150 35, 150 80 C150 120, 130 155, 100 165 C70 155, 50 120, 50 80 Z"
                  fill="#12110f"
                  stroke="#2d2a26"
                  strokeWidth="3"
                />

                {/* Forehead Micro-circuit Blueprint Lines */}
                <path d="M70 55 L100 75 L130 55" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="100" cy="75" r="4" fill="#06b6d4" className="animate-ping" />
                <circle cx="100" cy="75" r="3" fill="#38bdf8" />

                {/* Glowing Cybernetic Visor / Eyes */}
                <rect x="68" y="80" width="28" height="12" rx="2" fill="#090909" stroke="#06b6d4" strokeWidth="1.5" />
                <rect x="104" y="80" width="28" height="12" rx="2" fill="#090909" stroke="#06b6d4" strokeWidth="1.5" />

                <circle cx="82" cy="86" r="3" fill={pillChosen === "blue" ? "#38bdf8" : pillChosen === "red" ? "#ef4444" : "#f59e0b"} className="animate-pulse" />
                <circle cx="118" cy="86" r="3" fill={pillChosen === "blue" ? "#38bdf8" : pillChosen === "red" ? "#ef4444" : "#f59e0b"} className="animate-pulse" />

                {/* Jaw & Mouth Ventilation Grille */}
                <path d="M80 120 H120 M85 128 H115 M90 136 H110" stroke="#3d3933" strokeWidth="2" strokeLinecap="round" />

                {/* Cheek telemetry nodes */}
                <circle cx="62" cy="105" r="2.5" fill="#f59e0b" />
                <circle cx="138" cy="105" r="2.5" fill="#f59e0b" />
              </svg>

              {/* Central Energy Heart Core */}
              <div className="absolute w-6 h-6 rounded-full bg-cyan-400/80 blur-md animate-pulse" />
            </div>

            {/* Robot Speech / Console Guidance */}
            <div className="mt-6 text-center space-y-2">
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
                [HUMANOID RESPONSE MODULE]
              </span>
              <p className="text-xs font-mono text-[#ded8ce] max-w-md">
                {pillChosen === "blue"
                  ? "✦ BLUE PILL ACTIVE: Holographic communication channels opened below."
                  : pillChosen === "red"
                  ? "✦ RED PILL ACTIVE: Initiating Thanos disintegration..."
                  : '"Choose the Blue Pill to contact Raunak, or the Red Pill to dissolve the Matrix."'}
              </p>
            </div>

            {/* Pill Selection Trigger Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 z-20">
              {/* RED PILL BUTTON */}
              <button
                onClick={() => setPillChosen("red")}
                className="group relative px-6 py-3.5 bg-[#170a0a] border border-red-500/60 rounded-full hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                {/* 3D Glowing Red Capsule Icon */}
                <span className="w-5 h-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_#ef4444] group-hover:scale-110 transition-transform" />
                <div className="text-left font-mono">
                  <span className="text-[9px] text-red-400 block tracking-widest uppercase font-bold">
                    [DISINTEGRATE]
                  </span>
                  <span className="text-xs text-white font-bold tracking-wider">
                    RED PILL
                  </span>
                </div>
              </button>

              {/* BLUE PILL BUTTON */}
              <button
                onClick={() => setPillChosen("blue")}
                className="group relative px-6 py-3.5 bg-[#0a141a] border border-cyan-500/60 rounded-full hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                {/* 3D Glowing Blue Capsule Icon */}
                <span className="w-5 h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-400 shadow-[0_0_10px_#06b6d4] group-hover:scale-110 transition-transform" />
                <div className="text-left font-mono">
                  <span className="text-[9px] text-cyan-400 block tracking-widest uppercase font-bold">
                    [CONTACT ME]
                  </span>
                  <span className="text-xs text-white font-bold tracking-wider">
                    BLUE PILL
                  </span>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Contact Dossier & Message Console (Col 6) */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 bg-[#12110f] border border-[#24221f] rounded-xs relative"
          >
            {/* Header */}
            <div className="border-b border-[#24221f] pb-4 mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                // DIRECT TELEMETRY CHANNELS
              </span>
              <h3 className="text-2xl font-serif text-white font-light">
                Architect Dossier &amp; Direct Messaging
              </h3>
            </div>

            {/* Quick Contact Info Matrix */}
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

            {/* Social & Research Profiles */}
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

            {/* Interactive Message Console Form */}
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
                        placeholder="e.g. Elon Musk"
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
                      placeholder="AI Research / Systems Optimization / Consulting"
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
                      rows={3}
                      required
                      placeholder="Write your message or project inquiry here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3 py-2.5 bg-[#090909] border border-[#24221f] text-white rounded-xs focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-[#4d4942] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#171614] hover:bg-cyan-500 hover:text-black border border-[#383633] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>⚡ TRANSMIT MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

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
