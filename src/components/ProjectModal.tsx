import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Minimize2, AlertTriangle, Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project, ProjectSnippet } from "@/data/site";
import { getThumbnail } from "@/data/projectImages";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1); // -1 = main video
  const [failed, setFailed] = useState(false);

  const open = !!project;
  const poster = project ? getThumbnail(project.slug, project.thumbnail) : undefined;
  const snippets = useMemo(() => project?.snippets ?? [], [project]);

  // The currently displayed item: the project's main preview, or a chosen snippet.
  const active: ProjectSnippet | null =
    activeIndex >= 0 && snippets[activeIndex] ? snippets[activeIndex] : null;
  const currentSrc = active ? active.src : project?.previewVideo;
  const currentPoster = active ? active.poster ?? poster : poster;
  const currentIsStill = active?.isStill ?? false;

  // Reset to the main video whenever a different project opens.
  useEffect(() => {
    setActiveIndex(-1);
    setFailed(false);
  }, [project?.slug]);

  useEffect(() => setFailed(false), [currentSrc]);

  // ESC to close + background scroll lock.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.fullscreenElement) {
        e.stopPropagation();
        onClose();
      }
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!open && document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  }, [open]);

  const toggleFullscreen = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    else el.requestFullscreen?.().catch(() => {});
  }, []);

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
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close button — fixed to the viewport so it is always visible,
              including while scrolled down or on small screens. */}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[120] inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white border border-white/30 backdrop-blur-sm shadow-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>

          <motion.div
            className="relative z-10 w-full max-w-5xl my-auto"
            initial={{ scale: 0.96, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-2 mb-3 pr-14">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60 truncate">
                {active ? active.title : "Main preview"}
              </p>
              {!currentIsStill && !failed && (
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enlarge video to fullscreen"}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-medium backdrop-blur-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isFullscreen ? "Exit fullscreen" : "Fullscreen"}</span>
                </button>
              )}
            </div>

            {/* Stage */}
            <div
              ref={stageRef}
              className="video-stage relative rounded-2xl overflow-hidden bg-black ring-1 ring-white/10 shadow-2xl flex items-center justify-center max-h-[52vh] sm:max-h-[66vh]"
            >
              {failed ? (
                /* Styled fallback — never a blank frame or a white page. */
                <div className="w-full aspect-video flex flex-col items-center justify-center gap-3 text-center px-6 relative">
                  {currentPoster && (
                    <img
                      src={currentPoster}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <AlertTriangle className="w-7 h-7 text-white/70" />
                    <p className="text-white font-medium">This clip couldn’t be loaded</p>
                    <p className="text-white/60 text-sm max-w-sm">
                      The rest of the project is still below. Try again, or pick another clip.
                    </p>
                  </div>
                </div>
              ) : currentIsStill ? (
                <img
                  src={currentSrc}
                  alt={active ? `${project.title} — ${active.title}` : project.title}
                  loading="lazy"
                  decoding="async"
                  onError={() => setFailed(true)}
                  className="max-h-[52vh] sm:max-h-[66vh] w-auto max-w-full object-contain"
                />
              ) : (
                <video
                  key={currentSrc}
                  src={currentSrc}
                  poster={currentPoster}
                  controls
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  onError={() => setFailed(true)}
                  aria-label={`${project.title} preview`}
                  className="max-h-[52vh] sm:max-h-[66vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            {/* Related snippets */}
            {snippets.length > 0 && (
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60 mb-2">
                  More from this project
                </p>
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
                  <SnippetChip
                    label="Main preview"
                    poster={poster}
                    selected={activeIndex === -1}
                    onSelect={() => setActiveIndex(-1)}
                  />
                  {snippets.map((s, i) => (
                    <SnippetChip
                      key={s.src}
                      label={s.title}
                      meta={s.duration ?? s.role}
                      poster={s.isStill ? s.src : s.poster}
                      isStill={s.isStill}
                      selected={activeIndex === i}
                      onSelect={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              </div>
            )}

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

function SnippetChip({
  label,
  meta,
  poster,
  isStill,
  selected,
  onSelect,
}: {
  label: string;
  meta?: string;
  poster?: string;
  isStill?: boolean;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group shrink-0 w-36 sm:w-40 snap-start text-left rounded-xl overflow-hidden border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
        selected ? "border-white bg-white/10" : "border-white/20 hover:border-white/50 bg-black/40"
      }`}
    >
      <div className="relative aspect-video bg-black/60">
        {poster ? (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}
        {!isStill && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-7 h-7 rounded-full bg-black/60 border border-white/40 flex items-center justify-center">
              <Play className="w-3 h-3 text-white" fill="currentColor" />
            </span>
          </span>
        )}
      </div>
      <div className="px-2 py-1.5">
        <p className="text-[11px] font-medium text-white truncate">{label}</p>
        {meta && <p className="text-[10px] text-white/55 truncate">{meta}</p>}
      </div>
    </button>
  );
}
