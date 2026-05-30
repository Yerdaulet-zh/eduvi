import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-51f3f731af484f6bb32052dee9595dd9.r2.dev',
        port: '',
        pathname: '/test/**',
        search: '',
      },
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
