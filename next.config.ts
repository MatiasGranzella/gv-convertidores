import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Export estático para GitHub Pages (no hay servidor Node).
  output: "export",
  images: {
    // GitHub Pages no puede optimizar imágenes on-demand.
    unoptimized: true,
  },
};

export default nextConfig;
