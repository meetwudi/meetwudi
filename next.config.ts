import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/": ["./posts/**/*.md"],
      "/posts/[slug]": ["./posts/**/*.md"],
    },
  },
};

export default nextConfig;
