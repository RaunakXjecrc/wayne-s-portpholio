"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Barcode } from "./Barcode";
import { profile } from "@/data/portfolio";

export function Hero() {
  const [time, setTime] = useState("20:29:15");
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-62px)] flex flex-col justify-between overflow-hidden bg-[#0b0b0b] text-[#ded8ce] py-6 lg:py-8 noise-overlay grid-bg">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-24 flex-1 flex flex-col justify-between">
        
        {/* Main 2-column Grid - Full Width Edge to Edge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center my-auto relative z-10 py-2 w-full">
          
          {/* ================= LEFT COLUMN: TERMINAL DOSSIER ================= */}
          <div className="lg:col-span-6 xl:col-span-6 2xl:col-span-6 flex flex-col relative pl-8 sm:pl-12">
            
            {/* Left margin rotated text & measurement ticks */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-between pointer-events-none opacity-45 py-4">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.32em] text-[#6f6a64] uppercase writing-mode-vertical whitespace-nowrap font-medium">
                AI-ML-SYSTEMS // 2026
              </span>
              <div className="flex flex-col gap-1.5 w-2 my-auto">
                <div className="w-2.5 h-px bg-[#6f6a64]"></div>
                <div className="w-1.5 h-px bg-[#6f6a64]"></div>
                <div className="w-1.5 h-px bg-[#6f6a64]"></div>
                <div className="w-2.5 h-px bg-[#6f6a64]"></div>
              </div>
            </div>

            {/* Dossier Header Tag */}
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm tracking-[0.22em] text-[#858077] mb-6">
              <span className="text-[#ded8ce] text-base">◆</span>
              <span className="uppercase text-[#a8a299] font-medium">AI / MACHINE LEARNING DOSSIER</span>
              <span className="text-[#ded8ce] text-base">◆</span>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-8">
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[108px] font-normal tracking-tight text-[#e3ded7] leading-none uppercase">
                {profile.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm lg:text-base xl:text-lg text-[#a8a299] tracking-[0.2em] mt-4 uppercase font-medium">
                AI ENGINEER // DEEP LEARNING & LLMS
              </p>

              {/* Local Clock */}
              <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.18em] text-[#9c968d] mt-4">
                <span className="w-2 h-2 rounded-none bg-[#ded8ce] animate-pulse"></span>
                <span className="text-[#6f6a64]">LOCAL</span>
                <span className="text-[#ded8ce] font-semibold">{time}</span>
              </div>
            </div>

            {/* System Info Table */}
            <div className="w-full border-t border-b border-[#242320] py-3 mb-8 font-mono text-xs sm:text-sm xl:text-base">
              <div className="flex items-center justify-between py-3 border-b border-[#1a1918] text-[#827d75] tracking-wider">
                <span className="uppercase text-[#6b6660]">CORE FOCUS</span>
                <span className="text-[#ded8ce] font-medium">LLM Systems, Fine-Tuning & Neural Architectures</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#1a1918] text-[#827d75] tracking-wider">
                <span className="uppercase text-[#6b6660]">PRIMARY STACK</span>
                <span className="text-[#ded8ce] font-medium">PyTorch, Python, CUDA, LangChain, Transformers</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#1a1918] text-[#827d75] tracking-wider">
                <span className="uppercase text-[#6b6660]">OPERATING REGION</span>
                <span className="text-[#ded8ce] font-medium">Remote / India</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#1a1918] text-[#827d75] tracking-wider">
                <span className="uppercase text-[#6b6660]">EDUCATION</span>
                <span className="text-[#ded8ce] font-medium">B.Tech CSE in JECRC University</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#1a1918] text-[#827d75] tracking-wider">
                <span className="uppercase text-[#6b6660]">SPECIALTY</span>
                <span className="text-[#ded8ce] font-medium">Generative AI, Model Quantization & RAG Systems</span>
              </div>
              <div className="flex items-center justify-between py-3 text-[#827d75] tracking-wider">
                <span className="uppercase text-[#6b6660]">AVAILABILITY</span>
                <span className="text-[#ded8ce] font-medium">Open for AI Consulting & Research Roles</span>
              </div>
            </div>

            {/* Stat Boxes Grid (4 columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#242320] border border-[#242320] p-0.5 mb-7 font-mono">
              <div className="bg-[#121110] p-4 sm:p-5 xl:p-6 flex flex-col justify-between min-h-[90px] xl:min-h-[105px]">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#e3ded7] tracking-tight">24</span>
                <span className="text-[10px] sm:text-xs tracking-[0.18em] text-[#6f6a64] uppercase mt-1">MODELS</span>
              </div>
              <div className="bg-[#121110] p-4 sm:p-5 xl:p-6 flex flex-col justify-between min-h-[90px] xl:min-h-[105px]">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#e3ded7] tracking-tight">3.4B</span>
                <span className="text-[10px] sm:text-xs tracking-[0.18em] text-[#6f6a64] uppercase mt-1">PARAMS</span>
              </div>
              <div className="bg-[#121110] p-4 sm:p-5 xl:p-6 flex flex-col justify-between min-h-[90px] xl:min-h-[105px]">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#e3ded7] tracking-tight">16</span>
                <span className="text-[10px] sm:text-xs tracking-[0.18em] text-[#6f6a64] uppercase mt-1">ML STACK</span>
              </div>
              <div className="bg-[#121110] p-4 sm:p-5 xl:p-6 flex flex-col justify-between min-h-[90px] xl:min-h-[105px]">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#e3ded7] tracking-tight">4+</span>
                <span className="text-[10px] sm:text-xs tracking-[0.18em] text-[#6f6a64] uppercase mt-1">YEARS EXP</span>
              </div>
            </div>





            {/* Repository Info Sub-bar */}
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-wider text-[#6f6a64] mb-8">
              <span className="text-[#ded8ce]">▪</span>
              <span>28 AI REPOSITORIES</span>
              <span>▪</span>
              <span>OPEN TO RESEARCH COLLAB</span>
              <span>▪</span>
              <span>2026 ACTIVE</span>
            </div>



          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE 3D FLIP CARD ================= */}
          <div className="lg:col-span-6 xl:col-span-6 2xl:col-span-6 relative flex flex-col items-center justify-center min-h-[620px] lg:min-h-[740px] xl:min-h-[820px] w-full pt-4 lg:pt-0 pb-14">
            
            {/* Background Geometric Framing Box */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full max-w-[644px] lg:max-w-[724px] xl:max-w-[784px] 2xl:max-w-[844px] aspect-square border border-[#1f1e1c] rounded-xs opacity-40"></div>
            </div>

            {/* 3D Flip Card Container */}
            <div 
              className="relative z-10 w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[760px] 2xl:max-w-[820px] aspect-square cursor-pointer group flex items-center justify-center"
              style={{ perspective: "1200px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                
                {/* ================= FRONT SIDE (SQUARE STATUE DOSSIER CARD) ================= */}
                <motion.div 
                  animate={{ opacity: isFlipped ? 0 : 1 }}
                  transition={{ duration: 0.35 }}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center bg-[#090909] border border-[#242320] rounded-xs overflow-hidden shadow-2xl p-4 ${isFlipped ? "pointer-events-none" : "pointer-events-auto"}`}
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  {/* Corner Crosshairs */}
                  <span className="absolute top-2.5 left-2.5 text-[#4d4944] text-xs font-mono select-none">+</span>
                  <span className="absolute top-2.5 right-2.5 text-[#4d4944] text-xs font-mono select-none">+</span>
                  <span className="absolute bottom-2.5 left-2.5 text-[#4d4944] text-xs font-mono select-none">+</span>
                  <span className="absolute bottom-2.5 right-2.5 text-[#4d4944] text-xs font-mono select-none">+</span>

                  {/* Stoic Statue Base Image (Revealed on Hover) */}
                  <img
                    src="/statue.png"
                    alt="Stoic Statue Bust"
                    className="absolute inset-0 w-full h-full object-contain filter contrast-110 brightness-95 mix-blend-screen scale-95 z-10 pointer-events-none"
                  />

                  {/* Raunak Shrivastva User Photo (Visible by default, fades out smoothly on hover) */}
                  <img
                    src="/raunak_photo.png"
                    alt="Raunak Shrivastva"
                    className="absolute inset-0 w-full h-full object-cover filter contrast-105 brightness-95 scale-95 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out z-20"
                  />

                  {/* Hover Hint Overlay Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#121110]/95 border border-[#383633] text-amber-400 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase rounded-xs z-30 shadow-lg pointer-events-none">
                    <span>✦ HOVER TO SEE STOIC STATUE</span>
                  </div>

                  {/* Click to Flip Hint Badge */}
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-[#121110]/95 border border-[#383633] text-[#ded8ce] text-[10px] sm:text-xs font-mono tracking-widest uppercase rounded-xs opacity-85 group-hover:opacity-100 transition-opacity shadow-lg flex items-center gap-2 z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ded8ce] animate-ping"></span>
                    <span>✦ CLICK TO FLIP</span>
                  </div>
                </motion.div>

                {/* ================= BACK SIDE (EXACT USER-UPLOADED SAMURAI CARD IMAGE) ================= */}
                <motion.div 
                  animate={{ opacity: isFlipped ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className={`absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-[#1f1d1a] relative ${!isFlipped ? "pointer-events-none" : "pointer-events-auto"}`}
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)" 
                  }}
                >
                  {/* Exact Uploaded Japanese Samurai Contact Card Image */}
                  <img
                    src="/samurai_card.jpg"
                    alt="Raunak Shrivastva Japanese Samurai Contact Card"
                    className="w-full h-full object-contain bg-[#ede8df]"
                  />

                  {/* Clickable Social Overlay Hotspots */}
                  <div className="absolute bottom-[4.5%] left-0 right-0 flex items-center justify-between px-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="mailto:raunakxshrivastva@gmail.com" target="_blank" rel="noreferrer" className="h-6 w-16" title="Gmail" onClick={(e) => e.stopPropagation()}></a>
                    <a href="https://github.com/raunakxshrivastva" target="_blank" rel="noreferrer" className="h-6 w-16" title="GitHub" onClick={(e) => e.stopPropagation()}></a>
                    <a href="https://linkedin.com/in/raunakxshrivastva" target="_blank" rel="noreferrer" className="h-6 w-16" title="LinkedIn" onClick={(e) => e.stopPropagation()}></a>
                    <a href="https://instagram.com/raunakxshrivastva" target="_blank" rel="noreferrer" className="h-6 w-20" title="Instagram" onClick={(e) => e.stopPropagation()}></a>
                    <a href="https://x.com/raunakxshrivastva" target="_blank" rel="noreferrer" className="h-6 w-16" title="X / Discord" onClick={(e) => e.stopPropagation()}></a>
                  </div>

                </motion.div>

              </motion.div>
            </div>

            {/* Status & Education Badge - Positioned Directly Under Image Card */}
            <div className="mt-5 flex flex-col items-center justify-center gap-3 font-mono text-xs z-20 pointer-events-auto">
              <div className="flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 bg-[#121110] border border-[#2b2723] rounded-xs shadow-md tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ded8ce] animate-pulse"></span>
                <span className="text-[#6f6a64] uppercase font-medium">STATUS //</span>
                <span className="text-[#ded8ce] font-semibold uppercase">Studying B.Tech CSE in JECRC University</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 tracking-[0.18em] pt-1">
                <a
                  href="#gallery"
                  className="px-6 py-3 bg-[#ded8ce] text-[#0b0b0b] font-semibold border border-[#ded8ce] hover:bg-[#ffffff] transition-all rounded-xs uppercase shadow-sm text-xs sm:text-sm"
                >
                  EXPLORE WORKS
                </a>
                <a
                  href="#connect"
                  className="px-6 py-3 bg-[#121110] text-[#ded8ce] border border-[#383633] hover:border-[#ded8ce] transition-all rounded-xs uppercase font-medium text-xs sm:text-sm"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>

            {/* Bottom Scroll Indicator - Positioned Completely Below Image */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 font-mono text-xs tracking-[0.28em] text-[#6f6a64] z-20 pointer-events-none">
              <span className="uppercase">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-[#6f6a64] to-transparent"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
