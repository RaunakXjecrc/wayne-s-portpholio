"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export type SkillCategory = "ALL" | "CORE & LANG" | "DATA & AI" | "WEB & FRONTEND" | "SYSTEMS & BACKEND" | "DEPLOYMENT";

export interface SkillNode {
  id: string;
  name: string;
  category: Exclude<SkillCategory, "ALL">;
  level: number;
  notes: string;
  accent: string;
  icon: string;
  x: number; // percentage on 1000x562.5 viewBox canvas
  y: number;
}

const INITIAL_SKILLS: SkillNode[] = [
  { id: "python", name: "PYTHON", category: "CORE & LANG", level: 96, notes: "Core data structures, object-oriented design, scripting, and ecosystem logic.", accent: "#3776ab", icon: "PY", x: 21.5, y: 13.5 },
  { id: "git", name: "GIT", category: "CORE & LANG", level: 90, notes: "Distributed version control, branch rebasing, commit integrity, and merging.", accent: "#f05032", icon: "GIT", x: 35.5, y: 22 },
  { id: "c_lang", name: "C LANGUAGE", category: "CORE & LANG", level: 86, notes: "Low-level memory management, pointers, allocations, and hardware execution.", accent: "#659ad2", icon: "C", x: 10, y: 31 },
  { id: "cpp", name: "C++", category: "CORE & LANG", level: 88, notes: "STL algorithms, template metaprogramming, RAII memory safety, and high speed.", accent: "#00599c", icon: "C++", x: 27, y: 35.5 },
  { id: "pytorch", name: "PYTORCH", category: "DATA & AI", level: 92, notes: "Deep learning neural network architectures, autograd tensors, GPU training pipelines.", accent: "#ee4c2c", icon: "PT", x: 5.5, y: 53.5 },
  { id: "pandas", name: "PANDAS", category: "DATA & AI", level: 94, notes: "DataFrame transformations, data wrangling, missing data imputation, ETL tasks.", accent: "#130754", icon: "PD", x: 29, y: 52 },
  { id: "scikit", name: "SCIKIT-LEARN", category: "DATA & AI", level: 90, notes: "Supervised & unsupervised ML, cross-validation, feature engineering, classification.", accent: "#f7931e", icon: "SK", x: 11.5, y: 72 },
  { id: "matplotlib", name: "MATPLOTLIB", category: "DATA & AI", level: 89, notes: "Scientific visualization plots, custom subplots, statistical distribution figures.", accent: "#11557c", icon: "MPL", x: 27.5, y: 74 },
  { id: "sql", name: "SQL", category: "SYSTEMS & BACKEND", level: 91, notes: "Relational queries, index optimization, schema migrations, ACID transactions.", accent: "#336791", icon: "SQL", x: 64.5, y: 22 },
  { id: "linux", name: "LINUX", category: "SYSTEMS & BACKEND", level: 94, notes: "POSIX shell scripting, process scheduling, systemd, kernel command primitives.", accent: "#d1a821", icon: "LNX", x: 78.5, y: 13.5 },
  { id: "docker", name: "DOCKER", category: "SYSTEMS & BACKEND", level: 89, notes: "Containerization, Dockerfiles, multi-stage builds, isolated runtime environments.", accent: "#2496ed", icon: "DOC", x: 73, y: 35.5 },
  { id: "java", name: "JAVA", category: "SYSTEMS & BACKEND", level: 87, notes: "JVM garbage collection, multi-threaded concurrency, enterprise OOP design.", accent: "#ed8b00", icon: "JV", x: 90, y: 31 },
  { id: "javascript", name: "JAVASCRIPT", category: "WEB & FRONTEND", level: 94, notes: "Asynchronous EventLoop, ESNext syntax, Promises, DOM manipulation.", accent: "#d8b623", icon: "JS", x: 71, y: 52 },
  { id: "react", name: "REACT / NEXT", category: "WEB & FRONTEND", level: 96, notes: "Reactive state trees, Next.js server components, SSR hydration, custom hooks.", accent: "#61dafb", icon: "RCT", x: 94.5, y: 53.5 },
  { id: "github_actions", name: "GITHUB ACTIONS", category: "DEPLOYMENT", level: 92, notes: "Automated CI/CD pipelines, test runners, release tag builds, cloud deployment.", accent: "#2088ff", icon: "ACT", x: 72.5, y: 74 },
  { id: "html_css", name: "HTML5 & CSS3", category: "WEB & FRONTEND", level: 98, notes: "Semantic HTML5, CSS Grid/Flexbox layouts, glassmorphism, responsive design.", accent: "#e34f26", icon: "WEB", x: 88.5, y: 72 },
];

const CATEGORIES: SkillCategory[] = [
  "ALL", "CORE & LANG", "DATA & AI", "SYSTEMS & BACKEND", "WEB & FRONTEND", "DEPLOYMENT",
];

export function TreeOfGratitude() {
  const [skills, setSkills] = useState<SkillNode[]>(INITIAL_SKILLS);
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("ALL");
  const [selectedId, setSelectedId] = useState<string>("python");
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillCat, setNewSkillCat] = useState<Exclude<SkillCategory, "ALL">>("CORE & LANG");
  const [newSkillLevel, setNewSkillLevel] = useState(85);
  const [newSkillNotes, setNewSkillNotes] = useState("");
  const [newSkillAccent, setNewSkillAccent] = useState("#d4af37");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("stoic_tree_skills_positions");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) setSkills(parsed);
        } catch (e) { console.error("Failed to parse saved skill positions", e); }
      }
    }
  }, []);

  const handleDragEnd = (id: string, info: PanInfo) => {
    if (!containerRef.current || isLocked) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pointX = info.point.x - rect.left;
    const pointY = info.point.y - rect.top;

    let xPct = Math.round((pointX / rect.width) * 1000) / 10;
    let yPct = Math.round((pointY / rect.height) * 1000) / 10;

    xPct = Math.max(2, Math.min(98, xPct));
    yPct = Math.max(2, Math.min(98, yPct));

    setSkills((prev) => {
      const updated = prev.map((s) => (s.id === id ? { ...s, x: xPct, y: yPct } : s));
      if (typeof window !== "undefined") localStorage.setItem("stoic_tree_skills_positions", JSON.stringify(updated));
      return updated;
    });
  };

  const handleResetPositions = () => {
    setSkills(INITIAL_SKILLS);
    if (typeof window !== "undefined") localStorage.removeItem("stoic_tree_skills_positions");
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    const newNode: SkillNode = {
      id: `custom_${Date.now()}`,
      name: newSkillName.toUpperCase(),
      category: newSkillCat,
      level: newSkillLevel,
      notes: newSkillNotes || "Custom master root skill.",
      accent: newSkillAccent,
      icon: newSkillName.substring(0, 3).toUpperCase(),
      x: 50,
      y: 50,
    };
    const updated = [...skills, newNode];
    setSkills(updated);
    if (typeof window !== "undefined") localStorage.setItem("stoic_tree_skills_positions", JSON.stringify(updated));
    setSelectedId(newNode.id);
    setNewSkillName("");
    setNewSkillNotes("");
    setIsAddModalOpen(false);
  };

  const filteredSkills = activeCategory === "ALL" ? skills : skills.filter((s) => s.category === activeCategory);
  const selectedSkill = skills.find((s) => s.id === selectedId) || filteredSkills[0] || skills[0];

  return (
    <section id="tree-of-gratitude" className="relative w-full bg-[#050505] py-24 text-[#ded8ce]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-2 flex items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#8a8377]">
            <span className="h-px w-10 bg-[#403d38]" />
            <span>FOUNDATIONAL & SCALABLE SKILLS</span>
            <span className="h-px w-10 bg-[#403d38]" />
          </div>
          <h2 className="font-serif text-5xl tracking-tight text-[#e3ded7] sm:text-6xl lg:text-7xl">Roots of Gratitude.</h2>
          <p className="mt-3 text-xs leading-relaxed tracking-wide text-[#a8a299] sm:text-sm">Interactive Drag & Lock canvas. Drag cards freely onto your tree root tips, then lock their positions.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-sm px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all ${isActive ? "bg-amber-500 text-black font-extrabold shadow-lg" : "border border-[#383530] bg-[#121110] text-[#a8a299] hover:border-[#6b6459]"}`}>{cat}</button>
              );
            })}
            <button onClick={() => setIsLocked(!isLocked)} className={`flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider transition-all ${isLocked ? "border-emerald-500/80 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black" : "border-amber-500/80 bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-black"}`}>
              {isLocked ? "🔒 Positions Locked" : "🖐️ Drag Mode Active"}
            </button>
            <button onClick={handleResetPositions} className="rounded-sm border border-[#403d38] bg-[#171614] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#a8a299] hover:border-[#6b6459] transition-all">🔄 Reset</button>
            <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-1 rounded-sm border border-amber-500/80 bg-amber-500/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-500 hover:text-black transition-all">+ Add Skill</button>
          </div>
        </div>
        <div ref={containerRef} className="relative mx-auto w-full max-w-[1440px] overflow-hidden border border-[#302e2a] bg-[#030303] shadow-2xl">
          <div className="relative w-full aspect-[16/9] select-none">
            <img src="/bonsaitree.png" alt="Bonsai Tree" className="absolute inset-0 h-full w-full object-cover opacity-95 pointer-events-none" draggable="false" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_30%,#030303_95%)]" />
            <div className="absolute inset-0 z-20 pointer-events-auto overflow-hidden">
              {filteredSkills.map((skill) => {
                const isSelected = skill.id === selectedSkill?.id;
                const isRightSide = skill.x > 50;
                return (
                  <motion.div key={skill.id} drag={!isLocked} dragConstraints={containerRef} dragElastic={0} dragMomentum={false} onDragEnd={(_, info) => handleDragEnd(skill.id, info)} onClick={() => setSelectedId(skill.id)} style={{ left: `${skill.x}%`, top: `${skill.y}%`, position: "absolute" }} className={`transition-shadow duration-200 ${isLocked ? "cursor-pointer" : "cursor-grab active:cursor-grabbing"} ${isSelected ? "z-40 scale-110" : "z-30 hover:scale-105"}`}>
                    <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-80 ${isSelected ? "bg-amber-400" : "bg-white/80"}`} />
                        <span className={`relative inline-flex h-3 w-3 rounded-full border border-white shadow-[0_0_14px_rgba(255,255,255,1)] ${isSelected ? "bg-amber-400" : "bg-white"}`} style={{ backgroundColor: isSelected ? skill.accent : undefined }} />
                      </div>
                    </div>
                    <div className={`absolute top-0 -translate-y-1/2 whitespace-nowrap ${isRightSide ? "right-3" : "left-3"}`}>
                      <div className={`flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-2xl backdrop-blur-md transition-all duration-300 ${isSelected ? "bg-[#14120e]/95 border-amber-400 ring-2 ring-amber-400/50" : "bg-[#0b0a09]/90 border-[#38342c] hover:border-amber-400/80"}`} style={{ borderColor: isSelected ? skill.accent : undefined }}>
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[9px] font-black shadow-inner" style={{ backgroundColor: `${skill.accent}25`, color: skill.accent, border: `1px solid ${skill.accent}60` }}>{skill.icon}</div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ded8ce]">{skill.name}</span>
                        <span className="font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-[#1e1c18] border border-[#38342c]" style={{ color: skill.accent }}>{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="border-t border-[#262420] bg-[#0c0b0a] px-6 py-4">
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#ded8ce]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#3a3731] bg-[#171614] text-sm font-black shadow-lg"
                      style={{ color: selectedSkill.accent }}
                    >
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#fff] text-sm uppercase tracking-wider">
                          {selectedSkill.name}
                        </span>
                        <span
                          className="rounded px-2 py-0.5 text-[9px] font-bold uppercase text-black"
                          style={{ backgroundColor: selectedSkill.accent }}
                        >
                          {selectedSkill.category}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-[#a39c91] line-clamp-1">
                        {selectedSkill.notes}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <div className="text-[11px] text-[#858077]">
                      PROFICIENCY: <span className="font-bold text-[#fff]">{selectedSkill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Add New Skill Modal for Future Expansion */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-md border border-[#403d38] bg-[#141312] p-6 shadow-2xl font-mono text-xs text-[#ded8ce]"
            >
              <div className="flex items-center justify-between border-b border-[#2b2926] pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#fff]">
                  + Add New Skill to Tree
                </h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-[#858077] hover:text-[#fff]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddSkill} className="mt-4 space-y-4">
                <div>
                  <label className="block text-[10px] uppercase text-[#858077]">Skill Name</label>
                  <input
                    type="text"
                    placeholder="e.g. PyTorch, FastAPI, Docker"
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                    className="mt-1 w-full border border-[#383530] bg-[#0c0c0b] px-3 py-2 text-[#fff] focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-[#858077]">Category</label>
                  <select
                    value={newSkillCat}
                    onChange={(e) => setNewSkillCat(e.target.value as any)}
                    className="mt-1 w-full border border-[#383530] bg-[#0c0c0b] px-3 py-2 text-[#fff] focus:border-amber-500 focus:outline-none"
                  >
                    <option value="CORE & LANG">CORE & LANG</option>
                    <option value="DATA & AI">DATA & AI (PyTorch, Pandas, Scikit-Learn)</option>
                    <option value="SYSTEMS & BACKEND">SYSTEMS & BACKEND (Linux, SQL, Java)</option>
                    <option value="WEB & FRONTEND">WEB & FRONTEND (React, Next, JS)</option>
                    <option value="DEPLOYMENT">DEPLOYMENT (GitHub Actions, Cloud)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-[#858077]">
                    <span>Proficiency Level</span>
                    <span className="font-bold text-amber-500">{newSkillLevel}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={newSkillLevel}
                    onChange={(e) => setNewSkillLevel(parseInt(e.target.value, 10))}
                    className="mt-2 w-full accent-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-[#858077]">Description / Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Key concepts or frameworks mastered..."
                    value={newSkillNotes}
                    onChange={(e) => setNewSkillNotes(e.target.value)}
                    className="mt-1 w-full border border-[#383530] bg-[#0c0c0b] px-3 py-2 text-[#fff] focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="border border-[#383530] bg-transparent px-4 py-2 text-[#a8a299]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border border-amber-500 bg-amber-500 px-4 py-2 font-bold text-black hover:bg-amber-400"
                  >
                    Plant Root
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


