"use client";

import React from "react";

export function Barcode({ text = "AI-ML-SYSTEMS // 2026" }: { text?: string }) {
  return (
    <div className="flex flex-col gap-2 opacity-90 hover:opacity-100 transition-opacity">
      <svg className="w-full h-10 max-w-[320px]" viewBox="0 0 240 40" fill="currentColor">
        {/* Code 128 / Barcode SVG pattern */}
        <rect x="0" y="0" width="3" height="40" fill="#ded8ce" />
        <rect x="5" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="8" y="0" width="4" height="40" fill="#ded8ce" />
        <rect x="15" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="19" y="0" width="5" height="40" fill="#ded8ce" />
        <rect x="26" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="29" y="0" width="3" height="40" fill="#ded8ce" />
        <rect x="34" y="0" width="6" height="40" fill="#ded8ce" />
        <rect x="42" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="46" y="0" width="4" height="40" fill="#ded8ce" />
        <rect x="52" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="55" y="0" width="5" height="40" fill="#ded8ce" />
        <rect x="62" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="66" y="0" width="3" height="40" fill="#ded8ce" />
        <rect x="71" y="0" width="6" height="40" fill="#ded8ce" />
        <rect x="79" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="82" y="0" width="4" height="40" fill="#ded8ce" />
        <rect x="88" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="92" y="0" width="5" height="40" fill="#ded8ce" />
        <rect x="99" y="0" width="3" height="40" fill="#ded8ce" />
        <rect x="104" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="107" y="0" width="6" height="40" fill="#ded8ce" />
        <rect x="115" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="119" y="0" width="4" height="40" fill="#ded8ce" />
        <rect x="125" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="128" y="0" width="5" height="40" fill="#ded8ce" />
        <rect x="135" y="0" width="3" height="40" fill="#ded8ce" />
        <rect x="140" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="144" y="0" width="6" height="40" fill="#ded8ce" />
        <rect x="152" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="155" y="0" width="4" height="40" fill="#ded8ce" />
        <rect x="161" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="165" y="0" width="5" height="40" fill="#ded8ce" />
        <rect x="172" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="175" y="0" width="3" height="40" fill="#ded8ce" />
        <rect x="180" y="0" width="6" height="40" fill="#ded8ce" />
        <rect x="188" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="192" y="0" width="4" height="40" fill="#ded8ce" />
        <rect x="198" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="201" y="0" width="5" height="40" fill="#ded8ce" />
        <rect x="208" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="212" y="0" width="3" height="40" fill="#ded8ce" />
        <rect x="217" y="0" width="6" height="40" fill="#ded8ce" />
        <rect x="225" y="0" width="1" height="40" fill="#ded8ce" />
        <rect x="228" y="0" width="4" height="40" fill="#ded8ce" />
        <rect x="234" y="0" width="2" height="40" fill="#ded8ce" />
        <rect x="238" y="0" width="2" height="40" fill="#ded8ce" />
      </svg>
      <span className="font-mono text-[10px] tracking-[0.24em] text-[#6f6a64] font-medium uppercase">
        {text}
      </span>
    </div>
  );
}
