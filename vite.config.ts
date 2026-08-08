import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

/**
 * Working media folders live under public/media so they can be reviewed locally,
 * but they must never ship to production — they contain thousands of raw
 * candidate stills and snippets. Vite copies all of public/ verbatim, so we
 * prune these from the build output after it is written.
 */
// These now live in `_media-workspace/` (outside public/), so they are already
// excluded from the build. This list stays as a safety net in case a working
// folder is ever moved back under public/ during review.
const WORKING_MEDIA = [
  "media/all-candidate-stills",
  "media/all-preview-snippets",
  "media/contact-sheets",
  "media/REVIEW_GALLERY.html",
  "media/EXTRACTION_CANDIDATES.csv",
  "media/PORTFOLIO_CATEGORIES.md",
  "media/PORTFOLIO_NAMING_RECOMMENDATIONS.md",
];

function excludeWorkingMedia(): Plugin {
  return {
    name: "exclude-working-media",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist");
      for (const rel of WORKING_MEDIA) {
        const target = path.join(outDir, rel);
        if (fs.existsSync(target)) {
          fs.rmSync(target, { recursive: true, force: true });
          this.info?.(`excluded from build: ${rel}`);
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "./",
  server: {
    host: "127.0.0.1",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), excludeWorkingMedia()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
