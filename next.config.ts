import type { NextConfig } from "next";

const [owner, repo] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isProjectPages = Boolean(owner && repo && repo !== `${owner}.github.io`);
const basePath = isProjectPages ? `/${repo}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};
export default nextConfig;
