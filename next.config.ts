import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/": ["./posts/**/*.md"],
    "/blog": ["./posts/**/*.md"],
    "/posts/[slug]": ["./posts/**/*.md"],
  },
  async rewrites() {
    return [
      {
        source: "/__blog",
        destination: "/blog",
      },
    ];
  },
};

export default nextConfig;
