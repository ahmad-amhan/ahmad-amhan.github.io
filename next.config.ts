import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain HTML/CSS/JS in `out/`, so any free static host can serve it.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
