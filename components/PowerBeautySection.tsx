"use client";

import React from "react";

export function PowerBeautySection() {
  return (
    <section id="about" className="relative w-full pt-16 sm:pt-24 pb-10 sm:pb-14 border-t border-[#1c1b19] bg-[#0b0b0b] text-[#ded8ce] overflow-hidden scroll-mt-16">
      
      {/* Background Kanji Watermark */}
      <div className="absolute right-6 top-8 font-serif text-[180px] sm:text-[240px] text-[#141312] select-none pointer-events-none opacity-40 leading-none z-0">
        知
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Tag: 力 POWER ————— 知 INTELLIGENCE ————— 美 BEAUTY */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm tracking-[0.24em] text-[#858077] mb-16 sm:mb-24">
          <span className="text-[#ded8ce] text-base font-normal">力</span>
          <span>POWER</span>
          <div className="w-8 sm:w-16 h-px bg-[#262523]"></div>
          <span className="text-[#ded8ce] text-base font-serif">知</span>
          <span>INTELLIGENCE</span>
          <div className="w-8 sm:w-16 h-px bg-[#262523]"></div>
          <span className="text-[#ded8ce] text-base font-serif">美</span>
          <span>BEAUTY</span>
        </div>

        <div className="space-y-24 sm:space-y-32 pb-0">
          
          {/* ================= BLOCK 01: POWER ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Image Box: Katana Hand with Sun Backdrop */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/5] bg-[#121110] border border-[#242320] p-3 rounded-xs shadow-2xl overflow-hidden group">
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute top-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>

                <img
                  src="/power_katana.jpg"
                  alt="Katana Hand Power Artwork"
                  className="w-full h-full object-cover filter contrast-125 brightness-95 grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Text Column: 01 // POWER */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4 max-w-xl">
              <div className="font-mono text-xs tracking-[0.2em] text-[#6f6a64]">
                01 // POWER
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#e3ded7] tracking-tight">
                Power.
              </h2>
              <p className="font-mono text-xs sm:text-sm lg:text-base text-[#a8a299] leading-relaxed tracking-wide pt-2">
                High-performance neural compute, custom CUDA kernels, and model quantization. Building production AI systems engineered for maximum throughput and zero latency.
              </p>
            </div>

          </div>

          {/* ================= BLOCK 02: INTELLIGENCE (IN BETWEEN POWER & BEAUTY) ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Text Column: 02 // INTELLIGENCE */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4 max-w-xl order-2 lg:order-1">
              <div className="font-mono text-xs tracking-[0.2em] text-[#6f6a64]">
                02 // INTELLIGENCE
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#e3ded7] tracking-tight">
                Intelligence.
              </h2>
              <p className="font-mono text-xs sm:text-sm lg:text-base text-[#a8a299] leading-relaxed tracking-wide pt-2">
                Studying B.Tech CSE at JECRC University. Combining computer science fundamentals with advanced research in Generative AI, Retrieval-Augmented Generation (RAG), and autonomous agentic workflows.
              </p>
            </div>

            {/* Right Image Box: Neural Circuit Bust Artwork */}
            <div className="lg:col-span-6 relative flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[480px] aspect-[4/5] bg-[#121110] border border-[#242320] p-3 rounded-xs shadow-2xl overflow-hidden group">
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute top-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>

                <img
                  src="/intelligence_brain.jpg"
                  alt="Neural Intelligence Artwork"
                  className="w-full h-full object-cover filter contrast-125 brightness-95 grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>

          {/* ================= BLOCK 03: BEAUTY ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Image Box: Lady Justice Statue */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/5] bg-[#121110] border border-[#242320] p-3 rounded-xs shadow-2xl overflow-hidden group">
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute top-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>

                <img
                  src="/justice_statue.jpg"
                  alt="Lady Justice Statue Beauty Artwork"
                  className="w-full h-full object-cover filter contrast-125 brightness-95 grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Text Column: 03 // BEAUTY */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4 max-w-xl">
              <div className="font-mono text-xs tracking-[0.2em] text-[#6f6a64]">
                03 // BEAUTY
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#e3ded7] tracking-tight">
                Beauty.
              </h2>
              <p className="font-mono text-xs sm:text-sm lg:text-base text-[#a8a299] leading-relaxed tracking-wide pt-2">
                Coherent on purpose. Minimalist dark terminal dossiers, mathematical precision, and high-impact visual aesthetics that transform complex deep learning models into intuitive user experiences.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
