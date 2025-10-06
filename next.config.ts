import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for now to test
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/JIDI' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/JIDI' : '',
};

export default nextConfig;
