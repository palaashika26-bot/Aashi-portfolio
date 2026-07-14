import type { NextConfig } from "next";

/**
 * Static-export & GitHub Pages compatible configuration.
 *
 * To deploy to GitHub Pages under a repo path (e.g. https://user.github.io/portfolio/),
 * set NEXT_PUBLIC_BASE_PATH="/portfolio" before build:
 *
 *   NEXT_PUBLIC_BASE_PATH="/portfolio" pnpm build
 *
 * The exported site will be in the `out/` directory.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
