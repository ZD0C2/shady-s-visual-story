import { useEffect, useRef, useState, useMemo } from "react";
import ShowreelModal from "@/components/ShowreelModal";
import ProjectModal from "@/components/ProjectModal";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence, LayoutGroup } from "framer-motion";
import { Mail, Phone, ExternalLink, ArrowDown, Film, Megaphone, Palette, Sparkles, Monitor } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { siteData, projects, services, experience, education, skills, categories, about, type Project } from "@/data/site";
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

function PortraitParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-primary/20 blur-3xl animate-[pulse-glow_3s_ease-in-out_infinite]" />
      <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border/40 shadow-[0_0_60px_-10px_hsl(var(--primary)/0.25)]">
        <motion.img
          src={heroBg}
          alt="Shady Maged portrait"
          className="w-full h-full object-cover grayscale-[60%] brightness-90"
          style={{ objectPosition: '10% top', y, scale }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

export default function Index() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
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
                    <ProjectCard project={p} index={i} onClick={setSelectedProject} />
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
                  whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeInOut" } }}
                  className="group glass-card p-6 transition-shadow duration-300 ease-in-out hover:shadow-[0_0_60px_-5px_hsl(var(--primary)/0.35)] hover:border-primary/30"
                  style={{ willChange: "transform" }}
                >
                  <Icon className="w-8 h-8 text-primary mb-4 transition-all duration-300 ease-in-out group-hover:animate-[pulse-glow_1.5s_ease-in-out_infinite] group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                  <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="03" title="About" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Portrait with glow */}
            <PortraitParallax />

            {/* Right — Text & milestones */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">{about.heading}</h3>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {about.milestones.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="glass-card p-4 text-center"
                  >
                    <div className="font-heading text-lg font-bold gradient-text">{m.value}</div>
                    <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <Marquee />

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="05" title="Experience" subtitle="Professional journey in video production." />
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
          <SectionHeader number="06" title="Skills" subtitle="Tools of the trade." />
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
          <SectionHeader number="07" title="Education" />
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
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader number="08" title="Contact" />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — Heading & links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Let's build<br />something <span className="gradient-text">great.</span>
              </h3>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="block text-muted-foreground hover:text-primary transition-colors text-lg mb-6"
              >
                {siteData.contact.email}
              </a>
              <div className="flex items-center gap-5">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/shadymaged", icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )},
                  { label: "Behance", href: "https://behance.net/shadymaged", icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.3.24-2.004.24H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.078-.14 1.44-.42.36-.28.54-.71.54-1.27 0-.31-.06-.57-.174-.78a1.36 1.36 0 00-.46-.5 1.81 1.81 0 00-.67-.28 3.34 3.34 0 00-.79-.08H3.463v3.34h3.082v-.01zm.2 5.58c.3 0 .59-.03.87-.1.28-.07.53-.18.73-.34.21-.16.37-.37.5-.63.12-.27.18-.59.18-.99 0-.78-.22-1.35-.66-1.7-.44-.36-1.03-.54-1.76-.54H3.463v4.29H6.74v.01zM15.452 17.2c.46.44 1.12.66 1.98.66.62 0 1.16-.16 1.6-.47.44-.32.7-.65.78-.98h2.58c-.41 1.28-1.03 2.2-1.85 2.76-.83.56-1.83.83-3.01.83-.82 0-1.56-.13-2.23-.4a4.87 4.87 0 01-1.72-1.14 5.13 5.13 0 01-1.1-1.78c-.26-.7-.39-1.47-.39-2.32 0-.82.14-1.58.41-2.28.27-.7.66-1.3 1.16-1.81a5.3 5.3 0 011.73-1.19c.67-.29 1.39-.43 2.17-.43.88 0 1.65.17 2.31.52.66.34 1.21.82 1.65 1.43.44.6.76 1.3.97 2.1.2.8.28 1.67.22 2.6h-7.7c.05.96.33 1.7.8 2.14v-.01zM18.9 11.58c-.35-.38-.96-.58-1.71-.58-.5 0-.92.09-1.24.26-.33.17-.59.38-.78.63-.2.25-.33.52-.4.82-.08.3-.13.57-.15.82h4.83c-.08-.78-.34-1.36-.7-1.74v-.01zm-3.4-4.4h5.56V8.6h-5.56V7.18z"/></svg>
                  )},
                  { label: "Vimeo", href: siteData.social.vimeo, icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.18 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
                  )},
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — Contact form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${siteData.contact.email}`;
              }}
            >
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    required
                    maxLength={field.type === "email" ? 254 : 100}
                    className="w-full bg-transparent border-b border-border/60 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_2px_12px_-4px_hsl(var(--primary)/0.4)] transition-all duration-300"
                  />
                </div>
              ))}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  maxLength={2000}
                  rows={4}
                  className="w-full bg-transparent border-b border-border/60 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_2px_12px_-4px_hsl(var(--primary)/0.4)] transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" /> Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}
