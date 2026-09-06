import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Minimize2, AlertTriangle, Play, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project, ProjectSnippet } from "@/data/site";
import { getThumbnail } from "@/data/projectImages";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  /** Called when the viewer picks another project from the "More from this
   *  category" rail. Optional — omit to hide that rail entirely. */
  onSelectProject?: (project: Project) => void;
  /** Other projects to surface as further footage alongside the headline
   *  (typically same-category siblings, current project excluded). */
  related?: Project[];
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  related = [],
}: ProjectModalProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1); // -1 = main video
  const [failed, setFailed] = useState(false);

  /**
   * Sound is opt-in. Browsers block autoplay with sound, so playback always
   * starts muted; the user unmutes with a click. The preference then persists
   * across snippet switches within the session.
   */
  const [soundOn, setSoundOn] = useState(false);
  /** null = not yet known, true/false once metadata has loaded. */
  const [hasAudio, setHasAudio] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = !!project;
  const poster = project ? getThumbnail(project.slug, project.thumbnail) : undefined;
  const snippets = useMemo(() => project?.snippets ?? [], [project]);

  // The currently displayed item: the project's full video, or a chosen snippet.
  const active: ProjectSnippet | null =
    activeIndex >= 0 && snippets[activeIndex] ? snippets[activeIndex] : null;
  const currentSrc = active ? active.src : project?.previewVideo;
  const currentPoster = active ? active.poster ?? poster : poster;
  const currentIsStill = active?.isStill ?? false;

  // Reset to the full video and scroll the info column to the top whenever a
  // different project opens (including hopping over via the related rail).
  useEffect(() => {
    setActiveIndex(-1);
    setFailed(false);
    if (typeof sidebarRef.current?.scrollTo === "function") {
      sidebarRef.current.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [project?.slug]);

  useEffect(() => {
    setFailed(false);
    setHasAudio(null); // re-detect for each new source
  }, [currentSrc]);

  /**
   * Detect whether the loaded file actually carries an audio track, so we can
   * hide the sound control entirely rather than offering a dead button.
   * Uses the non-standard readers where available and falls back to assuming
   * audio exists (the control then simply has no effect on a silent file).
   */
  const detectAudio = useCallback(() => {
    const el = videoRef.current as
      | (HTMLVideoElement & {
          mozHasAudio?: boolean;
          webkitAudioDecodedByteCount?: number;
          audioTracks?: { length: number };
        })
      | null;
    if (!el) return;
    if (typeof el.mozHasAudio === "boolean") return setHasAudio(el.mozHasAudio);
    if (typeof el.webkitAudioDecodedByteCount === "number")
      return setHasAudio(el.webkitAudioDecodedByteCount > 0);
    if (el.audioTracks) return setHasAudio(el.audioTracks.length > 0);
    setHasAudio(true);
  }, []);

  // Keep the element's muted property in sync with user intent. Never force
  // muted=true after the user has opted in.
  useEffect(() => {
    const el = videoRef.current;
    if (el) el.muted = !soundOn;
  }, [soundOn, currentSrc]);

  const toggleSound = useCallback(() => {
    const el = videoRef.current;
    setSoundOn((prev) => {
      const next = !prev;
      if (el) {
        el.muted = !next;
        // Unmuting counts as a user gesture, so this play() is allowed.
        if (next) el.play().catch(() => {});
      }
      return next;
    });
  }, []);

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
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — full-screen watch view`}
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

          {/* Full-screen watch view — video on one side, headline, footage
              and the full write-up on the other. Stacks on small screens. */}
          <motion.div
            className="relative z-10 w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-[#050505]"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Video column */}
            <div className="relative w-full md:flex-[1.4] md:h-full min-h-[38vh] sm:min-h-[46vh] md:min-h-0 bg-black flex items-center justify-center shrink-0">
              <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between gap-2 p-3 sm:p-4 pr-16 md:pr-4 bg-gradient-to-b from-black/75 via-black/30 to-transparent">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70 truncate">
                  {active ? active.title : "Full video"}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  {/* Sound control — hidden entirely when the file has no audio. */}
                  {!currentIsStill && !failed && hasAudio !== false && (
                    <button
                      type="button"
                      onClick={toggleSound}
                      title={soundOn ? "Mute" : "Play with sound"}
                      aria-label={soundOn ? "Mute video" : "Play video with sound"}
                      aria-pressed={soundOn}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-medium backdrop-blur-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] ${
                        soundOn
                          ? "bg-[#C8A96A] text-[#080808] border-[#C8A96A] hover:bg-[#9A7444] hover:border-[#9A7444]"
                          : "bg-white/10 hover:bg-white/20 border-white/25 text-white"
                      }`}
                    >
                      {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                      <span className="hidden sm:inline">{soundOn ? "Mute" : "Play with sound"}</span>
                    </button>
                  )}
                  {!currentIsStill && !failed && hasAudio === false && (
                    <span className="text-[11px] text-white/45 hidden sm:inline">No audio in this clip</span>
                  )}
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
              </div>

              <div
                ref={stageRef}
                className="video-stage relative w-full h-full flex items-center justify-center"
              >
                {failed ? (
                  /* Styled fallback — never a blank frame or a white page. */
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6 relative">
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
                        The rest of the project is still alongside. Try again, or pick another clip.
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
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                ) : (
                  <video
                    key={currentSrc}
                    ref={videoRef}
                    src={currentSrc}
                    poster={currentPoster}
                    controls
                    /* Bound to state, not hardcoded: starts muted so autoplay is
                       permitted, and follows the user's choice thereafter. Full
                       projects play once through rather than looping. */
                    muted={!soundOn}
                    loop={false}
                    autoPlay
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={detectAudio}
                    onError={() => setFailed(true)}
                    aria-label={`${project.title} — full video`}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                )}
              </div>
            </div>

            {/* Info column — headline, footage, and the full write-up sit
                beside the video rather than stacked underneath it. */}
            <div
              ref={sidebarRef}
              className="relative w-full md:flex-1 md:h-full md:overflow-y-auto bg-[#0b0b0b] border-t md:border-t-0 md:border-l border-white/10"
            >
              <div className="p-5 sm:p-7 lg:p-8 pb-16">
                {/* Headline */}
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {project.title}
                  </h1>
                  <span className="chip">{project.year}</span>
                  <span className="chip">{project.category}</span>
                  {project.featured && <span className="chip">Featured</span>}
                </div>

                {project.client && (
                  <p className="mt-2 text-sm text-white/60">
                    <span className="text-white font-medium">Client:</span> {project.client}
                  </p>
                )}
                {project.role && (
                  <p className="mt-1 text-sm text-white/60">
                    <span className="text-white font-medium">Role:</span> {project.role}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* More footage, right alongside the headline: alternate
                    clips/stills from this project, then other work from the
                    same discipline. */}
                {snippets.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-2">
                      More from this project
                    </p>
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
                      <FootageChip
                        label="Full video"
                        poster={poster}
                        selected={activeIndex === -1}
                        onSelect={() => setActiveIndex(-1)}
                      />
                      {snippets.map((s, i) => (
                        <FootageChip
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

                {related.length > 0 && onSelectProject && (
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-2">
                      More from {project.category}
                    </p>
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
                      {related.map((r) => (
                        <FootageChip
                          key={r.slug}
                          label={r.title}
                          meta={r.year}
                          poster={getThumbnail(r.slug, r.thumbnail)}
                          onSelect={() => onSelectProject(r)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* The full write-up. */}
                <div className="mt-8 space-y-6">
                  <InfoSection label="Brief" text={project.brief || project.summary} />
                  <InfoSection label="The Challenge" text={project.problem} />
                  <InfoSection label="Approach" text={project.approach} />
                  <InfoSection label="Breakdown" text={project.breakdown} />
                  <InfoSection label="Result" text={project.result} />
                </div>

                <p className="mt-8 text-xs text-white/40">
                  Muted by default — use the sound control above the video to play with audio.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InfoSection({ label, text }: { label: string; text?: string }) {
  if (!text) return null;
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-1.5">{label}</p>
      <p className="text-sm md:text-[15px] leading-relaxed text-white/75">{text}</p>
    </div>
  );
}

function FootageChip({
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
  selected?: boolean;
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
