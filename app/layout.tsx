import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raunak Shrivastva — AI / ML Engineer Dossier",
  description: "Personal AI / Machine Learning Engineer portfolio and system dossier.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0b0b0b] text-[#ded8ce] font-mono selection:bg-[#ded8ce] selection:text-[#0b0b0b]">
        {children}
      </body>
    </html>
  );
}
