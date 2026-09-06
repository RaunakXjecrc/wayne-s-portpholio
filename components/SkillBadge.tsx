"use client";

import React from "react";

export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="font-mono border border-[#242320] bg-[#0b0b0b] px-2.5 py-1.5 text-[10px] tracking-wide text-[#918c84] transition-colors hover:border-[#383633] hover:text-[#ded8ce]">
      {label}
    </span>
  );
}
