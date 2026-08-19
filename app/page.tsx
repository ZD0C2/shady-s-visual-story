"use client";

import { useEffect, useRef, useState } from "react";

const mediaBase = "/media";

const categories = [
  "All",
  "Documentary & Directing",
  "Motion & 3D",
  "Brand & Commercial",
  "Sports",
  "Visual Design",
  "Social Reels",
  "Digital & YouTube Content",
] as const;

const projects = [
  {
    title: "Ahly Epic",
    category: "Documentary & Directing",
    year: "2024",
    role: "Director, cinematographer & editor",
    description:
      "A three-part feature documentary shaped through first-hand testimony, bespoke interview lighting and patient editorial rhythm.",
    image: `${mediaBase}/thumbnails/documentary-ahly-epic.jpg`,
    video: `${mediaBase}/previews/documentary-ahly-epic.mp4`,
    tone: "warm",
    featured: true,
  },
  {
    title: "El Gohary",
    category: "Documentary & Directing",
    year: "2025",
    role: "Editor & visual storyteller",
    description:
      "Archive, atmosphere and graphic structure woven into a textured football portrait with a distinctly cinematic memory.",
    image: `${mediaBase}/thumbnails/documentary-el-gohary.jpg`,
    video: `${mediaBase}/previews/documentary-el-gohary.mp4`,
    tone: "dark",
    featured: true,
  },
  {
    title: "El Gohary — Archive Cut",
    category: "Documentary & Directing",
    year: "2025",
    role: "Archive editor & motion designer",
    description: "A companion archive study built from historic footage, typographic interruption and a weathered visual language.",
    image: `${mediaBase}/thumbnails/documentary-el-gohary-archive.jpg`,
    video: `${mediaBase}/previews/documentary-el-gohary-archive.mp4`,
    tone: "warm",
    featured: false,
  },
  {
    title: "Juve — The Duping",
    category: "Documentary & Directing",
    year: "2024",
    role: "Writer, editor & motion designer",
    description: "Football history reshaped as a compact motion essay with archive, pacing and a clear editorial argument.",
    image: `${mediaBase}/thumbnails/documentary-juve-duping.jpg`,
    video: `${mediaBase}/previews/documentary-juve-duping.mp4`,
    tone: "silver",
    featured: false,
  },
  {
    title: "Maradona",
    category: "Documentary & Directing",
    year: "2024",
    role: "Editor & visual storyteller",
    description: "A character-led football portrait balancing archive energy with reflective pauses and graphic restraint.",
    image: `${mediaBase}/thumbnails/documentary-maradona.jpg`,
    video: `${mediaBase}/previews/documentary-maradona.mp4`,
    tone: "blue",
    featured: false,
  },
  {
    title: "Vesba Story",
    category: "Documentary & Directing",
    year: "2024",
    role: "Editor & director",
    description: "A documentary story assembled through atmosphere, lived detail and close observational editing.",
    image: `${mediaBase}/thumbnails/documentary-vesba-story.jpg`,
    video: `${mediaBase}/previews/documentary-vesba-story.mp4`,
    tone: "dark",
    featured: false,
  },
  {
    title: "Interview Lighting Study",
    category: "Documentary & Directing",
    year: "2024",
    role: "Director of photography",
    description: "A practical directing study in interview composition, motivated light and cinematic subject separation.",
    image: `${mediaBase}/thumbnails/directing-interview-lighting.jpg`,
    video: `${mediaBase}/previews/directing-interview-lighting.mp4`,
    tone: "dark",
    featured: false,
  },
  {
    title: "Vodafone × StarsClash",
    category: "Brand & Commercial",
    year: "2021",
    role: "Video editor",
    description:
      "A multi-camera branded format with fast reactions, repeatable episode architecture and a bold motion identity.",
    image: `${mediaBase}/thumbnails/commercial-vodafone-starsclash.jpg`,
    video: `${mediaBase}/previews/commercial-vodafone-starsclash.mp4`,
    tone: "red",
    featured: true,
  },
  {
    title: "LeeLoo — Brand Film",
    category: "Brand & Commercial",
    year: "2022",
    role: "Creative director & editor",
    description: "Appetite-led food cinematography meets a 3D architectural reveal of the venue and illuminated brand signage.",
    image: `${mediaBase}/thumbnails/commercial-leeloo.jpg`,
    video: `${mediaBase}/previews/commercial-leeloo.mp4`,
    tone: "warm",
    featured: true,
  },
  {
    title: "Minglings",
    category: "Brand & Commercial",
    year: "2022",
    role: "Editor",
    description: "A vertical-first hospitality promo built around presenter energy, graphic stickers and rapid social pacing.",
    image: `${mediaBase}/thumbnails/commercial-minglings.jpg`,
    video: `${mediaBase}/previews/commercial-minglings.mp4`,
    tone: "warm",
    featured: false,
  },
  {
    title: "Saudi National Day 91",
    category: "Brand & Commercial",
    year: "2021",
    role: "Editor & colourist",
    description: "A cultural campaign film anchored by desert light, heritage imagery and a memorable sand-pour hero shot.",
    image: `${mediaBase}/thumbnails/commercial-saudi-national-day.jpg`,
    video: `${mediaBase}/previews/commercial-saudi-national-day.mp4`,
    tone: "warm",
    featured: false,
  },
  {
    title: "Dr.Job Pro",
    category: "Brand & Commercial",
    year: "2021",
    role: "Editor & motion designer",
    description: "A bilingual product story that reveals platform benefits through clean sequencing and controlled UI motion.",
    image: `${mediaBase}/thumbnails/commercial-drjob-pro.jpg`,
    video: `${mediaBase}/previews/commercial-drjob-pro.mp4`,
    tone: "blue",
    featured: false,
  },
  {
    title: "ZED Talents",
    category: "Brand & Commercial",
    year: "2021",
    role: "Editor & brand-system designer",
    description: "A bilingual visual system made to stay consistent across a large family of youth-football campaign films.",
    image: `${mediaBase}/thumbnails/commercial-zed-talents.jpg`,
    video: `${mediaBase}/previews/commercial-zed-talents.mp4`,
    tone: "blue",
    featured: false,
  },
  {
    title: "The Transfer",
    category: "Motion & 3D",
    year: "2024",
    role: "Motion designer & editor",
    description:
      "A title-led football sequence built from dimensional typography, compositing and deliberate sound-to-frame timing.",
    image: `${mediaBase}/thumbnails/motion-the-transfer.jpg`,
    video: `${mediaBase}/previews/motion-the-transfer.mp4`,
    tone: "silver",
    featured: true,
  },
  {
    title: "3D Title Series",
    category: "Motion & 3D",
    year: "2024",
    role: "Motion designer",
    description: "Dimensional episode titles combining graphic typography, texture, compositing and dramatic light.",
    image: `${mediaBase}/thumbnails/motion-3d-titles.jpg`,
    video: `${mediaBase}/previews/motion-3d-titles.mp4`,
    tone: "silver",
    featured: true,
  },
  {
    title: "Blackout Titles",
    category: "Motion & 3D",
    year: "2024",
    role: "Motion designer",
    description: "A dark title language using interruption, compression and controlled visual noise to build tension.",
    image: `${mediaBase}/thumbnails/motion-blackout-titles.jpg`,
    video: `${mediaBase}/previews/motion-blackout-titles.mp4`,
    tone: "dark",
    featured: false,
  },
  {
    title: "Bunch of Losers",
    category: "Motion & 3D",
    year: "2024",
    role: "Motion designer & editor",
    description: "An expressive animated title treatment that lets personality, timing and typographic attitude lead the frame.",
    image: `${mediaBase}/thumbnails/motion-bunch-of-losers.jpg`,
    video: `${mediaBase}/previews/motion-bunch-of-losers.mp4`,
    tone: "red",
    featured: false,
  },
  {
    title: "ORA Logo",
    category: "Motion & 3D",
    year: "2024",
    role: "Logo animator",
    description: "A concise identity reveal designed around weight, negative space and a satisfying final lockup.",
    image: `${mediaBase}/thumbnails/motion-ora-logo.jpg`,
    video: `${mediaBase}/previews/motion-ora-logo.mp4`,
    tone: "silver",
    featured: false,
  },
  {
    title: "Gold Era",
    category: "Motion & 3D",
    year: "2019",
    role: "Editor & motion designer",
    description: "A polished application identity sequence with metallic type, measured reveals and premium finishing.",
    image: `${mediaBase}/thumbnails/logo-gold-era.jpg`,
    video: `${mediaBase}/previews/logo-gold-era.mp4`,
    tone: "warm",
    featured: false,
  },
  {
    title: "Ali Maâloul Tribute",
    category: "Sports",
    year: "2024",
    role: "Editor & visual designer",
    description:
      "A career tribute cut as memory: match energy, emotional pauses and graphic frames brought into one continuous arc.",
    image: `${mediaBase}/thumbnails/sports-maaloul-tribute.jpg`,
    video: `${mediaBase}/previews/sports-maaloul-tribute.mp4`,
    tone: "red",
    featured: true,
  },
  {
    title: "Class of ’92",
    category: "Sports",
    year: "2024",
    role: "Sports editor",
    description: "A heritage football cut built around collective identity, archive texture and match-day momentum.",
    image: `${mediaBase}/thumbnails/sports-class-92.jpg`,
    video: `${mediaBase}/previews/sports-class-92.mp4`,
    tone: "red",
    featured: false,
  },
  {
    title: "FR Squad 2000",
    category: "Sports",
    year: "2024",
    role: "Editor & motion designer",
    description: "A team-story edit balancing personalities, graphic inserts and a sharp competitive rhythm.",
    image: `${mediaBase}/thumbnails/sports-fr-squad-2000.jpg`,
    video: `${mediaBase}/previews/sports-fr-squad-2000.mp4`,
    tone: "blue",
    featured: false,
  },
  {
    title: "Marmoush vs Mo",
    category: "Sports",
    year: "2024",
    role: "Editor",
    description: "A fast comparative sports story driven by performance beats, confident pacing and visual contrast.",
    image: `${mediaBase}/thumbnails/sports-marmoush-vs-mo.jpg`,
    video: `${mediaBase}/previews/sports-marmoush-vs-mo.mp4`,
    tone: "red",
    featured: false,
  },
  {
    title: "Portrait Retouch",
    category: "Visual Design",
    year: "2024",
    role: "Visual designer",
    description:
      "Editorial image-making that turns raw sports photography into controlled, dramatic campaign-ready frames.",
    image: `${mediaBase}/thumbnails/visual-photo-retouch.jpg`,
    video: `${mediaBase}/previews/visual-photo-retouch.mp4`,
    tone: "blue",
    featured: true,
  },
  {
    title: "SEF × Akon",
    category: "Social Reels",
    year: "2024",
    role: "Social editor",
    description: "A vertical conversation cut shaped for immediate clarity, personality and social-first retention.",
    image: `${mediaBase}/thumbnails/social-sef-akon.jpg`,
    video: `${mediaBase}/previews/social-sef-akon.mp4`,
    tone: "blue",
    featured: false,
  },
  {
    title: "SEF × Mo Gawdat",
    category: "Social Reels",
    year: "2024",
    role: "Social editor",
    description: "A concise thought-leadership reel using intelligent pacing, clean emphasis and precise caption rhythm.",
    image: `${mediaBase}/thumbnails/social-sef-mo-gawdat.jpg`,
    video: `${mediaBase}/previews/social-sef-mo-gawdat.mp4`,
    tone: "dark",
    featured: true,
  },
  {
    title: "SEF × Steven Bartlett",
    category: "Social Reels",
    year: "2024",
    role: "Social editor",
    description: "A premium vertical edit designed to make a strong spoken idea land quickly without visual clutter.",
    image: `${mediaBase}/thumbnails/social-sef-steven-bartlett.jpg`,
    video: `${mediaBase}/previews/social-sef-steven-bartlett.mp4`,
    tone: "dark",
    featured: false,
  },
  {
    title: "Sharjah Hackathon",
    category: "Social Reels",
    year: "2024",
    role: "Event editor",
    description: "A vertical event recap translating a busy live environment into a clear, energetic story arc.",
    image: `${mediaBase}/thumbnails/social-sharjah-hackathon.jpg`,
    video: `${mediaBase}/previews/social-sharjah-hackathon.mp4`,
    tone: "blue",
    featured: false,
  },
  {
    title: "Pavel Nedvěd",
    category: "Digital & YouTube Content",
    year: "2024",
    role: "Writer, editor & motion designer",
    description: "A written football article translated into a motion essay with archive, typography and authored pacing.",
    image: `${mediaBase}/thumbnails/articles-pavel-nedved.jpg`,
    video: `${mediaBase}/previews/articles-pavel-nedved.mp4`,
    tone: "warm",
    featured: false,
  },
  {
    title: "Wessam × Zlatan",
    category: "Digital & YouTube Content",
    year: "2024",
    role: "Writer, editor & motion designer",
    description: "An original football comparison developed from written argument into a punchy visual narrative.",
    image: `${mediaBase}/thumbnails/articles-wessam-zlatan.jpg`,
    video: `${mediaBase}/previews/articles-wessam-zlatan.mp4`,
    tone: "red",
    featured: false,
  },
  {
    title: "Hareef Gaming — FreeFire",
    category: "Digital & YouTube Content",
    year: "2023",
    role: "Editor & motion designer",
    description: "A high-tempo tournament promo built for a competitive gaming audience and fast digital attention.",
    image: `${mediaBase}/thumbnails/commercial-hareef-gaming.jpg`,
    video: `${mediaBase}/previews/commercial-hareef-gaming.mp4`,
    tone: "red",
    featured: false,
  },
];

const disciplines = [
  ["01", "Direct", "Treatment, interview direction, lighting and on-set visual decisions."],
  ["02", "Edit", "Rhythm, narrative architecture and the exact frame where the story turns."],
  ["03", "Design", "Bilingual titles, brand systems, compositing and motion-led identity."],
  ["04", "Finish", "Colour, sound, delivery formats and a polished final master."],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={diagonal ? "arrow diagonal" : "arrow"}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function ProjectCard({ project, index, onOpen }: { project: (typeof projects)[number]; index: number; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const play = () => videoRef.current?.play().catch(() => undefined);
  const pause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <article className={`project-card tone-${project.tone}`}>
      <button
        className="project-media"
        onClick={onOpen}
        onMouseEnter={play}
        onMouseLeave={pause}
        onFocus={play}
        onBlur={pause}
        aria-label={`Play ${project.title}`}
      >
        <img src={project.image} alt="" loading="lazy" />
        <video ref={videoRef} src={project.video} poster={project.image} muted loop playsInline preload="none" aria-hidden="true" />
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="play-mark"><span>Play</span><Arrow diagonal /></span>
      </button>
      <div className="project-copy">
        <p>{project.category}</p>
        <div><h3>{project.title}</h3><span>{project.year}</span></div>
        <p className="project-description">{project.description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [companionPhase, setCompanionPhase] = useState("direct");
  const [viewMode, setViewMode] = useState<"editorial" | "iconic">("editorial");
  const [theme, setTheme] = useState<"light" | "graphite">("light");
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? project.featured : project.category === activeCategory,
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("shady-theme");
    if (savedTheme !== "graphite") return;
    const frame = window.requestAnimationFrame(() => setTheme("graphite"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("shady-theme", theme);
    document.documentElement.style.colorScheme = theme === "graphite" ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    if (!activeProject && !contactOpen && !menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setActiveProject(null);
      setContactOpen(false);
      setMenuOpen(false);
    };
    if (activeProject || contactOpen) document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [activeProject, contactOpen, menuOpen]);

  // Move focus into an opened dialog and restore it to the trigger on close.
  const lastFocused = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!activeProject && !contactOpen) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    const frame = window.requestAnimationFrame(() => dialogRef.current?.focus());
    return () => {
      window.cancelAnimationFrame(frame);
      lastFocused.current?.focus?.();
    };
  }, [activeProject, contactOpen]);

  useEffect(() => {
    const character = characterRef.current;
    if (!character) return;
    const phases = [
      ["top", "direct"],
      ["work", "edit"],
      ["approach", "motion"],
      ["about", "play"],
      ["contact", "think"],
    ] as const;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const phase = phases.find(([id]) => id === visible.target.id)?.[1] ?? "direct";
      setCompanionPhase(phase);
    }, { rootMargin: "-22% 0px -38%", threshold: [0.08, 0.25, 0.5] });
    phases.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const keepOnScreen = () => {
      const box = character.getBoundingClientRect();
      if (box.right > window.innerWidth) character.style.setProperty("--companion-x", `${window.innerWidth - box.width - 12}px`);
      if (box.bottom > window.innerHeight) character.style.setProperty("--companion-y", `${window.innerHeight - box.height - 12}px`);
    };
    window.addEventListener("resize", keepOnScreen);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", keepOnScreen);
    };
  }, []);

  const moveCompanion = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a,button,video,[role='tab'],.project-modal,.contact-desk,.scroll-character")) return;
    const character = characterRef.current;
    if (!character || window.matchMedia("(max-width: 620px)").matches) return;

    const box = character.getBoundingClientRect();
    const nextX = Math.max(8, Math.min(window.innerWidth - box.width - 8, event.clientX - box.width / 2));
    const nextY = Math.max(82, Math.min(window.innerHeight - box.height - 10, event.clientY - box.height + 16));
    const currentX = box.left;
    const currentY = box.top;
    const obstacle = [0.3, 0.5, 0.7].some((progress) => {
      const x = currentX + (nextX - currentX) * progress;
      const y = currentY + (nextY - currentY) * progress + box.height * 0.65;
      const element = document.elementFromPoint(x, y) as HTMLElement | null;
      return Boolean(element && element !== character && element.textContent?.trim() && element.closest("h1,h2,h3,p,a,button,span,.project-card"));
    });

    character.dataset.face = nextX < currentX ? "left" : "right";
    character.classList.remove("walking", "jumping", "celebrating");
    void character.offsetWidth;
    character.classList.add("walking");
    if (obstacle) character.classList.add("jumping");
    character.style.setProperty("--companion-x", `${nextX}px`);
    character.style.setProperty("--companion-y", `${nextY}px`);
    window.setTimeout(() => character.classList.remove("walking", "jumping"), 980);
  };

  const animateCompanion = () => {
    const character = characterRef.current;
    if (!character) return;
    character.classList.remove("celebrating");
    void character.offsetWidth;
    character.classList.add("celebrating");
    window.setTimeout(() => character.classList.remove("celebrating"), 1100);
  };

  const companionAction = () => {
    animateCompanion();
    if (companionPhase === "edit") {
      setViewMode((mode) => mode === "iconic" ? "editorial" : "iconic");
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (companionPhase === "think") {
      setContactOpen(true);
      return;
    }
    const target = companionPhase === "motion" ? "approach" : companionPhase === "play" ? "about" : "work";
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyEmail = async () => {
    const email = "captinshady90@gmail.com";
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const field = document.createElement("textarea");
        field.value = email;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const trackPointer = (event: React.PointerEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${((event.clientX - box.left) / box.width) * 100}%`);
    event.currentTarget.style.setProperty("--my", `${((event.clientY - box.top) / box.height) * 100}%`);
    event.currentTarget.style.setProperty("--px", `${(event.clientX - box.left - box.width / 2) / 45}px`);
    event.currentTarget.style.setProperty("--py", `${(event.clientY - box.top - box.height / 2) / 45}px`);
  };

  return (
    <main className={`site-shell theme-${theme} phase-${companionPhase} ${menuOpen ? "menu-is-open" : ""}`} onClick={moveCompanion}>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Shady Maged home"><span>S</span><span>M</span></a>
        <div className="nav-center"><span>Film</span><i /> <span>Motion</span><i /> <span>Story</span></div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "graphite" : "light")} aria-label={`Switch to ${theme === "light" ? "graphite" : "light"} theme`}>
            <span aria-hidden="true">{theme === "light" ? "◐" : "○"}</span><b>{theme === "light" ? "Graphite" : "Light"}</b>
          </button>
          <button className={`menu-button ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">
            <span>{menuOpen ? "Close" : "Menu"}</span><b /><b />
          </button>
        </div>
      </nav>
      <aside id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-status"><span>Now in frame</span><b>{companionPhase === "edit" ? "Selected work" : companionPhase === "motion" ? "Approach" : companionPhase === "play" ? "About" : companionPhase === "think" ? "Contact" : "Opening frame"}</b></div>
        <div className="menu-links">
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <button className="menu-contact" onClick={() => { setMenuOpen(false); setContactOpen(true); }}>Start a project <Arrow diagonal /></button>
      </aside>

      <section id="top" ref={heroRef} className="hero" onPointerMove={trackPointer}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-kicker"><span>Independent creative</span><span>Cairo · Worldwide</span></div>

        <div className="hero-type" aria-label="Shady Maged — director, editor and motion designer">
          <span className="hero-line line-one">Shady</span>
          <span className="hero-line line-two">Maged</span>
          <span className="hero-line line-three">Direct · Edit · Design</span>
        </div>

        <div className="portrait-stage">
          <div className="portrait-frame">
            <img
              src="/shady-hero-hyperclear.webp"
              alt="Portrait of Shady Maged"
            />
          </div>
          <div className="head-motion" aria-hidden="true">
            <i className="orbit-line orbit-a" />
            <i className="orbit-line orbit-b" />
            <i className="orbit-line orbit-c" />
            <span className="motion-chip chip-direct">01 · DIRECT</span>
            <span className="motion-chip chip-edit">02 · EDIT</span>
            <span className="motion-chip chip-motion">03 · MOTION</span>
            <span className="motion-chip chip-grade">04 · GRADE</span>
            <span className="playhead">▶</span>
            <span className="timecode">00:09:24:16</span>
            <span className="shiny-dot dot-a" />
            <span className="shiny-dot dot-b" />
            <span className="shiny-dot dot-c" />
          </div>
        </div>

        <div className="hero-bottom">
          <p>Editor, director and motion designer building cinematic work from the first idea to the final frame.</p>
          <a href="#work" className="round-link"><span>View work</span><Arrow /></a>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>Scroll to enter</span><i /></div>
      </section>

      <section className="kinetic-strip" aria-label="Creative disciplines">
        <div>
          <span>Direction</span><i>✦</i><span>Film editing</span><i>✦</i><span>Motion design</span><i>✦</i><span>Visual systems</span><i>✦</i>
          <span>Direction</span><i>✦</i><span>Film editing</span><i>✦</i><span>Motion design</span><i>✦</i><span>Visual systems</span><i>✦</i>
        </div>
      </section>

      <section id="work" className="work-section">
        <header className="section-heading reveal-block">
          <p><span>01</span> Selected work</p>
          <h2>Images with a <em>pulse.</em><br />Stories with a point of view.</h2>
          <p className="section-intro">A focused selection across documentary, branded entertainment, sport and motion-led visual design.</p>
        </header>
        <div className="work-library">
          <aside className="work-tabs-wrap" aria-label="Project categories">
            <div className="archive-heading"><p className="category-label">Explore the archive</p><span>{viewMode === "iconic" ? "Overview" : "Editorial"}</span></div>
            <div className="work-tabs" role="tablist" aria-label="Filter Shady Maged's work">
              {categories.map((category, index) => {
                const count = category === "All" ? projects.filter((project) => project.featured).length : projects.filter((project) => project.category === category).length;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={activeCategory === category}
                    aria-controls="project-grid"
                    className={activeCategory === category ? "active" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    <i>{String(index + 1).padStart(2, "0")}</i><span>{category}</span><sup>{String(count).padStart(2, "0")}</sup>
                  </button>
                );
              })}
            </div>
            <div className="view-switch" aria-label="Choose project view">
              <button className={viewMode === "editorial" ? "active" : ""} onClick={() => setViewMode("editorial")} aria-pressed={viewMode === "editorial"}><i />Editorial</button>
              <button className={viewMode === "iconic" ? "active" : ""} onClick={() => setViewMode("iconic")} aria-pressed={viewMode === "iconic"}><i />Iconic overview</button>
            </div>
            <p className="filter-status" aria-live="polite"><b>{filteredProjects.length}</b> projects in view</p>
          </aside>
          <div key={`${activeCategory}-${viewMode}`} id="project-grid" className={`projects-grid view-${viewMode}`} role="tabpanel">
            {filteredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={() => setActiveProject(project)} />)}
          </div>
        </div>
      </section>

      <section id="approach" className="approach-section">
        <div className="approach-title">
          <p><span>02</span> One connected craft</p>
          <h2>From treatment<br />to <em>timeline.</em></h2>
        </div>
        <div className="discipline-list">
          {disciplines.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><Arrow diagonal />
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="manifesto-section">
        <div className="manifesto-media">
          <video src={`${mediaBase}/previews/hero-montage.mp4`} poster={`${mediaBase}/thumbnails/hero-montage.jpg`} autoPlay muted loop playsInline preload="metadata" />
          <span>00:16 — Selected motion</span>
        </div>
        <div className="manifesto-copy">
          <p><span>03</span> About Shady</p>
          <h2>I don’t separate story from design. <em>They should move as one.</em></h2>
          <div className="manifesto-body">
            <p>Shady Maged is a video editor, director and motion designer working across documentary, branded film, sports storytelling and bilingual visual systems.</p>
            <p>His work combines cinematic structure with graphic precision—from lighting a long-form interview to designing the motion language that holds an entire series together.</p>
          </div>
          <div className="stats">
            <div><b>9+</b><span>Years in post-production</span></div>
            <div><b>EN / AR</b><span>Native bilingual delivery</span></div>
            <div><b>End—End</b><span>Creative direction</span></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-orbit" aria-hidden="true"><span>LET’S MAKE THE FRAME MATTER · </span></div>
        <p><span>04</span> Start a project</p>
        <h2>Have a story<br />that needs <em>movement?</em></h2>
        <button className="contact-link" onClick={() => setContactOpen(true)}>
          <span>Let’s talk about it</span><Arrow diagonal />
        </button>
        <div className="contact-meta">
          <span>Cairo · Available worldwide</span>
          <a href="https://vimeo.com/shadyart" target="_blank" rel="noreferrer">Vimeo ↗</a>
          <a href="https://www.facebook.com/shady.maged.9256" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="tel:01275288876">0127 528 8876</a>
        </div>
      </section>

      <div
        ref={characterRef}
        className={`scroll-character phase-${companionPhase}`}
        data-phase={companionPhase}
      >
        <button className="character-avatar" onClick={companionAction} aria-label={companionPhase === "edit" ? "Switch the work view" : companionPhase === "think" ? "Open the contact desk" : "Let little Shady guide this section"}>
          <span className="character-prop" aria-hidden="true" />
          <span className="character-rig" aria-hidden="true">
            <img className="rig-base" src="/shady-3d-thinking.png" alt="" />
            <img className="rig-hands" src="/shady-3d-thinking.png" alt="" />
            <img className="rig-legs" src="/shady-3d-thinking.png" alt="" />
          </span>
        </button>
        <span className="character-bubble"><b>{companionPhase === "think" ? "Ready to make something?" : companionPhase === "edit" ? (viewMode === "iconic" ? "Return to editorial view" : "See every film at once") : companionPhase === "motion" ? "Follow the craft" : companionPhase === "play" ? "Watch the full rhythm" : "Enter the archive"}</b><small>{companionPhase === "think" ? "Open the contact desk — email, copy or call." : companionPhase === "edit" ? "Try the medium Iconic overview." : companionPhase === "motion" ? "Hover each discipline and watch it react." : companionPhase === "play" ? "The montage shows how story and design connect." : "I’ll take you straight to the selected work."}</small></span>
      </div>

      <footer><span>© {new Date().getFullYear()} Shady Maged</span><span>Film · Motion · Story</span><a href="#top">Back to top ↑</a></footer>

      {activeProject && (
        <div ref={dialogRef} tabIndex={-1} className="project-modal" role="dialog" aria-modal="true" aria-label={`${activeProject.title} project video`} onMouseDown={(event) => event.currentTarget === event.target && setActiveProject(null)}>
          <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project">Close <span>×</span></button>
          <div className="modal-stage">
            <video src={activeProject.video} poster={activeProject.image} autoPlay controls playsInline />
            <div className="modal-caption"><div><p>{activeProject.category}</p><h2>{activeProject.title}</h2></div><div><p>{activeProject.role}</p><span>{activeProject.year}</span></div></div>
          </div>
        </div>
      )}

      {contactOpen && (
        <div ref={dialogRef} tabIndex={-1} className="contact-desk" role="dialog" aria-modal="true" aria-labelledby="contact-desk-title" onMouseDown={(event) => event.currentTarget === event.target && setContactOpen(false)}>
          <section>
            <button className="desk-close" onClick={() => setContactOpen(false)} aria-label="Close contact desk">Close <span>×</span></button>
            <p>04 · Contact desk</p>
            <h2 id="contact-desk-title">Let’s give the next story <em>movement.</em></h2>
            <div className="desk-actions">
              <a href="mailto:captinshady90@gmail.com?subject=Project%20enquiry%20for%20Shady%20Maged"><span>Write an email</span><b>captinshady90@gmail.com</b><Arrow diagonal /></a>
              <button onClick={copyEmail}><span>{copied ? "Copied" : "Copy email"}</span><b>{copied ? "Ready to paste" : "One click"}</b><Arrow diagonal /></button>
              <a href="tel:01275288876"><span>Call Shady</span><b>0127 528 8876</b><Arrow diagonal /></a>
            </div>
            <p className="desk-note">For documentaries, branded films, sports stories, motion systems and post-production collaborations.</p>
          </section>
        </div>
      )}
    </main>
  );
}
