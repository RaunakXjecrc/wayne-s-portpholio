"use client";

import React from "react";
import { motion } from "framer-motion";
import type { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="group relative overflow-hidden p-5 sm:p-6 bg-[#121110] border border-[#242320] hover:border-[#383633] transition-colors"
    >
      <div className="relative flex items-start justify-between gap-4 font-mono">
        <span className="text-xs text-[#ded8ce]">{project.no} //</span>
        <span className="text-[10px] text-[#6f6a64]">{project.year}</span>
      </div>

      <div className="relative mt-10">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#6f6a64]">
          {project.kind.toUpperCase()}
        </p>
        <h3 className="mt-2 text-xl font-medium font-serif text-[#e3ded7]">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#918c84]">
          {project.summary}
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-1.5 font-mono">
        {project.stack.map((item) => (
          <span
            className="border border-[#242320] bg-[#0b0b0b] px-2 py-1 text-[9px] text-[#918c84]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex gap-5 font-mono text-[10px] tracking-wider">
        <a
          className="link-arrow text-[#ded8ce] hover:underline"
          href={project.live}
          target="_blank"
          rel="noreferrer"
        >
          LIVE
        </a>
        <a
          className="link-arrow text-[#6f6a64] hover:text-[#ded8ce]"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          SOURCE
        </a>
      </div>
    </motion.article>
  );
}
