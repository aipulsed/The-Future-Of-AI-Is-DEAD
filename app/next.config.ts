import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the workspace root to this app directory so that
    // Turbopack does not get confused by the root-level package-lock.json
    // when running inside an npm workspaces monorepo.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
