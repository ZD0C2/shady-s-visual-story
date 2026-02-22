import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/site";
import { projectThumbnails } from "@/data/projectImages";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/work/${project.slug}`} className="block group">
        <div className="glass-card-hover overflow-hidden">
          {/* Thumbnail area */}
          <div className="relative aspect-video bg-secondary/50 flex items-center justify-center overflow-hidden">
            {projectThumbnails[project.slug] ? (
              <img src={projectThumbnails[project.slug]} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            )}
            <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
            <Play className="relative z-10 w-10 h-10 text-foreground/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
            <span className="absolute top-3 left-3 chip z-10">{project.category}</span>
            <span className="absolute top-3 right-3 chip z-10">{project.year}</span>
          </div>
          {/* Info */}
          <div className="p-5">
            <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
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
      </Link>
    </motion.div>
  );
}
