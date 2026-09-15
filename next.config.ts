import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep worktree builds scoped to this project, even with ancestor lockfiles.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
