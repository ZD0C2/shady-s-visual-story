import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/site";
import { projectThumbnails } from "@/data/projectImages";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const videoUrl = project.videoUrl;
  const embedUrl = videoUrl
    ? videoUrl.replace("vimeo.com/", "player.vimeo.com/video/") + "?autoplay=1&title=0&byline=0&portrait=0"
    : null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-[110] p-3 rounded-full bg-secondary/60 backdrop-blur-sm text-foreground hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <motion.div
            className="relative z-10 w-[90vw] max-w-4xl"
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Video / Thumbnail */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/20 bg-secondary/50">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              ) : projectThumbnails[project.slug] ? (
                <img
                  src={projectThumbnails[project.slug]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
              )}
            </div>

            {/* Details */}
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </h2>
                <span className="chip">{project.year}</span>
                <span className="chip">{project.category}</span>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {project.brief || project.summary}
              </p>

              {project.role && (
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Role:</span> {project.role}
                </p>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
