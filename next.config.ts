import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages static hosting
  images: {
    unoptimized: true, // Required for static export unless using a custom loader
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  // If deploying to a project page (e.g., username.github.io/repo-name),
  // uncomment and set the basePath:
  // basePath: "/repo-name",
};

export default nextConfig;
