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
  "media/new-candidate-stills",
  "media/new-preview-snippets",
  "media/new-contact-sheets",
  "media/REVIEW_GALLERY.html",
  "media/EXTRACTION_CANDIDATES.csv",
  "media/NEW_MEDIA_INVENTORY.csv",
  "media/PORTFOLIO_CATEGORIES.md",
  "media/PORTFOLIO_NAMING_RECOMMENDATIONS.md",
];

function excludeWorkingMedia(): Plugin {
  // Resolve the real output directory rather than assuming "dist" — the outDir
  // can be overridden from the CLI, and hardcoding it silently skipped pruning.
  let outDir = path.resolve(__dirname, "dist");
  return {
    name: "exclude-working-media",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      for (const rel of WORKING_MEDIA) {
        const target = path.join(outDir, rel);
        if (!fs.existsSync(target)) continue;
        try {
          fs.rmSync(target, { recursive: true, force: true });
          this.info?.(`excluded from build: ${rel}`);
        } catch (err) {
          // Never fail a build over cleanup; surface it instead.
          this.warn?.(
            `could not prune ${rel} from the build output (${(err as Error).message}). ` +
              `Remove it manually before deploying.`,
          );
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
