"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0a0a] text-[#ded8ce] py-24 border-t border-[#1c1b19] overflow-hidden">
      
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141311_1px,transparent_1px),linear-gradient(to_bottom,#141311_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 font-mono text-xs text-amber-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>// 02 TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-white font-light tracking-tight uppercase">
            Core Technical Skills Matrix
          </h2>
          <p className="text-sm font-sans text-[#a8a295] max-w-2xl mt-3">
            Deep learning architectures, low-level CUDA hardware systems engineering, full-stack web engines, and automated cloud deployment.
          </p>
        </motion.div>

        <div className="space-y-16">
          
          {/* 1. FEATURED DOMAIN 01: AI & DEEP LEARNING (IMAGE LEFT, DETAILS RIGHT) */}
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-cyan-400/80 transition-all duration-500 shadow-2xl"
          >
            {/* Tech Corner Badge */}
            <span className="absolute top-3 left-3 font-mono text-[9px] text-[#4d4942]">
              MATRIX // CATEGORY 01
            </span>
            <span className="absolute top-3 right-3 font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest">
              PRIMARY AI STACK
            </span>

            {/* Left Side: Robot Image Card */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-xs bg-black border border-[#24221f] group-hover:border-cyan-400/50 transition-colors">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img 
                  src="/skill_ai_robot.jpg" 
                  alt="AI & Deep Learning Autonomous Systems — Robot Working on Bench" 
                  className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Blueprint Grid Overlay on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

                {/* HUD Telemetry Overlay */}
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#090909]/90 border border-cyan-400/50 text-cyan-300 font-mono text-[10px] tracking-widest uppercase rounded-xs backdrop-blur-md">
                  <span>✦ AI &amp; AUTONOMOUS REASONING</span>
                </div>
              </div>
            </div>

            {/* Right Side: Skill Details & Specifications */}
            <div className="lg:col-span-6 space-y-5 font-mono text-xs">
              <div>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block mb-1">
                  CORE DOMAIN // 01
                </span>
                <h3 className="text-3xl font-serif text-white font-bold tracking-tight">
                  AI &amp; Deep Learning
                </h3>
                <p className="text-sm font-sans text-[#a8a295] leading-relaxed mt-2">
                  Building, conditioning, and optimizing deep neural network architectures—from autograd tensors and transformer attention blocks to low-rank parameter tuning (LoRA/QLoRA) and RAG retrieval pipelines.
                </p>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-cyan-400 text-[10px] font-bold block mb-1">⚡ LLM FINE-TUNING</span>
                  <p className="text-[11px] text-[#ded8ce] font-sans">LoRA, QLoRA, Quantization &amp; Memory Reduction</p>
                </div>
                <div className="p-3 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-cyan-400 text-[10px] font-bold block mb-1">🧠 RAG ARCHITECTURES</span>
                  <p className="text-[11px] text-[#ded8ce] font-sans">Vector Stores, Embeddings &amp; Context Retrieval</p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-[#1e1d1a] flex flex-wrap gap-2">
                {["PyTorch", "Transformers", "LangChain", "Autograd Tensors", "LoRA/QLoRA", "RAG Systems", "HuggingFace"].map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 text-[10px] font-bold bg-[#181715] border border-[#33302b] text-cyan-300 rounded-xs hover:border-cyan-400 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* 2. FEATURED DOMAIN 02: PROGRAMMING & HARDWARE SYSTEMS (DETAILS LEFT, IMAGE RIGHT - ALTERNATING) */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-amber-400/80 transition-all duration-500 shadow-2xl"
          >
            {/* Tech Corner Badge */}
            <span className="absolute top-3 left-3 font-mono text-[9px] text-[#4d4942]">
              MATRIX // CATEGORY 02
            </span>
            <span className="absolute top-3 right-3 font-mono text-[9px] text-amber-400 font-bold uppercase tracking-widest">
              HARDWARE &amp; COMPUTE
            </span>

            {/* Left Side: Skill Details & Specifications */}
            <div className="lg:col-span-6 space-y-5 font-mono text-xs order-2 lg:order-1">
              <div>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block mb-1">
                  CORE DOMAIN // 02
                </span>
                <h3 className="text-3xl font-serif text-white font-bold tracking-tight">
                  Programming &amp; Systems
                </h3>
                <p className="text-sm font-sans text-[#a8a295] leading-relaxed mt-2">
                  High-performance systems engineering in C, C++, and CUDA. Writing custom matrix multiplication kernels, memory-optimized parallel algorithms, POSIX Linux system calls, and GPU hardware accelerator drivers.
                </p>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-amber-400 text-[10px] font-bold block mb-1">⚡ CUDA COMPUTING</span>
                  <p className="text-[11px] text-[#ded8ce] font-sans">Parallel Kernels &amp; High-Throughput Speedup</p>
                </div>
                <div className="p-3 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-amber-400 text-[10px] font-bold block mb-1">💻 POSIX LINUX</span>
                  <p className="text-[11px] text-[#ded8ce] font-sans">System Calls, Multi-threading &amp; C/C++ Ops</p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-[#1e1d1a] flex flex-wrap gap-2">
                {["Python", "C", "C++", "CUDA", "POSIX Linux", "Parallel Matrix Kernels", "SQL", "Docker"].map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 text-[10px] font-bold bg-[#181715] border border-[#33302b] text-amber-300 rounded-xs hover:border-amber-400 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Hardware Server Lab Image Card */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-xs bg-black border border-[#24221f] group-hover:border-amber-400/50 transition-colors order-1 lg:order-2">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img 
                  src="/skill_hardware_systems.jpg" 
                  alt="Hardware Systems & Neural Processor Lab — Hardware Acceleration" 
                  className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Blueprint Grid Overlay on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

                {/* HUD Telemetry Overlay */}
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#090909]/90 border border-amber-400/50 text-amber-300 font-mono text-[10px] tracking-widest uppercase rounded-xs backdrop-blur-md">
                  <span>✦ NEURAL HARDWARE COMPUTE LAB</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* 3. FEATURED DOMAIN 03: WEB & FRONTEND SYSTEMS (IMAGE LEFT, DETAILS RIGHT) */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-cyan-400/80 transition-all duration-500 shadow-2xl"
          >
            {/* Tech Corner Badge */}
            <span className="absolute top-3 left-3 font-mono text-[9px] text-[#4d4942]">
              MATRIX // CATEGORY 03
            </span>
            <span className="absolute top-3 right-3 font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest">
              WEB ENGINES &amp; UX
            </span>

            {/* Left Side: Robot Workstation Image Card */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-xs bg-black border border-[#24221f] group-hover:border-cyan-400/50 transition-colors">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img 
                  src="/skill_web_frontend.jpg" 
                  alt="Web & Frontend Systems Workstation — Robot Analyzing JavaScript Engine & UX Flow Map" 
                  className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Blueprint Grid Overlay on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

                {/* HUD Telemetry Overlay */}
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#090909]/90 border border-cyan-400/50 text-cyan-300 font-mono text-[10px] tracking-widest uppercase rounded-xs backdrop-blur-md">
                  <span>✦ JS ENGINE &amp; UX WORKSTATION</span>
                </div>
              </div>
            </div>

            {/* Right Side: Skill Details & Specifications */}
            <div className="lg:col-span-6 space-y-5 font-mono text-xs">
              <div>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block mb-1">
                  CORE DOMAIN // 03
                </span>
                <h3 className="text-3xl font-serif text-white font-bold tracking-tight">
                  Web &amp; Frontend Systems
                </h3>
                <p className="text-sm font-sans text-[#a8a295] leading-relaxed mt-2">
                  Engineered web applications, interactive state management architecture (Redux/Context), high-performance JavaScript engines, and dark editorial UI design systems.
                </p>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-cyan-400 text-[10px] font-bold block mb-1">⚛ REACT &amp; NEXT.JS</span>
                  <p className="text-[11px] text-[#ded8ce] font-sans">Server Components, SSR &amp; State Architecture</p>
                </div>
                <div className="p-3 bg-[#0a0a09] border border-[#1e1c19] rounded-xs">
                  <span className="text-cyan-400 text-[10px] font-bold block mb-1">🎨 DESIGN SYSTEMS</span>
                  <p className="text-[11px] text-[#ded8ce] font-sans">Tailwind CSS, Framer Motion &amp; Micro-animations</p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-[#1e1d1a] flex flex-wrap gap-2">
                {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "State Management", "HTML5/CSS3"].map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 text-[10px] font-bold bg-[#181715] border border-[#33302b] text-cyan-300 rounded-xs hover:border-cyan-400 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* 4. FEATURED DOMAIN 04: DEPLOYMENT & CLOUD CI/CD (FULL-WIDTH CARD BELOW) */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="p-8 bg-[#12110f] border border-[#24221f] rounded-xs hover:border-amber-400/80 transition-all shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] text-amber-400 font-mono font-bold uppercase tracking-widest block mb-1">
                  CATEGORY // 04 · DEVOPS &amp; CLOUD INFRASTRUCTURE
                </span>
                <h3 className="text-3xl font-serif text-white font-bold tracking-tight">
                  Deployment &amp; Cloud CI/CD
                </h3>
                <p className="text-sm font-sans text-[#a8a295] max-w-3xl mt-2 leading-relaxed">
                  Automating deployment pipelines, version control workflows, containerization with Docker, and maintaining production-grade cloud Linux server infrastructure.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 font-mono">
                {["Git", "GitHub Actions", "Docker", "Linux Server Ops", "Automated CI/CD"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-bold bg-[#181715] border border-[#33302b] text-amber-300 rounded-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
