import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MasterWorksSection } from "@/components/MasterWorksSection";
import { PowerBeautySection } from "@/components/PowerBeautySection";
import { TreeOfGratitude } from "@/components/TreeOfGratitude";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#ded8ce] font-mono selection:bg-[#ded8ce] selection:text-[#0b0b0b]">
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* Section 01: Home Page (Upper Hero Section) */}
        <Hero />

        {/* Section 02: Master Works & Creations (Projects Showcase) */}
        <MasterWorksSection />

        {/* Section 03: Power, Intelligence & Beauty */}
        <PowerBeautySection />

        {/* Section 04: Roots of Gratitude (Tree Root System Showcase) */}
        <TreeOfGratitude />
      </main>

      {/* Section 05 & Finale: Contact & All Rights Reserved Footer */}
      <ContactFooter />
    </div>
  );
}
