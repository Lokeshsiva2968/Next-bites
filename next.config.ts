import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Next-bites" : "",
  trailingSlash: true,
};

export default nextConfig;
