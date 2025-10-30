// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // keep your existing opts
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // ✅ static export for GitHub Pages
  output: "export",

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // ✅ use <img> under the hood (no server image optimizer)
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", port: "", pathname: "/**" },
      { protocol: "https", hostname: "picsum.photos", port: "", pathname: "/**" },
    ],
  },

  // ✅ nicer static routing on Pages (produces /about/index.html)
  trailingSlash: true,

  // For a custom domain (e.g., paxai.app), leave these empty.
  // If you were serving under username.github.io/myrepo, you'd set both to "/myrepo".
  // basePath: "/myrepo",
  // assetPrefix: "/myrepo/",
};

export default nextConfig;
