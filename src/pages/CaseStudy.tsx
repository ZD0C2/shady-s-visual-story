import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/site";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  if (!project) {
    return (
      <main className="pt-24 pb-16 container mx-auto px-4 text-center">
        <p className="text-muted-foreground">Project not found.</p>
        <Link to="/work" className="text-primary text-sm mt-4 inline-block">← Back to Work</Link>
      </main>
    );
  }

  const nextProject = projects[(idx + 1) % projects.length];

  const sections = [
    { label: "Brief", content: project.brief },
    { label: "Problem", content: project.problem },
    { label: "Approach", content: project.approach },
    { label: "Editing Breakdown", content: project.breakdown },
    { label: "Result", content: project.result },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <Link to="/work" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={14} /> Back to Work
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="chip">{project.category}</span>
            <span className="chip">{project.year}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground mt-3">{project.summary}</p>

          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <div><span className="text-muted-foreground">Role:</span> <span className="font-medium">{project.role}</span></div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tools.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="mt-16 space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h2 className="font-heading text-xl font-semibold mb-3 text-primary">{s.label}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery placeholder */}
        <div className="mt-16">
          <h2 className="font-heading text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-video rounded-xl bg-secondary/50 border border-border/30 flex items-center justify-center text-muted-foreground/30 text-sm">
                Still {n}
              </div>
            ))}
          </div>
        </div>

        {/* Next project */}
        <div className="mt-20 border-t border-border/40 pt-10">
          <Link to={`/work/${nextProject.slug}`} className="group flex items-center justify-between glass-card p-6 hover:border-primary/30 transition-colors">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Next Project</p>
              <p className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">{nextProject.title}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </main>
  );
}
