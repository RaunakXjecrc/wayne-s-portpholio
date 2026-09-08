"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import heroCutout from "@/assets/hero-cutout-new.png.asset.json";

const container = {
  hidden: { opacity: 1 },
  visible: (custom: { delay?: number; stagger?: number } = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.08,
      delayChildren: custom.delay ?? 0,
    },
  }),
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function TypewriterLine({
  text,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      custom={{ delay, stagger }}
      className={`block ${className}`}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-neutral-950 flex flex-col justify-center"
    >
      {/* 1. BACKGROUND SPOTLIGHT TYPOGRAPHY LAYER (z-index: 0 & z-1) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        {/* Base Text Layer: Faint Blacked Out */}
        <span
          className="font-mono uppercase text-center font-black tracking-tighter opacity-100"
          style={{
            fontSize: "clamp(6rem, 18vw, 22rem)",
            fontWeight: 900,
            lineHeight: 0.8,
            color: "rgba(255, 255, 255, 0.03)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* Revealed Text Layer with Dynamic Radial Spotlight Mask */}
      <div
        className="absolute inset-0 z-[1] flex items-center justify-center select-none pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 100%)`,
          maskImage: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 100%)`,
        }}
      >
        <span
          className="font-mono uppercase text-center font-black tracking-tighter"
          style={{
            fontSize: "clamp(6rem, 18vw, 22rem)",
            fontWeight: 900,
            lineHeight: 0.8,
            color: "rgba(255, 255, 255, 0.35)",
            textShadow: "0 0 35px rgba(255, 255, 255, 0.3)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          PORTFOLIO
        </span>
      </div>

      {/* 2. MAIN HERO FOREGROUND CONTENT LAYER (z-index: 10) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start pl-4 pr-4 md:pl-8 md:pr-0 lg:pl-16 pointer-events-auto">
        <div className="w-full max-w-[95%] md:max-w-[60%] lg:max-w-[70%]">
          <h1 className="font-display leading-[0.85] tracking-tight text-left select-none">
            <TypewriterLine
              text="RAUNAK"
              className="text-white text-[10vw] md:text-[6vw] lg:text-[8vw]"
            />
            <TypewriterLine
              text="SHRIVASTVA"
              className="text-white text-[10vw] md:text-[6vw] lg:text-[8vw]"
            />
            <motion.span
              initial={{ opacity: 0, scale: 2.5, y: -40, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 14,
                delay: 1.4,
              }}
              className="inline-block text-white/50 text-[4.5vw] md:text-[2.4vw] lg:text-[3vw] tracking-widest mt-3 border border-white/30 px-3 py-1"
            >
              AI RESEARCHER
            </motion.span>
          </h1>

          {/* Brief intro with typewriter animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="mt-5 md:mt-7 max-w-full font-body text-sm md:text-base text-white/80 leading-relaxed"
          >
            <TypewriterLine
              text="Pursuing B.Tech CSE at JECRC University, Jaipur, Rajasthan."
              delay={2.4}
              stagger={0.03}
            />
            <TypewriterLine
              text="Fascinated by AI — the art of making machines learn & reason."
              delay={4.6}
              stagger={0.03}
            />
            <TypewriterLine
              text="Here to build intelligent systems that solve real problems."
              delay={6.8}
              stagger={0.03}
            />
          </motion.div>
        </div>
      </div>

      {/* Cutout portrait in front of the text (z-index: 10) */}
      <div className="absolute right-0 top-24 bottom-0 z-10 flex items-end justify-end w-[65%] md:w-[38%] lg:w-[40%] pointer-events-none">
        <motion.img
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          src="/hero-image.jpg"
          alt="Portrait of Raunak Shrivastva"
          className="block h-auto max-h-full w-auto max-w-full object-contain"
        />
      </div>

      {/* Fade gradient where the portrait meets the background */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 h-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgb(10 10 10) 0%, rgb(10 10 10 / 0.4) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}
