import { useEffect, useRef, useState, useMemo } from "react";
import ShowreelModal from "@/components/ShowreelModal";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence, LayoutGroup } from "framer-motion";
import { Mail, Phone, ExternalLink, ArrowDown, Film, Megaphone, Palette, Sparkles, Monitor } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { siteData, projects, services, experience, education, skills, categories } from "@/data/site";
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

function AnimatedCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(match ? "0" + match[2] : value);

  useEffect(() => {
    if (!match || !inView) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}

function TypeWriter({ text, delay = 0.5 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 30);
    return () => clearTimeout(t);
  }, [started, displayed, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

export default function Index() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [workFilter, setWorkFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    const base = workFilter === "All" ? projects : projects.filter((p) => p.category === workFilter);
    return base.slice(0, 6);
  }, [workFilter]);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main>
      <ShowreelModal open={showreelOpen} onClose={() => setShowreelOpen(false)} videoUrl={siteData.showreelUrl} />
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          <img src={heroBg} alt="Shady Maged" className="w-full h-full object-cover opacity-90" style={{ objectPosition: '10% top' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>

        {/* Film grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30 - Math.random() * 40, 0],
                x: [0, (Math.random() - 0.5) * 20, 0],
                opacity: [0, 0.6 + Math.random() * 0.4, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 chip mb-6"
            >
              <span className="glow-dot" />
              {siteData.statusPill}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="relative font-heading text-4xl md:text-7xl lg:text-8xl font-bold leading-tight text-primary-foreground"
            >
              <span className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full scale-150 pointer-events-none" />
              <span className="relative">{siteData.name}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="font-heading text-xl md:text-3xl mt-6 text-foreground/80"
            >
              <span className="text-primary font-semibold">{siteData.title}</span> — <RotatingWord />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-sm md:text-base text-muted-foreground mt-4 max-w-lg mx-auto"
            >
              <TypeWriter text={siteData.heroSubline} delay={0.6} />
            </motion.p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              {siteData.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                  className="text-center cursor-default"
                >
                  <div className="font-heading text-2xl font-bold gradient-text"><AnimatedCounter value={s.value} /></div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4 mt-8"
            >
              <button
                onClick={() => setShowreelOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Film className="w-4 h-4" /> Watch Showreel
              </button>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-heading font-semibold text-sm hover:bg-secondary hover:border-primary/50 hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                View Work
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/40 text-muted-foreground font-heading text-sm hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                Download Resume
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <a href={`mailto:${siteData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
              <a href={`tel:${siteData.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors"><Phone size={18} /></a>
              <a href={siteData.social.vimeo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={18} /></a>
            </motion.div>
          </div>

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

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setWorkFilter(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  workFilter === c
                    ? "bg-primary text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.4)]"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <LayoutGroup>
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ProjectCard project={p} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="glass-card p-6"
                  style={{ willChange: "transform" }}
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
