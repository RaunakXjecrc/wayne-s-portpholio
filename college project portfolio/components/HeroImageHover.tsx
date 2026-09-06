import React from 'react';

/**
 * HeroImageHover Component for Lovable Template
 * Place this inside your Lovable Hero component (src/components/Hero.tsx)
 * 
 * Instructions:
 * 1. Upload `raunak_photo.png` and `statue.png` into Lovable's `public/` directory.
 * 2. Replace your Hero image element in Lovable with this exact JSX code snippet.
 */
export function HeroImageHover() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-2xl border border-border group cursor-pointer">
      {/* Base Layer: Stoic Statue Image (Revealed on Hover) */}
      <img
        src="/statue.png"
        alt="Stoic Statue Bust"
        className="absolute inset-0 w-full h-full object-contain filter contrast-110 brightness-95 mix-blend-screen scale-95 z-10 pointer-events-none"
      />

      {/* Top Layer: Raunak Shrivastva Photo (Visible by default, fades out smoothly on hover) */}
      <img
        src="/raunak_photo.png"
        alt="Raunak Shrivastva"
        className="absolute inset-0 w-full h-full object-cover filter contrast-105 brightness-95 scale-95 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out z-20"
      />

      {/* Hover Hint Overlay Badge */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 border border-border text-primary text-[10px] font-mono tracking-widest uppercase rounded-sm z-30 shadow-md pointer-events-none">
        <span>✦ HOVER TO SEE STOIC STATUE</span>
      </div>
    </div>
  );
}

export default HeroImageHover;
