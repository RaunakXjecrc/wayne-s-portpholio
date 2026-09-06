"use client";

import React from "react";
import { profile } from "@/data/portfolio";

export function ContactFooter() {
  return (
    <footer id="contact" className="w-full bg-[#070707] border-t border-[#1c1b19] text-[#ded8ce] font-mono relative overflow-hidden">
      
      {/* Background Subtle Noise & Watermark */}
      <div className="absolute right-4 bottom-4 font-serif text-[120px] sm:text-[180px] text-[#141312] select-none pointer-events-none opacity-30 leading-none">
        和
      </div>

      {/* Main Contact Section Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-[#1c1b19]">
          
          {/* Left Column: Brand & Bio */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#858077] uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>CONTACT // GET IN TOUCH</span>
              </div>
              
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#e3ded7] tracking-tight mb-4">
                Let's Build The Future.
              </h3>
              
              <p className="text-xs sm:text-sm text-[#a8a299] leading-relaxed max-w-lg mb-6">
                Open for AI/ML engineering consulting, deep learning neural architecture research, and high-performance system collaborations.
              </p>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:raunakxshrivastva@gmail.com"
                className="px-4 py-2 border border-amber-500/80 bg-amber-500/10 text-amber-300 hover:bg-amber-500 hover:text-black transition-all text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-2 shadow-lg"
              >
                <span>✉️ SEND EMAIL</span>
              </a>

              <a
                href="/resume.pdf"
                download="Raunak_Shrivastva_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#383633] bg-[#121110] text-[#ded8ce] hover:border-amber-400 hover:text-white transition-all text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-2"
              >
                <span>📄 DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>

          {/* Right Column: Telemetry Channels & Social Links */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            
            {/* Channel 1: Primary Email */}
            <div className="p-4 border border-[#242320] bg-[#0c0c0b] rounded-xs hover:border-[#403d38] transition-colors">
              <div className="text-[10px] text-[#858077] uppercase tracking-widest mb-1.5">PRIMARY EMAIL</div>
              <a
                href="mailto:raunakxshrivastva@gmail.com"
                className="text-sm font-bold text-[#e3ded7] hover:text-amber-400 transition-colors break-all"
              >
                raunakxshrivastva@gmail.com
              </a>
              <div className="mt-2 text-[10px] text-[#6f6a64]">Direct Inquiry & Research</div>
            </div>

            {/* Channel 2: GitHub Profile */}
            <div className="p-4 border border-[#242320] bg-[#0c0c0b] rounded-xs hover:border-[#403d38] transition-colors">
              <div className="text-[10px] text-[#858077] uppercase tracking-widest mb-1.5">GITHUB DOSSIER</div>
              <a
                href="https://github.com/raunakxshrivastva"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-[#e3ded7] hover:text-amber-400 transition-colors truncate block"
              >
                github.com/raunakxshrivastva
              </a>
              <div className="mt-2 text-[10px] text-[#6f6a64]">28+ Active AI Repositories</div>
            </div>

            {/* Channel 3: LinkedIn */}
            <div className="p-4 border border-[#242320] bg-[#0c0c0b] rounded-xs hover:border-[#403d38] transition-colors">
              <div className="text-[10px] text-[#858077] uppercase tracking-widest mb-1.5">LINKEDIN NETWORK</div>
              <a
                href="https://linkedin.com/in/raunakxshrivastva"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-[#e3ded7] hover:text-amber-400 transition-colors truncate block"
              >
                linkedin.com/in/raunakxshrivastva
              </a>
              <div className="mt-2 text-[10px] text-[#6f6a64]">Professional Network</div>
            </div>

            {/* Channel 4: Operating Region */}
            <div className="p-4 border border-[#242320] bg-[#0c0c0b] rounded-xs hover:border-[#403d38] transition-colors">
              <div className="text-[10px] text-[#858077] uppercase tracking-widest mb-1.5">OPERATING REGION</div>
              <div className="text-sm font-bold text-[#e3ded7] flex items-center gap-1.5">
                <span>🇮🇳</span>
                <span>Jaipur, India</span>
              </div>
              <div className="mt-2 text-[10px] text-[#6f6a64]">Remote / Global Collaboration</div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Rights Reserved */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#858077] tracking-wider uppercase">
          
          <div className="flex items-center gap-2">
            <span className="text-base text-[#ded8ce]">力</span>
            <span>© 2026 RAUNAK SHRIVASTVA — ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>STOIC DOSSIER PORTFOLIO v2.0</span>
            <span>▪</span>
            <a href="#hero" className="hover:text-amber-400 transition-colors">BACK TO TOP ↑</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
