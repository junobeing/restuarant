import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lemap-bordeaux.com",
      },
      {
        protocol: "https",
        hostname: "privateaser-media.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "leftlion.co.uk",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
