"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRESET_PROMPTS = [
  {
    label: "Core AI / ML Stack",
    prompt: "What is Raunak's core technical stack?",
    answer: "Raunak specializes in PyTorch, Python, CUDA, vLLM, LangChain, Transformers, and MLOps (FastAPI, Docker, TensorRT). He designs, trains, and optimizes high-throughput deep learning models and RAG systems.",
  },
  {
    label: "Education & Background",
    prompt: "Where is Raunak studying?",
    answer: "Raunak Shrivastva is currently pursuing his B.Tech in Computer Science & Engineering (CSE) at JECRC University, focusing on neural network architectures and distributed AI infrastructure.",
  },
  {
    label: "LLM Quantization Work",
    prompt: "Tell me about his LLM optimization projects.",
    answer: "He built Nexus-7B, an ultra-low latency local LLM inference engine optimized with FlashAttention-2, vLLM, and 4-bit AWQ quantization—achieving 3.2x faster inference and 70% VRAM reduction.",
  },
  {
    label: "Contact & Hiring",
    prompt: "How can I hire or get in touch with Raunak?",
    answer: "You can reach out via Gmail at raunakxshrivastva@gmail.com, connect on LinkedIn (linkedin.com/in/raunakxshrivastva), or flip the 3D card on the hero section to scan his contact QR code!",
  },
];

export function AskAIDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedPrompt, setSelectedPrompt] = useState<typeof PRESET_PROMPTS[0] | null>(PRESET_PROMPTS[0]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#000000]/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* AI Drawer Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl bg-[#0e0d0c] border border-[#2b2723] rounded-xs shadow-2xl p-6 sm:p-8 font-mono text-xs text-[#ded8ce] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#242320] pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#ded8ce] animate-pulse"></span>
                <span className="font-bold text-sm tracking-wider text-[#e3ded7] uppercase">
                  🤖 RAUNAK AI ASSISTANT // SYSTEM v2.6
                </span>
              </div>
              <button
                onClick={onClose}
                className="px-2.5 py-1 bg-[#1a1917] border border-[#383633] text-[#a8a299] hover:text-[#ffffff] hover:border-[#ded8ce] transition-colors rounded-xs text-[11px]"
              >
                ESC ✕
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-[#a8a299] text-xs leading-relaxed mb-5 tracking-wide">
              Select a prompt query below to inspect Raunak Shrivastva&apos;s AI engineering background, B.Tech CSE details, and model benchmarks:
            </p>

            {/* Preset Prompt Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {PRESET_PROMPTS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setSelectedPrompt(p)}
                  className={`text-left p-3 border transition-all rounded-xs flex flex-col justify-between ${
                    selectedPrompt?.label === p.label
                      ? "bg-[#1f1d1a] border-[#ded8ce] text-[#ffffff] shadow-md"
                      : "bg-[#141312] border-[#242320] text-[#a8a299] hover:border-[#4d4944] hover:text-[#ded8ce]"
                  }`}
                >
                  <span className="text-[10px] text-[#6f6a64] uppercase tracking-wider font-semibold">
                    {p.label}
                  </span>
                  <span className="font-medium mt-1 truncate">{p.prompt}</span>
                </button>
              ))}
            </div>

            {/* AI Response Output Console */}
            {selectedPrompt && (
              <div className="p-4 sm:p-5 bg-[#050505] border border-[#2b2723] rounded-xs shadow-inner space-y-2">
                <div className="flex items-center justify-between text-[10px] text-[#6f6a64] tracking-widest border-b border-[#1c1b19] pb-2">
                  <span>RESPONSE LOG // QUERY EXECUTION</span>
                  <span className="text-[#ded8ce] font-semibold">LATENCY: 12ms</span>
                </div>
                <p className="font-mono text-xs text-[#ded8ce] leading-relaxed pt-1">
                  {selectedPrompt.answer}
                </p>
              </div>
            )}

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-[#242320] pt-4 mt-6 text-[10px] text-[#6f6a64]">
              <span>JECRC UNIVERSITY · AI RESEARCH</span>
              <a
                href="#connect"
                onClick={onClose}
                className="text-[#ded8ce] hover:underline font-semibold tracking-wider uppercase"
              >
                GET IN TOUCH DIRECTLY ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
