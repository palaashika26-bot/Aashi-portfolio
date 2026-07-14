import type { NextConfig } from "next";

/**
 * Next.js configuration for GitHub Pages deployment.
 */

const basePath =
  process.env.NODE_ENV === "production"
    ? "/Aashi-portfolio"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;