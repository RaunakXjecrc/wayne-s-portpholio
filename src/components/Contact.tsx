"use client";

import React, { useState, useRef, useEffect } from "react";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  // Real-time Flashlight Spotlight Mouse Tracking
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
      sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const node = sectionRef.current;
    if (node) {
      node.addEventListener("mousemove", handleGlobalMouseMove);
    }
    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleGlobalMouseMove);
      }
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("raunakxshrivastva@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", topic: "", message: "" });
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#070707] text-[#ded8ce] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 selection:bg-white selection:text-black"
      style={
        {
          "--mouse-x": "-500px",
          "--mouse-y": "-500px",
        } as React.CSSProperties
      }
    >
      {/* =========================================================================
          LAYER 0: Underlying Background Text Watermark (z-index: 0)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 flex flex-col justify-between items-center overflow-hidden pointer-events-none select-none py-4 opacity-40">
        <h1
          className="w-full text-center font-black uppercase text-white/[0.04] leading-[0.8] tracking-tight"
          style={{ fontSize: "clamp(6rem, 18vw, 22rem)" }}
        >
          CONNECT
        </h1>
        <h1
          className="w-full text-center font-black uppercase text-white/[0.04] leading-[0.8] tracking-tight"
          style={{ fontSize: "clamp(6rem, 18vw, 22rem)" }}
        >
          CONNECT
        </h1>
      </div>

      {/* =========================================================================
          LAYER 1: Continuous Flashlight Spotlight Text Reveal Overlay (z-index: 1)
          ========================================================================= */}
      <div
        className="absolute inset-0 z-[1] flex flex-col justify-between items-center overflow-hidden pointer-events-none select-none py-4"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle 220px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)",
          maskImage:
            "radial-gradient(circle 220px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)",
        }}
      >
        <h1
          className="w-full text-center font-black uppercase text-white leading-[0.8] tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]"
          style={{ fontSize: "clamp(6rem, 18vw, 22rem)" }}
        >
          CONNECT
        </h1>
        <h1
          className="w-full text-center font-black uppercase text-white leading-[0.8] tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]"
          style={{ fontSize: "clamp(6rem, 18vw, 22rem)" }}
        >
          CONNECT
        </h1>
      </div>

      {/* =========================================================================
          LAYER 10: Interactive Foreground Content (z-index: 10)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[85vh] pointer-events-auto">
        {/* BIG CENTERED TITLE FOR GET IN TOUCH */}
        <div className="w-full text-center mb-8 sm:mb-12 pt-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white font-sans drop-shadow-lg">
            GET IN TOUCH
          </h2>
        </div>

        {/* Main Content Grid: Left Info & Right Glassmorphic Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
          {/* Left Column: Headline, Availability, Email Copy Pill, Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Research &amp; Collaborations</span>
            </div>

            {/* Static Headline (No hover movement) */}
            <div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.88] font-sans drop-shadow-2xl">
                LET’S BUILD
                <br />
                SOMETHING
                <br />
                INTEGRATED.
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#a8a295] max-w-lg leading-relaxed font-sans">
              Whether you want to explore model fine-tuning, autonomous systems,
              or front-end engineering, my inbox is open.
            </p>

            {/* Email Copy Pill & Resume Download Button Container */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={copyEmail}
                className="group relative w-full sm:w-auto px-7 py-4 bg-[#141414]/90 hover:bg-[#1f1f1f] border border-white/20 hover:border-white/40 rounded-full text-left transition-colors duration-300 flex items-center justify-between gap-6 shadow-2xl cursor-pointer active:scale-95"
              >
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-mono font-bold text-white tracking-wide">
                    raunakxshrivastva@gmail.com
                  </div>
                  <div className="text-[11px] font-mono text-[#8c867a] group-hover:text-[#c5beb3] transition-colors">
                    {copied ? "✓ Address copied to clipboard!" : "Click to copy address"}
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                </div>
              </button>

              <a
                href="/resume.pdf"
                download="Raunak_Shrivastva_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#141414]/90 hover:bg-white hover:text-black border border-white/20 hover:border-white/40 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-3 shadow-2xl cursor-pointer active:scale-95"
              >
                <span>📄 Resume</span>
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs">
                  ↓
                </span>
              </a>
            </div>

            {/* Direct Channels Footer */}
            <div className="pt-4">
              <div className="border-t border-white/10 pt-6 space-y-3 font-mono text-xs">
                <div className="text-[#7a7469] uppercase tracking-widest font-bold">
                  Direct Channels
                </div>
                <div className="grid grid-cols-2 gap-6 text-[#c5beb3]">
                  <div>
                    <span className="text-[#7a7469] block text-[10px] uppercase mb-1">
                      Location
                    </span>
                    <span className="text-white font-medium">
                      Jaipur, India IST
                    </span>
                  </div>
                  <div>
                    <span className="text-[#7a7469] block text-[10px] uppercase mb-1">
                      Network
                    </span>
                    <div className="flex items-center gap-3 text-white font-medium">
                      <a
                        href="https://www.linkedin.com/in/raunak-shrivastva-319551427/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-cyan-400 transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/raunakxshrivastva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-cyan-400 transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://x.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-cyan-400 transition-colors"
                      >
                        𝕏
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form Card */}
          <div className="lg:col-span-6">
            <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] space-y-6">
              {/* 4-Point Sparkle Star Top/Bottom Accent */}
              <div className="absolute -bottom-3 -right-3 text-white/40 pointer-events-none">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-[#a8a295]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors font-sans text-sm"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-[#a8a295]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Text-only placeholder"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors font-sans text-sm"
                  />
                </div>

                {/* Topic Select */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-[#a8a295]">
                    Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/80 border border-white/15 rounded-xl text-white focus:outline-none focus:border-white/50 transition-colors font-sans text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Topic
                    </option>
                    <option value="model-finetuning">
                      Model Fine-Tuning &amp; Deep Learning
                    </option>
                    <option value="autonomous-systems">
                      Autonomous Systems &amp; CUDA
                    </option>
                    <option value="frontend">
                      Front-End &amp; UI Architecture
                    </option>
                    <option value="research">Research &amp; Collaboration</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs text-[#a8a295]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors font-sans text-sm resize-none"
                  />
                </div>

                {/* Card Bottom Row: Response Time & Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                  <span className="text-[#8c867a]">
                    Response time: ~24 hours
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#eae6df] text-black font-bold rounded-xl transition-all duration-200 cursor-pointer shadow-lg active:scale-95 text-sm"
                  >
                    {formSubmitted ? "Dispatch Sent! ✓" : "Send Dispatch"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Section Footer Copyright */}
        <footer className="w-full pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-[#7a7469] border-t border-white/5 mt-12">
          <p>© {new Date().getFullYear()} Raunak Shrivastva. All rights reserved.</p>
          <p>Jaipur, India IST [26.9124° N, 75.7873° E]</p>
        </footer>
      </div>
    </section>
  );
}
