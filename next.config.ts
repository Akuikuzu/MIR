import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{
        protocol: 'http',
        hostname: 'aphinan.com',
        pathname: '/**',
      },],
  },
};

export default nextConfig;
