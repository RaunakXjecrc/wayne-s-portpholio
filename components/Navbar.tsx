"use client";

import React, { useState } from "react";
import { profile } from "@/data/portfolio";
import { AskAIDrawer } from "./AskAIDrawer";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-[#1c1b19] bg-[#0b0b0b]/90 backdrop-blur-sm sticky top-0 z-50 px-4 sm:px-6 lg:px-12 py-3.5">
        <div className="w-full flex items-center justify-between font-mono text-xs tracking-[0.15em] text-[#918c84]">
          {/* Brand logo */}
          <a href="#hero" className="flex items-center gap-2.5 text-[#ded8ce] hover:opacity-80 transition-opacity cursor-pointer group">
            <span className="text-base font-normal text-[#ded8ce] group-hover:rotate-12 transition-transform">力</span>
            <span className="font-serif text-lg tracking-tight text-[#e3ded7] font-semibold">
              {profile.name === "YOUR NAME" ? "Raunak Shrivastva" : profile.name}
            </span>
          </a>

          {/* Nav Links: HOME -> ABOUT -> WORK & CREATIONS -> SKILLS (#tree-of-gratitude) -> CONTACT */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-mono font-bold tracking-[0.15em]">
            <a href="#hero" className="text-[#ded8ce] hover:text-amber-400 transition-colors uppercase">
              HOME
            </a>
            <a href="#about" className="text-[#ded8ce] hover:text-amber-400 transition-colors uppercase">
              ABOUT
            </a>
            <a href="#works" className="text-[#ded8ce] hover:text-amber-400 transition-colors uppercase">
              WORK & CREATIONS
            </a>
            <a href="#tree-of-gratitude" className="text-[#ded8ce] hover:text-amber-400 transition-colors uppercase">
              SKILLS
            </a>
            <a href="#contact" className="text-[#ded8ce] hover:text-amber-400 transition-colors uppercase">
              CONTACT
            </a>
          </nav>

          {/* Right Action Bar: Resume Button, ASK AI Trigger, Indian Flag */}
          <div className="flex items-center gap-2 sm:gap-3 text-[10px]">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Raunak_Shrivastva_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-amber-500/80 bg-amber-500/10 text-amber-300 hover:bg-amber-500 hover:text-black transition-all rounded-xs tracking-wider text-[10px] font-mono font-bold uppercase flex items-center gap-1.5 shadow-sm"
            >
              <span>📄 RESUME</span>
            </a>

            {/* ASK AI Trigger Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-3.5 py-1.5 bg-[#121110] border border-[#383633] text-[#ded8ce] hover:bg-[#ded8ce] hover:text-[#0b0b0b] transition-all rounded-xs tracking-widest text-[10px] font-semibold uppercase flex items-center gap-1.5 shadow-sm group"
            >
              <span>🤖 ASK AI</span>
              <span className="text-[10px] text-[#a8a299] group-hover:text-[#0b0b0b]">✦</span>
            </button>

            {/* Indian Flag Telemetry Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 border border-[#242320] bg-[#121110] text-[#ded8ce] rounded-xs font-mono">
              <span className="text-sm leading-none select-none">🇮🇳</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ded8ce] animate-pulse"></span>
              <span className="tracking-wider text-[10px] text-[#e3ded7] font-semibold uppercase">INDIA · LIVE</span>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden px-2.5 py-1.5 border border-[#383633] bg-[#121110] text-[#ded8ce] rounded-xs"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-[#262420] flex flex-col gap-2.5 font-mono text-xs font-bold tracking-[0.15em]">
            <a
              href="#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#ded8ce] hover:text-amber-400 transition-colors uppercase"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#ded8ce] hover:text-amber-400 transition-colors uppercase"
            >
              ABOUT
            </a>
            <a
              href="#works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#ded8ce] hover:text-amber-400 transition-colors uppercase"
            >
              WORK & CREATIONS
            </a>
            <a
              href="#tree-of-gratitude"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 text-[#ded8ce] hover:text-amber-400 transition-colors uppercase"
            >
              SKILLS
            </a>
          </nav>
        )}
      </header>

      {/* Interactive AI Drawer Modal */}
      <AskAIDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
