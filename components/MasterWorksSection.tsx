"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectSlot {
  id: string;
  number: string;
  title: string;
  image: string;
  category: "all" | "ai" | "systems" | "web";
  categoryLabel: string;
  description: string;
  architecture: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const PROJECT_SLOTS: ProjectSlot[] = [
  // --- ROW 1 (4 CARDS — ALL CUSTOM STIPPLED ARTWORKS) ---
  {
    id: "01",
    number: "PROJECT // 01",
    title: "Project Alpha",
    image: "/project_alpha_space.jpg", // Custom Stippled Cosmic Mushroom Dome
    category: "ai",
    categoryLabel: "AI & DEEP LEARNING",
    description: "Custom project description placeholder. Click inspect to add your deep learning model or research architecture details.",
    architecture: "Detailed breakdown of the neural network pipeline, CUDA optimizations, and benchmark results.",
    tags: ["PYTHON", "PYTORCH", "CUDA"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },
  {
    id: "02",
    number: "PROJECT // 02",
    title: "Project Beta",
    image: "/project_beta_cyber.jpg", // Custom Stippled Cyber VR Operator
    category: "ai",
    categoryLabel: "AI & DEEP LEARNING",
    description: "Custom vision processing or RAG pipeline project placeholder.",
    architecture: "System architecture, feature extraction graphs, and real-time processing benchmarks.",
    tags: ["PYTHON", "OPENCV", "YOLO"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },
  {
    id: "03",
    number: "PROJECT // 03",
    title: "Project Gamma",
    image: "/project_gamma_observatory.jpg", // Custom Stippled Space Observatory & Saturn Orbit
    category: "systems",
    categoryLabel: "C++ SYSTEMS",
    description: "Low-level C++ systems runtime or multi-threaded memory allocator placeholder.",
    architecture: "Zero-allocation ring buffers, POSIX thread pool mechanics, and memory benchmarks.",
    tags: ["C++17", "SYSTEMS", "LINUX"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },
  {
    id: "04",
    number: "PROJECT // 04",
    title: "Project Delta",
    image: "/project_delta_neural.jpg", // Custom Stippled Neural Nexus Topology & Cognitive Architecture
    category: "systems",
    categoryLabel: "C++ SYSTEMS",
    description: "High-performance vector database or SIMD accelerated search engine placeholder.",
    architecture: "HNSW graph construction, cosine similarity distance math, and memory scaling.",
    tags: ["C++", "VECTOR DB", "SIMD"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },

  // --- ROW 2 (4 CARDS) ---
  {
    id: "05",
    number: "PROJECT // 05",
    title: "Project Epsilon",
    image: "/tree_trunk.jpg",
    category: "web",
    categoryLabel: "WEB ENGINES",
    description: "Web application engine or dark luxury portfolio frontend placeholder.",
    architecture: "Next.js 15 App Router structure, Framer Motion animations, and responsive UI layout.",
    tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },
  {
    id: "06",
    number: "PROJECT // 06",
    title: "Project Zeta",
    image: "/project_zeta_hammer.jpg", // Custom War Hammer & Shattered Sphere Artwork
    category: "web",
    categoryLabel: "WEB ENGINES",
    description: "Interactive data visualization or knowledge graph interface placeholder.",
    architecture: "Canvas node graph rendering, D3.js data parsing, and dynamic web GL shaders.",
    tags: ["JAVASCRIPT", "REACT", "D3.JS"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },
  {
    id: "07",
    number: "PROJECT // 07",
    title: "Project Eta",
    image: "/project_eta_robot.jpg", // Custom Stippled Robotic Arm Library & Cybernetic Claw Artwork
    category: "ai",
    categoryLabel: "AI & DEEP LEARNING",
    description: "Generative AI model fine-tuning or reinforcement learning agent placeholder.",
    architecture: "LoRA parameter-efficient fine-tuning, prompt conditioning, and RLHF reward alignment.",
    tags: ["PYTHON", "TRANSFORMERS", "LoRA"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },
  {
    id: "08",
    number: "PROJECT // 08",
    title: "Project Theta",
    image: "/flowering_tree_bg.jpg",
    category: "systems",
    categoryLabel: "C++ SYSTEMS",
    description: "Distributed IPC computational engine or custom memory manager placeholder.",
    architecture: "Lock-free shared memory queues, inter-process communication, and latency optimization.",
    tags: ["C++", "IPC", "LINUX"],
    githubUrl: "https://github.com/raunakxshrivastva",
    demoUrl: "#",
  },
];

export function MasterWorksSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "systems" | "web">("all");
  const [activeProject, setActiveProject] = useState<ProjectSlot | null>(null);

  const filteredSlots = activeCategory === "all"
    ? PROJECT_SLOTS
    : PROJECT_SLOTS.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="relative w-full pt-16 sm:pt-24 pb-16 bg-[#0b0b0b] text-[#ded8ce] overflow-hidden border-t border-[#1c1b19] scroll-mt-16">
      
      {/* Background Kanji Watermark */}
      <div className="absolute right-6 top-8 font-serif text-[180px] sm:text-[240px] text-[#141312] select-none pointer-events-none opacity-40 leading-none z-0">
        作
      </div>

      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Tag line */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm tracking-[0.24em] text-[#858077] mb-4">
          <span className="text-[#ded8ce] text-base font-serif">作</span>
          <span>MASTER WORKS</span>
          <div className="w-8 sm:w-16 h-px bg-[#262523]"></div>
          <span>PROJECT ARCHIVES</span>
        </div>

        <div className="text-center pb-12 sm:pb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#e3ded7] tracking-tight">
            Works & Creations.
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#a8a299] leading-relaxed tracking-wide mt-3">
            Click any project card to open the interactive 3D flyout dossier for complete details.
          </p>

          {/* Simple Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: "all", label: "ALL WORKS" },
              { id: "ai", label: "AI & DEEP LEARNING" },
              { id: "systems", label: "C++ SYSTEMS" },
              { id: "web", label: "WEB ENGINES" },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xs border font-mono text-xs tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#242320] border-[#6f6a64] text-[#ffffff]"
                      : "bg-[#121110] border-[#242320] text-[#a8a299] hover:border-[#4d4944] hover:text-[#ded8ce]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 CARDS PER ROW EXPANDED GRID (FULL WIDTH 1760px MAX WIDTH) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredSlots.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer"
              >
                {/* Vertical Card Container */}
                <div className="relative w-full bg-[#121110] border border-[#242320] p-3.5 rounded-xs shadow-2xl overflow-hidden group-hover:border-[#6f6a64] transition-all duration-300 flex flex-col justify-between h-full">
                  
                  {/* Corner Crosshairs */}
                  <span className="absolute top-2 left-2 text-[#4d4944] text-[10px] font-mono select-none z-20">+</span>
                  <span className="absolute top-2 right-2 text-[#4d4944] text-[10px] font-mono select-none z-20">+</span>
                  <span className="absolute bottom-2 left-2 text-[#4d4944] text-[10px] font-mono select-none z-20">+</span>
                  <span className="absolute bottom-2 right-2 text-[#4d4944] text-[10px] font-mono select-none z-20">+</span>

                  <div>
                    {/* Tall Vertical Artwork Image (Aspect 3/4) */}
                    <div className="relative w-full aspect-[3/4] bg-[#0b0b0b] border border-[#1f1e1c] overflow-hidden mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter contrast-125 brightness-95 grayscale group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#e3ded7] tracking-tight mb-3 px-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Click for more info */}
                  <div className="px-1 pt-3 border-t border-[#1f1e1c] flex items-center justify-between font-mono text-xs text-[#858077] group-hover:text-[#ded8ce]">
                    <span className="tracking-wider text-[11px]">CLICK FOR MORE INFO</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3D FLIP & FLYOUT MODAL POPUP WHEN A CARD IS CLICKED */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            >
              {/* 3D Flip Container */}
              <motion.div
                initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
                animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                exit={{ rotateY: -90, scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-[#121110] border border-[#4d4944] p-6 sm:p-8 rounded-xs shadow-2xl font-mono text-xs text-[#ded8ce]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute top-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 left-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>
                <span className="absolute bottom-2 right-2 text-[#4d4944] text-[10px] font-mono select-none">+</span>

                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#242320] pb-4 mb-4">
                  <div>
                    <span className="text-[10px] text-[#6f6a64] tracking-widest uppercase block mb-1">{activeProject.number}</span>
                    <h3 className="font-serif text-2xl text-white font-normal">{activeProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-[#a8a299] hover:text-white text-xs px-3 py-1 border border-[#383633] rounded-xs"
                  >
                    ✕ CLOSE
                  </button>
                </div>

                {/* Flip Card Back Details */}
                <div className="space-y-4">
                  {/* Expanded Image */}
                  <div className="relative w-full h-48 sm:h-56 bg-[#0b0b0b] border border-[#1f1e1c] overflow-hidden">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover filter contrast-125 brightness-95 grayscale"
                    />
                  </div>

                  {/* Project Overview */}
                  <div>
                    <span className="text-[10px] text-[#6f6a64] uppercase tracking-wider block mb-1">PROJECT OVERVIEW</span>
                    <p className="text-xs sm:text-sm text-[#ded8ce] leading-relaxed">{activeProject.description}</p>
                  </div>

                  {/* Architecture & Tech Specs */}
                  <div className="p-3 bg-[#0b0b0b] border border-[#1f1e1c]">
                    <span className="text-[10px] text-[#6f6a64] uppercase tracking-wider block mb-1">TECHNICAL ARCHITECTURE</span>
                    <p className="text-xs text-[#a8a299] leading-relaxed">{activeProject.architecture}</p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <span className="text-[10px] text-[#6f6a64] uppercase tracking-wider block mb-2">TECH STACK</span>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-[#0b0b0b] border border-[#242320] text-[10px] text-[#ded8ce]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="mt-6 pt-4 border-t border-[#242320] flex items-center justify-end gap-3 font-mono">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#242320] hover:bg-[#383633] border border-[#4d4944] text-[#ded8ce] rounded-xs transition-colors font-bold text-[#ded8ce] text-xs tracking-wider"
                    >
                      GITHUB REPO ↗
                    </a>
                  )}
                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      className="px-4 py-2 bg-[#ded8ce] text-[#0b0b0b] hover:bg-white font-bold text-xs rounded-xs tracking-wider transition-colors"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
