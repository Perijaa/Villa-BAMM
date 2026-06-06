import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/Villa-BAMM";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGithubPages && {
    basePath: repoBasePath,
    assetPrefix: `${repoBasePath}/`,
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
};

export default nextConfig;
