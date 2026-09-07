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

        {/* Certificates Grid */}
        <motion.div {...fadeInUp} className="mb-8">
          <h3 className="text-2xl font-serif text-white font-light mb-8">Official MIT Certificates &amp; Credentials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Certificate 1: MIT Data Science */}
            <div 
              className="group bg-[#12110f] border border-[#24221f] rounded-xs overflow-hidden cursor-pointer hover:border-amber-400 transition-colors p-4"
              onClick={() => setSelectedCert("/cert_mit_data_science.jpg")}
            >
              <div className="aspect-[4/3] bg-black overflow-hidden mb-4 rounded-xs">
                <img src="/cert_mit_data_science.jpg" alt="MIT Data Science Certificate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">MIT PROFESSIONAL EDUCATION</span>
              <h4 className="text-lg font-serif text-white font-bold">Applied Data Science Program</h4>
              <p className="text-xs font-sans text-[#a8a295] mt-2">Leveraging AI for Effective Decision-Making. Awarded to Raunak Shrivastva.</p>
            </div>

            {/* Certificate 2: MIT Cloud & DevOps */}
            <div 
              className="group bg-[#12110f] border border-[#24221f] rounded-xs overflow-hidden cursor-pointer hover:border-amber-400 transition-colors p-4"
              onClick={() => setSelectedCert("/cert_mit_cloud_devops.jpg")}
            >
              <div className="aspect-[4/3] bg-black overflow-hidden mb-4 rounded-xs">
                <img src="/cert_mit_cloud_devops.jpg" alt="MIT Cloud & DevOps Certificate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">MIT PROFESSIONAL EDUCATION</span>
              <h4 className="text-lg font-serif text-white font-bold">Cloud &amp; DevOps Certification</h4>
              <p className="text-xs font-sans text-[#a8a295] mt-2">Continuous Transformation &amp; Architecture. Awarded to Raunak Shrivastva.</p>
            </div>

            {/* Certificate 3: CUDA Acceleration */}
            <div 
              className="group bg-[#12110f] border border-[#24221f] rounded-xs overflow-hidden cursor-pointer hover:border-amber-400 transition-colors p-4"
              onClick={() => setSelectedCert("/cert_cuda.jpg")}
            >
              <div className="aspect-[4/3] bg-black overflow-hidden mb-4 rounded-xs">
                <img src="/cert_cuda.jpg" alt="CUDA Acceleration Certificate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">PARALLEL COMPUTING</span>
              <h4 className="text-lg font-serif text-white font-bold">CUDA Acceleration &amp; GPU Computing</h4>
              <p className="text-xs font-sans text-[#a8a295] mt-2">High performance parallel linear algebra. Awarded to Raunak Shrivastva.</p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Modal Lightbox for Certificates */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl w-full bg-[#12110f] border border-[#383633] p-2 rounded-xs shadow-2xl">
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
