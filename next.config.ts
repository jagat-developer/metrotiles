import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/product-category/:path*",
        destination: "/products/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
