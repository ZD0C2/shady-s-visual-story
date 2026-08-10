import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "@/data/site";
import { getThumbnail } from "@/data/projectImages";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick?: (project: Project) => void;
}

export default function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPreviewVideo = !!project.previewVideo;
  const thumbnailSrc = getThumbnail(project.slug, project.thumbnail);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`View case study: ${project.title}`}
        className="block group cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleClick(e);
        }}
      >
        <div className="glass-card-hover overflow-hidden transition-shadow duration-300">
          {/* Thumbnail area */}
          <div className="relative aspect-video bg-secondary flex items-center justify-center overflow-hidden">
            {thumbnailSrc ? (
              <motion.img
                src={thumbnailSrc}
                alt={`${project.title} — ${project.category}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ) : (
              <div className="absolute inset-0 bg-secondary" />
            )}

            <AnimatePresence>
              {hasPreviewVideo && hovered && (
                <motion.video
                  ref={videoRef}
                  src={project.previewVideo}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={thumbnailSrc}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="absolute inset-0 w-full h-full object-cover z-[1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>

            {/* Scrim: keeps chips and the play affordance legible over any frame,
                in both themes. Slightly stronger at the top where chips sit. */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/25 to-black/50 group-hover:from-black/45 group-hover:via-black/15 group-hover:to-black/40 transition-colors duration-500" />
            <motion.div
              className="relative z-[3]"
              initial={{ scale: 1, opacity: 0.85 }}
              whileHover={{ scale: 1.15, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black/45 border border-white/30 backdrop-blur-sm">
                <Play className="w-6 h-6 text-white translate-x-[1px]" fill="currentColor" />
              </span>
            </motion.div>
            <span className="absolute top-3 left-3 chip-overlay z-[3] transition-transform duration-300 group-hover:-translate-y-0.5">
              {project.category}
            </span>
            <span className="absolute top-3 right-3 chip-overlay z-[3] transition-transform duration-300 group-hover:-translate-y-0.5">
              {project.year}
            </span>
          </div>
          {/* Info */}
          <div className="p-5">
            <h3 className="font-heading font-semibold text-lg text-foreground transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.summary}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tools.slice(0, 3).map((t) => (
                <span key={t} className="chip text-[10px]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
