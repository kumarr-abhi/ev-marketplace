import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ev-database.org",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
