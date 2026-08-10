// TEMPORARY verification config — sandbox only.
// Identical to vite.config.ts but without @vitejs/plugin-react-swc, whose
// native binary crashes in this Linux sandbox. Delete after use.
import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  base: "./",
  plugins: [],
  esbuild: { jsx: "automatic" },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "dist-check", emptyOutDir: true },
});
