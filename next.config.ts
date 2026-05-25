import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow these quality levels via Image quality prop
    qualities: [70, 85, 92, 100],
    // Sensible sizes for the gallery / hero
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750],
  },
};

export default nextConfig;
