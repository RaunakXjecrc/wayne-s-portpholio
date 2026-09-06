"use client";

import React from "react";

type Props = { no: string; kanji: string; title: string; kicker?: string };

export function SectionHeader({ no, kanji, title, kicker }: Props) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#242320] pb-4 sm:mb-10 font-mono">
      <div className="flex items-center gap-3">
        <span className="text-3xl text-[#ded8ce]">{kanji}</span>
        <div>
          <p className="text-[10px] tracking-[0.18em] text-[#6f6a64]">
            {no} // {kicker ?? "DOSSIER"}
          </p>
          <h2 className="mt-1 text-2xl font-serif font-medium tracking-tight text-[#e3ded7] sm:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      <span className="hidden text-[10px] text-[#6f6a64] sm:block">SYS.READY</span>
    </div>
  );
}
