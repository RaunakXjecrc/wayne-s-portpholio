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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141311_1px,transparent_1px),linear-gradient(to_bottom,#141311_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">// 02 TECHNICAL CAPABILITIES</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-white font-light">Core Technical Skills Matrix</h2>
        </motion.div>

        {/* Skills Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          
          <motion.div {...fadeInUp} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs hover:border-amber-400/80 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block mb-2">CATEGORY // 01</span>
              <h3 className="text-base font-bold text-white mb-3">AI &amp; DEEP LEARNING</h3>
              <p className="text-[#a8a295] leading-relaxed mb-4">
                PyTorch, Transformers, LangChain, Autograd Tensors, LoRA/QLoRA, RAG Systems.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1e1d1a] flex flex-wrap gap-1">
              {["PyTorch", "Transformers", "LoRA/QLoRA", "RAG"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[9px] bg-[#1a1917] border border-[#2e2c28] text-[#d4ceb8] rounded-xs">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs hover:border-amber-400/80 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block mb-2">CATEGORY // 02</span>
              <h3 className="text-base font-bold text-white mb-3">PROGRAMMING &amp; SYSTEMS</h3>
              <p className="text-[#a8a295] leading-relaxed mb-4">
                Python, C, C++, CUDA, POSIX Linux, SQL, Docker.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1e1d1a] flex flex-wrap gap-1">
              {["Python", "C++", "CUDA", "Linux", "Docker"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[9px] bg-[#1a1917] border border-[#2e2c28] text-[#d4ceb8] rounded-xs">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs hover:border-amber-400/80 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block mb-2">CATEGORY // 03</span>
              <h3 className="text-base font-bold text-white mb-3">WEB &amp; FRONTEND</h3>
              <p className="text-[#a8a295] leading-relaxed mb-4">
                React.js, Next.js, Tailwind CSS, Framer Motion.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1e1d1a] flex flex-wrap gap-1">
              {["React", "Next.js", "Tailwind", "Framer"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[9px] bg-[#1a1917] border border-[#2e2c28] text-[#d4ceb8] rounded-xs">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs hover:border-amber-400/80 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block mb-2">CATEGORY // 04</span>
              <h3 className="text-base font-bold text-white mb-3">DEPLOYMENT &amp; CI/CD</h3>
              <p className="text-[#a8a295] leading-relaxed mb-4">
                Git, GitHub Actions Automated CI/CD, Linux Server Ops.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1e1d1a] flex flex-wrap gap-1">
              {["Git", "CI/CD", "Actions", "Linux"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[9px] bg-[#1a1917] border border-[#2e2c28] text-[#d4ceb8] rounded-xs">{t}</span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
