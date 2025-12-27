import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/": ["./posts/**/*.md"],
    "/posts/[slug]": ["./posts/**/*.md"],
  },
};

export default nextConfig;
