"use client";

import React from "react";

export function About() {
  return (
    <section id="about" className="relative w-full pt-16 sm:pt-24 pb-14 border-t border-[#1c1b19] bg-[#0b0b0b] text-[#ded8ce] overflow-hidden">
      
      {/* Background Kanji Watermark */}
      <div className="absolute right-6 top-8 font-serif text-[180px] sm:text-[240px] text-[#141312] select-none pointer-events-none opacity-40 leading-none z-0">
        知
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm tracking-[0.24em] text-[#858077] mb-16">
          <span className="text-[#ded8ce] text-base font-normal">力</span>
          <span>POWER</span>
          <div className="w-8 sm:w-16 h-px bg-[#262523]"></div>
          <span className="text-[#ded8ce] text-base font-serif">知</span>
          <span>INTELLIGENCE</span>
          <div className="w-8 sm:w-16 h-px bg-[#262523]"></div>
          <span className="text-[#ded8ce] text-base font-serif">美</span>
          <span>BEAUTY</span>
        </div>

        {/* Content Block */}
        <div className="max-w-4xl mx-auto space-y-8 font-mono text-xs sm:text-sm leading-relaxed text-[#a8a299]">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#e3ded7] tracking-tight">
            Stoic Engineering Philosophy.
          </h3>
          <p>
            I am Raunak Shrivastva, an AI Engineer specializing in Deep Learning & LLM Systems. My work focuses on building robust neural network architectures, high-performance CUDA linear algebra kernels, parameter-efficient fine-tuning (LoRA / QLoRA), and retrieval-augmented generation (RAG) systems.
          </p>
          <p>
            Grounded in stoic principles, I view software engineering as the continuous pursuit of elegance, precision, and unyielding scalability.
          </p>
        </div>

      </div>
    </section>
  );
}
