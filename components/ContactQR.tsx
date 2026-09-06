"use client";

import React from "react";

export function ContactQR({ color = "#f4efe6", bg = "#141312" }: { color?: string; bg?: string }) {
  return (
    <div className="relative flex items-center justify-center p-2">
      <svg className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48" viewBox="0 0 100 100" fill="none">
        {/* Outer QR Code Modules */}
        <path
          d="M 5,5 H 35 V 35 H 5 Z M 11,11 V 29 H 29 V 11 Z M 17,17 H 23 V 23 H 17 Z"
          fill={color}
        />
        <path
          d="M 65,5 H 95 V 35 H 65 Z M 71,11 V 29 H 89 V 11 Z M 77,17 H 83 V 23 H 77 Z"
          fill={color}
        />
        <path
          d="M 5,65 H 35 V 95 H 5 Z M 11,71 V 89 H 29 V 71 Z M 17,77 H 23 V 83 H 17 Z"
          fill={color}
        />

        {/* Dense QR Data Pattern Grid */}
        <g fill={color}>
          <rect x="40" y="5" width="5" height="5" />
          <rect x="50" y="5" width="10" height="5" />
          <rect x="45" y="12" width="5" height="8" />
          <rect x="55" y="15" width="5" height="5" />
          
          <rect x="5" y="40" width="5" height="10" />
          <rect x="15" y="45" width="10" height="5" />
          <rect x="28" y="40" width="7" height="7" />

          <rect x="65" y="40" width="8" height="5" />
          <rect x="78" y="42" width="5" height="8" />
          <rect x="88" y="40" width="7" height="7" />

          <rect x="40" y="52" width="5" height="10" />
          <rect x="52" y="55" width="8" height="5" />

          <rect x="40" y="65" width="8" height="5" />
          <rect x="50" y="72" width="10" height="5" />
          <rect x="42" y="82" width="6" height="8" />

          <rect x="65" y="52" width="5" height="8" />
          <rect x="75" y="55" width="10" height="5" />
          <rect x="88" y="52" width="7" height="8" />

          <rect x="65" y="68" width="8" height="5" />
          <rect x="78" y="65" width="5" height="10" />
          <rect x="85" y="75" width="10" height="5" />

          <rect x="65" y="82" width="6" height="8" />
          <rect x="75" y="85" width="12" height="5" />
        </g>

        {/* Center Katana Samurai Sword Emblem (Circular Crest) */}
        <circle cx="50" cy="50" r="16" fill={bg} stroke={color} strokeWidth="2" />
        <circle cx="50" cy="50" r="13.5" stroke={color} strokeWidth="0.75" strokeDasharray="1.5 1.5" fill="none" />
        
        {/* Katana Sword Diagonal Line */}
        <path d="M 39,61 L 61,39" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        {/* Katana Guard (Tsuba) */}
        <ellipse cx="50" cy="50" rx="3.5" ry="1.5" transform="rotate(-45 50 50)" fill={color} />
        {/* Katana Handle Wrapping (Tsuka-ito) */}
        <path d="M 40,60 L 44,56" stroke={bg} strokeWidth="0.8" />
        <path d="M 42,62 L 46,58" stroke={bg} strokeWidth="0.8" />
      </svg>
    </div>
  );
}
