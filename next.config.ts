import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  redirects() {
    return [
      {
        source: "/downloads",
        destination: "/download",
        permanent: true,
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
