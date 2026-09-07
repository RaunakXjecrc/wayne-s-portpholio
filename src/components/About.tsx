"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export function About() {
  return (
    <section id="about" className="relative w-full bg-[#090909] text-[#ded8ce] py-24 border-t border-[#1c1b19] overflow-hidden">
      
      {/* Background Subtle Technical Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141311_1px,transparent_1px),linear-gradient(to_bottom,#141311_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Telemetry Header */}
        <motion.div {...fadeInUp} className="flex items-center justify-between border-b border-[#24221f] pb-4 mb-12 font-mono text-xs text-[#8c867a]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white font-bold tracking-widest uppercase">// DOSSIER SECTION: ABOUT &amp; TELEMETRY</span>
          </div>
          <div className="hidden sm:block tracking-widest text-[#666157]">
            LAT: 26.9124° N // LON: 75.7873° E
          </div>
        </motion.div>

        {/* 1. Massive Typographic Banner Statement */}
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none max-w-5xl">
            ENGINEERING INTELLIGENCE AT THE BOUNDARY OF MACHINE REASONING &amp; HARDWARE ACCELERATION.
          </h2>
        </motion.div>

        {/* 2. Grid Layout: Origin Story + Offset Telemetry Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Origin Story (Col 7) */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-7 flex flex-col justify-between p-8 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-amber-400/80 transition-all duration-500"
          >
            {/* Tech Corner Labels */}
            <span className="absolute top-3 left-3 font-mono text-[9px] text-[#4d4942]">SYS_ORIGIN // 01</span>
            <span className="absolute bottom-3 right-3 font-mono text-[9px] text-amber-400/80 opacity-0 group-hover:opacity-100 transition-opacity">TELEMETRY_VERIFIED</span>

            <div className="mt-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-3">// 01 ORIGIN STORY</span>
              <h3 className="text-2xl font-serif font-light text-white mb-4">Classical Foundations to Deep Learning Execution</h3>
              <p className="text-sm font-sans text-[#a8a295] leading-relaxed mb-4">
                Pursuing B.Tech in Computer Science &amp; Engineering at JECRC University, Jaipur. My journey began with classical algorithms and quickly evolved into an obsession with neural network architectures, machine reasoning, and low-level C++/CUDA hardware execution.
              </p>
              <p className="text-sm font-sans text-[#a8a295] leading-relaxed">
                I operate at the intersection of mathematical theory and systems engineering—optimizing matrix kernels for peak throughput while conditioning generative LLMs for precision execution.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1e1d1a] flex items-center justify-between font-mono text-[11px] text-[#8c867a]">
              <span>OPERATING STATUS: ACTIVE (2026)</span>
              <span>JECRC UNIVERSITY</span>
            </div>
          </motion.div>

          {/* Offset Image Card: Location & Telemetry (Col 5) */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="lg:col-span-5 relative group cursor-pointer"
          >
            <div className="w-full h-full min-h-[380px] bg-[#12110f] border border-[#24221f] rounded-xs overflow-hidden relative flex flex-col justify-between p-4 group-hover:border-cyan-400/80 transition-all duration-500 shadow-2xl">
              
              {/* Card Image Container with Hover Scale */}
              <div className="relative w-full flex-1 overflow-hidden rounded-xs bg-black mb-4">
                <img 
                  src="/raunak_photo.png" 
                  alt="Jaipur Telemetry Coordinates" 
                  className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Blueprint Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                {/* Glowing HUD Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#090909]/90 border border-cyan-400/50 text-cyan-300 font-mono text-[10px] tracking-widest uppercase rounded-xs backdrop-blur-md">
                  <span>✦ OPERATING REGION</span>
                </div>
              </div>

              {/* Technical Caption Footer */}
              <div className="font-mono text-xs text-[#a8a295] space-y-1">
                <div className="text-white font-bold tracking-wider uppercase">
                  LOCATION // JAIPUR, RAJASTHAN, INDIA
                </div>
                <div className="text-[11px] text-cyan-400/90 font-semibold tracking-widest">
                  [26.9124° N, 75.7873° E]
                </div>
                <div className="text-[10px] text-[#706a61] pt-1">
                  Operating Status: Active (2026) · Open for AI Research &amp; Consulting
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 3. Hobbies & Passion + Core Technical Skills Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Hobbies & Passion (Col 5) */}
          <motion.div {...fadeInUp} className="lg:col-span-5 p-8 bg-[#12110f] border border-[#24221f] rounded-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-3">// 03 HOBBIES &amp; PASSION</span>
              <h3 className="text-2xl font-serif font-light text-white mb-6">Intellectual Pursuits</h3>

              <ul className="space-y-4 font-sans text-sm text-[#a8a295]">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-mono text-xs">⚡</span>
                  <div>
                    <strong className="text-white block font-mono text-xs">High-Performance Computing</strong>
                    GPU Micro-architectures &amp; CUDA Kernel Tuning
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-mono text-xs">♟</span>
                  <div>
                    <strong className="text-white block font-mono text-xs">Strategic Chess &amp; Logic</strong>
                    Algorithmic Problem Solving &amp; Game Theory
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-mono text-xs">🎨</span>
                  <div>
                    <strong className="text-white block font-mono text-xs">Generative AI Art Systems</strong>
                    Diffusion Models &amp; Design Architecture
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-mono text-xs">🏛</span>
                  <div>
                    <strong className="text-white block font-mono text-xs">Stoic Philosophy</strong>
                    Reading Marcus Aurelius, Seneca, and Epictetus
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Technical Skills Matrix (Col 7) */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="lg:col-span-7 p-8 bg-[#12110f] border border-[#24221f] rounded-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-3">// 04 CORE TECHNICAL SKILLS MATRIX</span>
              <h3 className="text-2xl font-serif font-light text-white mb-6">System Capabilities</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
                
                <div className="p-4 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-amber-400 font-bold block mb-2">AI &amp; DEEP LEARNING</span>
                  <p className="text-[#a8a295] leading-relaxed">
                    PyTorch, Transformers, LangChain, Autograd Tensors, LoRA/QLoRA, RAG.
                  </p>
                </div>

                <div className="p-4 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-amber-400 font-bold block mb-2">PROGRAMMING &amp; SYSTEMS</span>
                  <p className="text-[#a8a295] leading-relaxed">
                    Python, C, C++, CUDA, POSIX Linux, SQL, Docker.
                  </p>
                </div>

                <div className="p-4 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-amber-400 font-bold block mb-2">WEB &amp; FRONTEND</span>
                  <p className="text-[#a8a295] leading-relaxed">
                    React.js, Next.js, Tailwind CSS, Framer Motion.
                  </p>
                </div>

                <div className="p-4 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-amber-400 font-bold block mb-2">DEPLOYMENT &amp; CI/CD</span>
                  <p className="text-[#a8a295] leading-relaxed">
                    Git, GitHub Actions Automated CI/CD.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* 4. Key Achievements & Metrics */}
        <motion.div {...fadeInUp} className="p-8 bg-[#12110f] border border-[#24221f] rounded-xs">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-3">// 05 KEY ACHIEVEMENTS &amp; METRICS</span>
          <h3 className="text-2xl font-serif font-light text-white mb-8">Performance Benchmark</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            
            <div className="p-6 bg-[#0a0a09] border border-[#1e1c19] rounded-xs relative group hover:border-amber-400/80 transition-colors">
              <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">28+</span>
              <span className="text-xs text-white font-bold block mb-1">GitHub Repositories</span>
              <p className="text-[11px] text-[#8c867a]">Active open-source AI &amp; systems repos on GitHub.</p>
            </div>

            <div className="p-6 bg-[#0a0a09] border border-[#1e1c19] rounded-xs relative group hover:border-amber-400/80 transition-colors">
              <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">65%</span>
              <span className="text-xs text-white font-bold block mb-1">VRAM Reduction</span>
              <p className="text-[11px] text-[#8c867a]">Memory reduction on 7B+ LLMs using custom quantization pipelines.</p>
            </div>

            <div className="p-6 bg-[#0a0a09] border border-[#1e1c19] rounded-xs relative group hover:border-amber-400/80 transition-colors">
              <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">3.4x</span>
              <span className="text-xs text-white font-bold block mb-1">Parallel Speedup</span>
              <p className="text-[11px] text-[#8c867a]">Throughput speedup via native C++/CUDA matrix kernels.</p>
            </div>

            <div className="p-6 bg-[#0a0a09] border border-[#1e1c19] rounded-xs relative group hover:border-amber-400/80 transition-colors">
              <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">8K</span>
              <span className="text-xs text-white font-bold block mb-1">Stoic Dossier Engine</span>
              <p className="text-[11px] text-[#8c867a]">Stoic Tree 8K interactive skill dossier engine.</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
