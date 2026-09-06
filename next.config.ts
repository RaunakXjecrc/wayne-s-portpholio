import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The project lives on a removable/Windows-formatted drive. Next's event
  // cache cannot be deleted safely there, so keep its generated files local.
  distDir: process.env.NEXT_DIST_DIR || "/tmp/terminal-dossier-next",
};
export default nextConfig;
