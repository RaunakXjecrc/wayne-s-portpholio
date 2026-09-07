"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export function Work() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="achievements" className="relative w-full bg-[#0c0c0a] text-[#ded8ce] py-24 border-t border-[#1c1b19] overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141311_1px,transparent_1px),linear-gradient(to_bottom,#141311_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">// 03 VERIFIED CREDENTIALS &amp; METRICS</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-white font-light">Key Achievements</h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono mb-16">
          
          <motion.div {...fadeInUp} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-amber-400/80 transition-colors">
            <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">28+</span>
            <span className="text-xs text-white font-bold block mb-1">GitHub Repositories</span>
            <p className="text-[11px] text-[#8c867a]">Active open-source AI &amp; systems repos on GitHub.</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-amber-400/80 transition-colors">
            <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">65%</span>
            <span className="text-xs text-white font-bold block mb-1">VRAM Reduction</span>
            <p className="text-[11px] text-[#8c867a]">Memory reduction on 7B+ LLMs via custom QLoRA pipelines.</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-amber-400/80 transition-colors">
            <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">3.4x</span>
            <span className="text-xs text-white font-bold block mb-1">Parallel Speedup</span>
            <p className="text-[11px] text-[#8c867a]">Throughput speedup via native C++/CUDA matrix kernels.</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }} className="p-6 bg-[#12110f] border border-[#24221f] rounded-xs relative group hover:border-amber-400/80 transition-colors">
            <span className="text-4xl font-serif font-bold text-amber-400 block mb-2">8K</span>
            <span className="text-xs text-white font-bold block mb-1">Stoic Dossier Engine</span>
            <p className="text-[11px] text-[#8c867a]">Stoic Tree 8K interactive skill dossier engine.</p>
          </motion.div>

        </div>

        {/* Scaler Certificate Showcase */}
        <motion.div {...fadeInUp} className="mb-8">
          <h3 className="text-2xl font-serif text-white font-light mb-8">Verified Certification</h3>
          
          <div className="max-w-4xl mx-auto">
            
            {/* Scaler Python Certificate */}
            <div 
              className="group bg-[#12110f] border border-[#24221f] rounded-xs overflow-hidden cursor-pointer hover:border-amber-400 transition-colors p-6 flex flex-col md:flex-row items-center gap-8 shadow-2xl"
              onClick={() => setSelectedCert("/cert_scaler_python.png")}
            >
              {/* Image Preview */}
              <div className="w-full md:w-1/2 aspect-[4/3] bg-black overflow-hidden rounded-xs border border-[#1e1c19] relative">
                <img 
                  src="/cert_scaler_python.png" 
                  alt="Scaler Topics Certificate of Excellence — Python" 
                  className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/80 border border-amber-400/50 text-amber-300 font-mono text-[9px] uppercase tracking-widest rounded-xs backdrop-blur-md">
                  <span>✦ VERIFIED CREDENTIAL</span>
                </div>
              </div>

              {/* Certificate Metadata */}
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                  SCALER TOPICS // CERTIFICATE OF EXCELLENCE
                </span>
                
                <h4 className="text-2xl font-serif text-white font-bold leading-tight">
                  Python Course for Beginners: Mastering the Essentials
                </h4>

                <p className="text-xs font-sans text-[#a8a295] leading-relaxed">
                  In recognition of the completion of <strong>121 Video Tutorials</strong>, <strong>16 Modules</strong>, and <strong>10 Coding Challenges</strong>. Awarded to <strong>Raunak Shrivastva</strong> on 24 October 2025 by Anshuman Singh (Co-founder SCALER).
                </p>

                <div className="pt-2 border-t border-[#1e1d1a] flex items-center justify-between font-mono text-xs">
                  <a 
                    href="https://moonshot.scaler.com/s/sl/uQcC7yVtkU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-amber-400 hover:text-white transition-colors flex items-center gap-1.5 font-bold"
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                  <span className="text-[#6b655b] text-[10px]">CLICK CARD TO ENLARGE</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Modal Lightbox for Certificate */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-5xl w-full bg-[#12110f] border border-[#383633] p-3 rounded-xs shadow-2xl">
            <img src={selectedCert} alt="Certificate Full View" className="w-full h-auto max-h-[85vh] object-contain rounded-xs" />
            <div className="text-center py-2 font-mono text-xs text-[#a8a295]">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
