import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mkalaimalai.github.com',
  assetPrefix: '/mkalaimalai.github.com/',
};




export default nextConfig;
