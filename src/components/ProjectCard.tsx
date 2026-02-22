import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/site";

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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <Play className="w-10 h-10 text-muted-foreground/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            {/* Category tag */}
            <span className="absolute top-3 left-3 chip">{project.category}</span>
            <span className="absolute top-3 right-3 chip">{project.year}</span>
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
