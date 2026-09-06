"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <section id="hero" className="relative w-full min-h-[calc(100vh-62px)] flex flex-col justify-between overflow-hidden bg-[#0b0b0b] text-[#ded8ce] py-6 lg:py-8">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 flex-1 flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative z-10 py-2 w-full">
          
          {/* Left Column: Dossier Details */}
          <div className="lg:col-span-6 flex flex-col relative pl-4 sm:pl-8">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#858077] mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>AI / MACHINE LEARNING DOSSIER</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#e3ded7] mb-3">
              Raunak Shrivastva
            </h1>

            <p className="text-xs sm:text-sm font-mono tracking-wider text-[#a8a299] mb-6">
              AI ENGINEER // DEEP LEARNING & LLM SYSTEMS
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#ded8ce] mb-8 bg-[#121110] border border-[#242320] p-4 rounded-xs">
              <div>
                <span className="text-[#858077] block text-[10px] uppercase">CORE FOCUS</span>
                <span className="font-bold">LLM Fine-Tuning & Quantization</span>
              </div>
              <div>
                <span className="text-[#858077] block text-[10px] uppercase">PRIMARY STACK</span>
                <span className="font-bold">PyTorch, Python, CUDA, C++</span>
              </div>
              <div>
                <span className="text-[#858077] block text-[10px] uppercase">EDUCATION</span>
                <span className="font-bold">B.Tech CSE in JECRC University</span>
              </div>
              <div>
                <span className="text-[#858077] block text-[10px] uppercase">LOCAL TIME</span>
                <span className="font-bold text-amber-400">{time}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                download="Raunak_Shrivastva_Resume.pdf"
                className="px-4 py-2 border border-amber-500/80 bg-amber-500/10 text-amber-300 hover:bg-amber-500 hover:text-black transition-all text-xs font-bold font-mono uppercase tracking-wider rounded-xs shadow-lg"
              >
                📄 DOWNLOAD RESUME
              </a>
              <a
                href="#contact"
                className="px-4 py-2 border border-[#383633] bg-[#121110] text-[#ded8ce] hover:border-amber-400 hover:text-white transition-all text-xs font-bold font-mono uppercase tracking-wider rounded-xs"
              >
                ✉️ GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Right Column: Photo Hover Fade Animation Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[500px] w-full">
            <div 
              className="relative z-10 w-full max-w-[500px] aspect-square cursor-pointer group flex items-center justify-center bg-[#090909] border border-[#242320] rounded-xs overflow-hidden shadow-2xl p-4"
            >
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
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
