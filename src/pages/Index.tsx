import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, ArrowDown, Film, Megaphone, Palette, Sparkles, Monitor } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { siteData, projects, services, experience, education, skills } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/Marquee";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Film, Megaphone, Palette, Sparkles, Monitor,
};

function RotatingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % siteData.rotatingWords.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="gradient-text inline-block min-w-[140px]">
      {siteData.rotatingWords[idx]}
    </span>
  );
}

export default function Index() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Shady Maged" className="w-full h-full object-cover object-top opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 chip mb-6">
              <span className="glow-dot" />
              {siteData.statusPill}
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-primary-foreground">
              {siteData.name}
            </h1>
            <p className="font-heading text-2xl md:text-3xl mt-6 text-foreground/80">
              <span className="text-primary font-semibold">{siteData.title}</span> — <RotatingWord />
            </p>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">{siteData.heroSubline}</p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              {siteData.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href={siteData.showreelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Film className="w-4 h-4" /> Watch Showreel
              </a>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-heading font-semibold text-sm hover:bg-secondary transition-colors"
              >
                View Work
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/40 text-muted-foreground font-heading text-sm hover:text-foreground transition-colors"
              >
                Download Resume
              </Link>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <a href={`mailto:${siteData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
              <a href={`tel:${siteData.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors"><Phone size={18} /></a>
              <a href={siteData.social.vimeo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={18} /></a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section id="work" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="01" title="Selected Work" subtitle="Curated projects showcasing editing craft and creative vision." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-heading">
              View All Projects <ExternalLink size={14} />
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <Marquee />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="02" title="Services" subtitle="What I bring to the table." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] || Film;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="03" title="Experience" subtitle="Professional journey in video production." />
          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border/50" />
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-16 pb-12 last:pb-0"
              >
                <div className="absolute left-2.5 md:left-4.5 top-1 glow-dot" />
                <div className="glass-card p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold">{exp.role}</h3>
                    <span className="chip">{exp.company}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">•</span> {a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.skills.map((s) => (
                      <span key={s} className="chip text-[10px]">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="04" title="Skills" subtitle="Tools of the trade." />
          <div className="max-w-xl mx-auto space-y-5">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-heading font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="05" title="Education" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {education.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <h3 className="font-heading font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{e.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeader number="06" title="Let's Work Together" subtitle="Got a project in mind? Let's create something amazing." />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${siteData.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" /> Send Email
            </a>
            <a
              href={`tel:${siteData.contact.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-heading font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Me
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/40 text-muted-foreground font-heading text-sm hover:text-foreground transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
