"use client";

import React, { useState } from "react";

interface ProjectSlot {
  id: string;
  number: string;
  title: string;
  categoryLabel: string;
  description: string;
  architecture: string;
  tags: string[];
  githubUrl?: string;
}

const PROJECTS: ProjectSlot[] = [
  {
    id: "01",
    number: "PROJECT // 01",
    title: "LLM Parameter-Efficient Fine-Tuning Pipeline",
    categoryLabel: "AI & DEEP LEARNING",
    description: "Generative AI model fine-tuning engine using LoRA and QLoRA quantization.",
    architecture: "LoRA parameter-efficient fine-tuning, prompt conditioning, and RLHF reward alignment.",
    tags: ["PYTHON", "TRANSFORMERS", "LoRA", "PYTORCH"],
    githubUrl: "https://github.com/raunakxshrivastva",
  },
  {
    id: "02",
    number: "PROJECT // 02",
    title: "CUDA Parallel Linear Algebra Kernel",
    categoryLabel: "C++ SYSTEMS & CUDA",
    description: "Custom GPU matrix multiplication kernel written in native C++/CUDA.",
    architecture: "Lock-free shared memory queues, inter-process communication, and 3.4x CUDA acceleration.",
    tags: ["C++", "CUDA", "LINUX", "GPU"],
    githubUrl: "https://github.com/raunakxshrivastva",
  },
  {
    id: "03",
    number: "PROJECT // 03",
    title: "Roots of Gratitude — Interactive Skill Tree Visualizer",
    categoryLabel: "FULL STACK WEB",
    description: "8K Stoic tree interactive portfolio visualizer with real-time drag-and-drop node positioning.",
    architecture: "Next.js 15, Framer Motion drag physics, Tailwind CSS, and local state telemetry persistence.",
    tags: ["REACT", "NEXT.JS", "TAILWIND", "FRAMER MOTION"],
    githubUrl: "https://github.com/raunakxshrivastva",
  },
];

export function Work() {
  return (
    <section id="work" className="relative w-full pt-16 sm:pt-24 pb-16 bg-[#0b0b0b] text-[#ded8ce] overflow-hidden border-t border-[#1c1b19]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <div className="mb-2 flex items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#8a8377]">
            <span className="h-px w-10 bg-[#403d38]" />
            <span>PORTFOLIO SHOWCASE</span>
            <span className="h-px w-10 bg-[#403d38]" />
          </div>
          <h2 className="font-serif text-5xl tracking-tight text-[#e3ded7] sm:text-6xl">
            Work & Creations.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="p-6 bg-[#121110] border border-[#242320] rounded-xs flex flex-col justify-between hover:border-amber-400/80 transition-colors">
              <div>
                <span className="text-[10px] text-amber-400 font-bold tracking-widest block mb-2">{proj.number}</span>
                <h3 className="text-lg font-bold text-[#e3ded7] mb-2">{proj.title}</h3>
                <p className="text-xs text-[#a8a299] mb-4">{proj.description}</p>
                <div className="text-[10px] text-[#706a61] mb-4 bg-[#090908] p-3 rounded-xs border border-[#1a1917]">
                  <strong>Arch:</strong> {proj.architecture}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 text-[9px] bg-[#1e1c19] text-[#ded8ce] border border-[#33302b] rounded-xs">{t}</span>
                  ))}
                </div>
                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-xs text-amber-400 hover:underline font-bold block">
                  → VIEW CODE REPOSITORY
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
