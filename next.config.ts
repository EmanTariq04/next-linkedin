import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.pinimg.com',
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
        },
        // {
        //   protocol: 'https',
        //   hostname: 'another-example.com',
        // }
      ],
  }
};

export default nextConfig;
