import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Minimize2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/data/site";
import { getThumbnail } from "@/data/projectImages";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const open = !!project;

  // Close on ESC, and lock background scroll while open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      // Let the browser handle ESC while natively fullscreen.
      if (e.key === "Escape" && !document.fullscreenElement) {
        e.stopPropagation();
        onClose();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the dialog for keyboard users.
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open, onClose]);

  // Track fullscreen state so the button icon reflects reality (including
  // when the user exits with the browser's own ESC).
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Leave fullscreen when the modal closes.
  useEffect(() => {
    if (!open && document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  }, [open]);

  const toggleFullscreen = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      el.requestFullscreen?.().catch(() => {});
    }
  }, []);

  const videoUrl = project?.videoUrl;
  const embedUrl = videoUrl
    ? `${videoUrl.replace("vimeo.com/", "player.vimeo.com/video/")}?autoplay=1&title=0&byline=0&portrait=0`
    : null;
  const poster = project ? getThumbnail(project.slug, project.thumbnail) : undefined;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto overscroll-contain p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — project details`}
        >
          {/* Backdrop — click outside to close */}
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full max-w-5xl my-auto"
            initial={{ scale: 0.96, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header controls — always reachable, never overlapping the video */}
            <div className="flex items-center justify-end gap-2 mb-3">
              {(embedUrl || project.previewVideo) && (
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enlarge video to fullscreen"}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-medium backdrop-blur-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">
                    {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                  </span>
                </button>
              )}
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white backdrop-blur-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video stage — object-contain so vertical 9:16 cuts are not cropped.
                Height is viewport-bound so the modal never overflows on mobile. */}
            <div
              ref={stageRef}
              className="video-stage relative rounded-2xl overflow-hidden bg-black ring-1 ring-white/10 shadow-2xl flex items-center justify-center max-h-[58vh] sm:max-h-[70vh]"
            >
              {embedUrl ? (
                <div className="w-full aspect-video">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                </div>
              ) : project.previewVideo ? (
                <video
                  key={project.slug}
                  src={project.previewVideo}
                  poster={poster}
                  controls
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} preview`}
                  className="max-h-[58vh] sm:max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : poster ? (
                <img
                  src={poster}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[58vh] sm:max-h-[70vh] w-auto max-w-full object-contain"
                />
              ) : (
                <div className="w-full aspect-video bg-secondary" />
              )}
            </div>

            {/* Details */}
            <div className="mt-5 rounded-2xl bg-card border border-border p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </h2>
                <span className="chip">{project.year}</span>
                <span className="chip">{project.category}</span>
              </div>

              {project.client && (
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Client:</span> {project.client}
                </p>
              )}

              <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                {project.brief || project.summary}
              </p>

              {project.role && (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Role:</span> {project.role}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground/80">
                Preview clip — muted by default. Use the player controls for sound.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
