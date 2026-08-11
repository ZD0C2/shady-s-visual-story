export const siteData = {
  name: "Shady Maged",
  title: "Film · Motion · Story",
  tagline: "Editor. Director. Visual Storyteller.",
  heroSubline:
    "Cinematic edits, documentary stories, branded films, sports content, and motion-led visual experiences.",
  statusPill: "Open for freelance projects",
  // 16s muted loop cut from approved final snippets — covers documentary,
  // directing, motion/3D, sports, brand, social and visual design.
  heroVideo: "/media/previews/hero-montage.mp4",
  heroPoster: "/media/thumbnails/hero-montage.jpg",
  stats: [
    { value: "9+", label: "Years Experience" },
    { value: "7", label: "Disciplines" },
    { value: "EN / AR", label: "Delivery" },
  ],
  contact: {
    phone: "01275288876",
    email: "captinshady90@gmail.com",
    location: "Hadayek El Ahram, Egypt",
  },
  social: {
    facebook: "https://www.facebook.com/shady.maged.9256",
    vimeo: "https://vimeo.com/shadyart",
    // Left blank until confirmed — links render only when a URL is present,
    // so an unverified profile never ships as a dead link.
    linkedin: "",
    behance: "",
  },
  rotatingWords: ["DIRECT", "VISUALIZE", "DESIGN", "EDIT", "COMPOSE", "CREATE"],
  showreelUrl: "https://vimeo.com/shadyart",
};

/** An alternate clip or still belonging to the same project. */
export interface ProjectSnippet {
  title: string;
  src: string;
  /** Poster/thumbnail for the chip and the <video> poster attribute. */
  poster?: string;
  /** Human-readable duration, e.g. "0:08". */
  duration?: string;
  /** What this clip demonstrates, e.g. "Title design". */
  role?: string;
  /** Set when the item is a still image rather than a video. */
  isStill?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  summary: string;
  role: string;
  tools: string[];
  thumbnail?: string;
  previewVideo?: string;
  /** Alternate clips/stills shown as "More from this project" in the modal. */
  snippets?: ProjectSnippet[];
  featured?: boolean;
  brief: string;
  problem: string;
  approach: string;
  breakdown: string;
  result: string;
  videoUrl?: string;
  images?: string[];
}

const P = "/media/previews";
const T = "/media/thumbnails";

export const projects: Project[] = [
  /* ---------------- Brand & Commercial ---------------- */
  {
    slug: "vodafone-stars-clash",
    title: "Vodafone × StarsClash",
    category: "Brand & Commercial",
    year: "2021",
    client: "Vodafone / StarsClash",
    featured: true,
    summary:
      "Branded studio entertainment show pitting celebrity guests against each other across sports challenges, cut with a bold graphic identity.",
    role: "Video Editor",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    previewVideo: `${P}/commercial-vodafone-starsclash.mp4`,
    thumbnail: `${T}/commercial-vodafone-starsclash.jpg`,
    brief:
      "Cut a recurring branded show format for Vodafone in which two guests compete across in-studio sports challenges.",
    problem:
      "Multi-camera studio footage had to stay energetic across a long runtime while keeping the brand's visual identity present in every segment.",
    approach:
      "Built a repeatable episode structure — cold open, contestant name cards, challenge blocks, reaction beats — so each episode felt consistent and on-brand.",
    breakdown:
      "Hand-painted brush-stroke name cards for each contestant, animated scoring accents on the dartboard and hoop beats, and reaction cutaways timed to the action.",
    result:
      "Delivered episode cuts with a consistent, reusable graphic language across the format.",
  },
  {
    slug: "leeloo",
    title: "LeeLoo — Hospitality Brand Film",
    category: "Brand & Commercial",
    year: "2022",
    client: "LeeLoo Café & Restaurant",
    summary:
      "Appetite-driven food cinematography paired with a 3D architectural visualisation of the venue and its illuminated signage.",
    role: "Creative Director & Editor",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    previewVideo: `${P}/commercial-leeloo.mp4`,
    thumbnail: `${T}/commercial-leeloo.jpg`,
    brief: "Capture the atmosphere and menu of a premium café and restaurant.",
    problem:
      "The venue needed to feel warm and worth travelling for, using both live food footage and unbuilt/architectural visuals.",
    approach:
      "Split-frame food montages for appetite appeal, cut against a 3D walkthrough of the venue exterior at dusk.",
    breakdown:
      "Warm colour grade, rack-focus transitions between dishes, and a 3D render sequence resolving on the illuminated logo.",
    result:
      "A complete brand kit — intro, location film, snippets and outro — reusable across the venue's channels.",
  },
  {
    slug: "minglings",
    title: "Minglings — Vertical Promo",
    category: "Brand & Commercial",
    year: "2022",
    client: "Minglings Café & Restaurant",
    summary:
      "Vertical-first promo built for social feeds, using presenter-led delivery and graphic sticker accents.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-minglings.mp4`,
    thumbnail: `${T}/commercial-minglings.jpg`,
    brief: "Produce a social-native promo for a café and restaurant brand.",
    problem: "The message had to land in a vertical frame within the first seconds.",
    approach: "Presenter-led framing with graphic accents keeping the eye moving.",
    breakdown: "9:16 framing, animated sticker elements, punchy cut rhythm.",
    result: "A promo delivered in multiple lengths for feed and story placements.",
  },
  {
    slug: "saudi-national-day",
    title: "Saudi National Day 91",
    category: "Brand & Commercial",
    year: "2021",
    summary:
      "Cultural campaign film built on desert-sunset cinematography, with a sand-pour hero shot as its centrepiece.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-saudi-national-day.mp4`,
    thumbnail: `${T}/commercial-saudi-national-day.jpg`,
    brief: "Create a national-day film with a sense of landscape, heritage and scale.",
    problem: "National campaigns are crowded; the film needed a single memorable image.",
    approach:
      "Anchored the edit on a slow sand-pour against golden-hour desert light, letting the landscape carry the emotion.",
    breakdown: "Golden colour grade, unhurried pacing, Arabic typography treatments.",
    result: "Delivered in multiple aspect variants for placement across formats.",
  },
  {
    slug: "drjob-pro",
    title: "Dr.Job Pro",
    category: "Brand & Commercial",
    year: "2021",
    client: "Dr.Job Pro",
    summary:
      "Product promo for a recruitment platform, delivered in both English and Arabic versions.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-drjob-pro.mp4`,
    thumbnail: `${T}/commercial-drjob-pro.jpg`,
    brief: "Explain a recruitment product clearly and quickly.",
    problem: "Platform features needed to be legible without a heavy voiceover load.",
    approach: "Motion-graphic sequencing that reveals one benefit at a time.",
    breakdown: "Bilingual text treatments, UI motion, consistent pacing across versions.",
    result: "Multiple language and length variants from a single system.",
  },
  {
    slug: "hareef-gaming",
    title: "Hareef Gaming — FreeFire",
    category: "Digital & YouTube Content",
    year: "2023",
    client: "Hareef Gaming",
    summary:
      "Gaming tournament promo with an energetic motion package aimed at a competitive-play audience.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-hareef-gaming.mp4`,
    thumbnail: `${T}/commercial-hareef-gaming.jpg`,
    brief: "Promote a FreeFire gaming event to a young, competitive audience.",
    problem: "Gaming audiences scroll fast and expect high-tempo motion.",
    approach: "Aggressive cut rhythm synced to motion-graphic hits.",
    breakdown: "Animated typography, prize callouts, gameplay-driven pacing.",
    result: "An 85-second promo package delivered for the campaign.",
  },

  /* ---------------- Documentary & Directing (2026 additions) ---------------- */
  {
    slug: "ahly-epic",
    title: "Ahly Epic — Three-Part Documentary",
    category: "Documentary & Directing",
    year: "2024",
    featured: true,
    summary:
      "A three-part feature documentary, roughly five and a half hours in total, built on studio interviews with a bespoke lighting design for every subject.",
    role: "Director, Cinematographer & Editor",
    tools: ["Camera", "Lighting", "Premiere Pro", "DaVinci Resolve", "After Effects"],
    previewVideo: `${P}/documentary-ahly-epic.mp4`,
    thumbnail: `${T}/documentary-ahly-epic.jpg`,
    brief:
      "Tell a club's story across three feature-length parts, carried by first-hand testimony.",
    problem:
      "A long interview documentary risks visual monotony — a dozen people in the same chair for five hours will flatten unless each is given a reason to look different.",
    approach:
      "Designed a distinct lighting setup per subject rather than one house look. Fourteen shot setups, each with its own key placement and colour separation — deep blue rim on one, warm amber wrap on another, cool magenta on a third — so the film changes register as the testimony changes.",
    breakdown:
      "Low-key studio setups against negative fill, per-subject colour separation, controlled falloff, cutaway inserts of hands and gesture, and a graded frame library used to keep all three parts consistent.",
    result:
      "Three parts plus a teaser, with a director's frame library of over 470 graded stills — the largest and most sustained directing work in the portfolio.",
  },
  {
    slug: "el-gohary-prime-suspect",
    title: "المتهم الأول — The Prime Suspect",
    category: "Documentary & Directing",
    year: "2026",
    featured: true,
    summary:
      "Investigative football documentary on Mahmoud El Gohary and the 5–1 defeat, told through animated newspaper archives and editorial typography.",
    role: "Director, Editor & Motion Designer",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    previewVideo: `${P}/documentary-el-gohary-archive.mp4`,
    thumbnail: `${T}/documentary-el-gohary-archive.jpg`,
    brief:
      "Re-open a defining moment in Egyptian football history and ask who carried the blame.",
    problem:
      "The story survives mainly as decades-old newspaper print — text-heavy source material with no usable footage, which resists being made cinematic.",
    approach:
      "Treated the archive as the narrative spine: newspaper spreads animated with a moving camera, and progressive highlight callouts that lead the eye through dense Arabic print exactly in step with the narration.",
    breakdown:
      "Animated newspaper spreads, multi-colour highlight tracking, match-cut title reveals, page-turn and paper-texture simulation, Arabic editorial typography.",
    result:
      "A long-form Arabic documentary built almost entirely from print archive.",
  },

  /* ---------------- Motion & 3D (football subjects, motion-design craft) ---------------- */
  {
    slug: "el-gohary-3d-environments",
    title: "The Prime Suspect — 3D Environments",
    category: "Motion & 3D",
    year: "2026",
    summary:
      "Cinematic 3D environments built for the El Gohary documentary: a pinned evidence board strung with red thread, a shuttered ahwa at dawn, and a rain-soaked stadium holding the 5–1 scoreboard.",
    role: "Motion Designer & 3D Artist",
    tools: ["After Effects", "Cinema 4D", "Photoshop", "Element 3D"],
    previewVideo: `${P}/documentary-el-gohary.mp4`,
    thumbnail: `${T}/documentary-el-gohary.jpg`,
    brief:
      "Give a print-archive documentary a physical world for its camera to move through.",
    problem:
      "Archive-only storytelling has nowhere to put a camera. Without built space, the film would stay flat on the page.",
    approach:
      "Constructed sets rather than backgrounds — an investigation room, a café at first light, an empty stadium in rain — each lit and dressed so a moving camera reveals information the way a scene would.",
    breakdown:
      "Volumetric light passes, red-thread evidence rigging, rain and haze simulation, practical-matched lighting, depth-of-field camera moves, scoreboard and signage integration.",
    result:
      "A set of reusable 3D environments that carry the film's key beats and title moments.",
  },
  {
    slug: "maaloul-tribute",
    title: "Ali Maâloul — Career Tribute",
    category: "Motion & 3D",
    year: "2025",
    summary:
      "Career-retrospective design piece for Ali Maâloul, built from layered 3D composites: floating screens of career moments, trophy montages and filmstrip sequences.",
    role: "Motion Designer & Editor",
    tools: ["After Effects", "Photoshop", "Cinema 4D"],
    previewVideo: `${P}/sports-maaloul-tribute.mp4`,
    thumbnail: `${T}/sports-maaloul-tribute.jpg`,
    brief:
      "Celebrate a full club-and-country career in a single design-led sequence.",
    problem:
      "A career spanning Sfaxien, Al Ahly and Tunisia had to be legible at a glance without becoming a highlights reel.",
    approach:
      "Arranged career moments as floating screens and filmstrip frames inside a lit stadium environment, so the viewer reads the span of a career spatially.",
    breakdown:
      "Multi-layer photo composites, volumetric stadium lighting, camera moves through 3D screen arrays, trophy montages and Arabic title treatments.",
    result:
      "A tribute package delivered in several cuts and design variants.",
  },

  {
    slug: "zed-talents",
    title: "Zed Talents — Visual System",
    category: "Sports",
    year: "2022",
    client: "ZED FC × Decathlon × Sawiris Foundation",
    featured: true,
    summary:
      "A bilingual visual system for a football talent-discovery platform — applied consistently across roughly 200 films, plus app-UI motion and campaign cutdowns.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    previewVideo: `${P}/commercial-zed-talents.mp4`,
    thumbnail: `${T}/commercial-zed-talents.jpg`,
    brief:
      "Build the video language for a platform scouting footballers aged 8–18, delivered in collaboration with Decathlon and the Sawiris Foundation.",
    problem:
      "Hundreds of drill films across four age groups and multiple stages had to feel like one product, in two languages, without re-designing each film.",
    approach:
      "Designed a template system rather than one-off edits: a bilingual lower-third pattern (English and Arabic), a drill taxonomy by skill and age stage, and locked brand furniture that could be applied at volume.",
    breakdown:
      "Bilingual titles such as 'Heading / الضربة الرأسية' and 'Agility & Speed / سرعة الحركة'; animated app-UI walkthroughs for registration and stage progression; mainsell film, player-story teasers and social cutdowns built from the same kit.",
    result:
      "A consistent system spanning the drill library, campaign films and platform UI — the largest single body of work in the archive.",
  },

  /* ---------------- Motion & 3D ---------------- */
  {
    slug: "the-transfer",
    title: "The Transfer",
    category: "Motion & 3D",
    year: "2025",
    featured: true,
    summary:
      "Football-poster motion design series — high-resolution composites animated with camera moves, light and type.",
    role: "Motion Designer",
    tools: ["After Effects", "Photoshop", "Cinema 4D"],
    previewVideo: `${P}/motion-the-transfer.mp4`,
    thumbnail: `${T}/motion-the-transfer.jpg`,
    brief: "Turn still football compositions into moving pieces with cinematic depth.",
    problem: "Static posters lose impact in motion feeds without added dimension.",
    approach: "Parallax camera moves through layered composites, with type as a design element.",
    breakdown: "Multi-pass compositing, lighting effects, animated typography.",
    result: "A repeatable series format extended across several editions.",
  },
  {
    slug: "title-sequences",
    title: "Title Sequences & Intros",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "Cinematic title treatments, logo stings and intro/outro packages built for reuse across channels.",
    role: "Motion Designer",
    tools: ["After Effects", "Premiere Pro"],
    previewVideo: `${P}/motion-blackout-titles.mp4`,
    thumbnail: `${T}/motion-blackout-titles.jpg`,
    brief: "Create opening and closing furniture for recurring content formats.",
    problem: "Channels needed consistent, ownable openings that survive repetition.",
    approach: "Restrained typographic treatments with strong contrast and clean motion.",
    breakdown: "Blackout title builds, light-driven reveals, matched intro/outro pairs.",
    result: "A reusable title kit applied across multiple series.",
  },
  {
    slug: "3d-title-series",
    title: "3D Title Series",
    category: "Motion & 3D",
    year: "2025",
    summary:
      "Episodic 3D kinetic-typography treatments set inside a cinematic night scene, built as a repeatable series format.",
    role: "Motion Designer",
    tools: ["After Effects", "Element 3D", "Photoshop"],
    previewVideo: `${P}/motion-3d-titles.mp4`,
    thumbnail: `${T}/motion-3d-titles.jpg`,
    brief: "Give an explainer series a title system with real physical presence.",
    problem:
      "Flat text overlays disappear against a busy live-action plate; each episode still had to feel like part of one set.",
    approach:
      "Extruded 3D type placed inside the scene — lit by the same practicals, catching the same haze — so titles sit in the world rather than on top of it.",
    breakdown:
      "Extruded typography, scene-matched lighting and reflections, depth-of-field integration, consistent colour language across episodes.",
    result: "A reusable title system applied across multiple episodes.",
  },
  {
    slug: "a-bunch-of-losers",
    title: "A Bunch of Losers",
    category: "Visual Design",
    year: "2025",
    summary:
      "Editorial motion piece built from high-resolution composites, pairing archive imagery with animated type.",
    role: "Motion Designer",
    tools: ["After Effects", "Photoshop"],
    previewVideo: `${P}/motion-bunch-of-losers.mp4`,
    thumbnail: `${T}/motion-bunch-of-losers.jpg`,
    brief: "Give a written football story a visual form.",
    problem: "Text-led stories need visual rhythm to hold attention.",
    approach: "Treated the composition as a moving page — type, texture and imagery in layers.",
    breakdown: "5K composites, paper and print textures, kinetic typography.",
    result: "A motion essay format bridging the writing and design work.",
  },

  /* ---------------- Documentary & Directing ---------------- */
  {
    slug: "juve-duping",
    title: "Juve Duping",
    category: "Documentary & Directing",
    year: "2024",
    summary:
      "Long-form narrative documentary shot in 4K with a noir visual treatment — directed, lit and cut in-house.",
    role: "Director / DP / Editor",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    previewVideo: `${P}/documentary-juve-duping.mp4`,
    thumbnail: `${T}/documentary-juve-duping.jpg`,
    brief: "Tell a long-form football story with the visual language of a narrative film.",
    problem:
      "Documentary storytelling often defaults to talking heads; this needed to feel directed.",
    approach:
      "Staged the narrator in a controlled, low-key set with hard practical light, shooting in 4K for reframing latitude in the edit.",
    breakdown:
      "Noir lighting design, deliberate framing and blocking, archive integration, and a paced 12-minute cut.",
    result:
      "A 12-minute 4K master that demonstrates directing, cinematography and editing in one piece.",
  },
  {
    slug: "interview-lighting",
    title: "Interview Lighting Workflow",
    category: "Documentary & Directing",
    year: "2024",
    summary:
      "Multi-camera 4K interview setups with a deliberate low-key lighting design — blue and amber separation, controlled falloff.",
    role: "Director / DP",
    tools: ["Camera", "Lighting", "DaVinci Resolve"],
    previewVideo: `${P}/directing-interview-lighting.mp4`,
    thumbnail: `${T}/directing-interview-lighting.jpg`,
    brief: "Build a repeatable interview look that feels cinematic rather than corporate.",
    problem: "Standard interview lighting is flat and forgettable.",
    approach:
      "Low-key key placement with cool background separation and warm practical accents, framed for multi-camera coverage.",
    breakdown: "Two 4K workflow setups, graded stills library, consistent colour treatment.",
    result: "A house interview look reusable across documentary and brand projects.",
  },
  {
    slug: "documentary-teaser",
    title: "Documentary Teaser",
    category: "Documentary & Directing",
    year: "2024",
    summary:
      "Long-form teaser cut built to establish tone and hold anticipation across its runtime.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/documentary-teaser.mp4`,
    thumbnail: `${T}/documentary-teaser.jpg`,
    brief: "Introduce a documentary project without giving away its story.",
    problem: "Teasers must create curiosity while withholding resolution.",
    approach: "Tone-first assembly, leading with atmosphere over exposition.",
    breakdown: "Extended teaser cut with layered sound and paced reveals.",
    result: "A teaser master delivered alongside a shorter cutdown.",
  },
  {
    slug: "vesba-story",
    title: "Vesba Story",
    category: "Documentary & Directing",
    year: "2025",
    summary: "Narrative brand story told in a documentary register.",
    role: "Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    previewVideo: `${P}/documentary-vesba-story.mp4`,
    thumbnail: `${T}/documentary-vesba-story.jpg`,
    brief: "Tell a story-led brand piece with documentary pacing.",
    problem: "Brand stories can feel like ads; this needed to feel observed.",
    approach: "Documentary grammar applied to branded material.",
    breakdown: "Full HD master, paced narrative structure.",
    result: "A long-form story piece delivered as a finished master.",
  },
  {
    slug: "maradona",
    title: "Diego Maradona — The Legend",
    category: "Documentary & Directing",
    year: "2020",
    summary:
      "Long-form tribute documentary assembled from archive footage and driven by narrative structure.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/documentary-maradona.mp4`,
    thumbnail: `${T}/documentary-maradona.jpg`,
    brief: "Build a tribute film from historic football archive.",
    problem: "Archive-only edits risk becoming compilations rather than stories.",
    approach: "Structured the material into acts with rising emotional stakes.",
    breakdown: "Archive restoration, pacing, music-led sequencing.",
    result: "A six-minute tribute cut.",
  },

  /* ---------------- Social Reels ---------------- */
  {
    slug: "sef-speaker-reels",
    title: "SEF Speaker Reels",
    category: "Social Reels",
    year: "2023",
    client: "Sharjah Entrepreneurship Festival",
    featured: true,
    summary:
      "A repeatable vertical teaser format for festival speakers — including Mo Gawdat, Akon, Steven Bartlett, Ali Abdaal and Justin Baldoni.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-sef-mo-gawdat.mp4`,
    thumbnail: `${T}/social-sef-mo-gawdat.jpg`,
    brief:
      "Turn full-length festival talks into vertical teasers that work as standalone social posts.",
    problem:
      "Dozens of speakers needed individual teasers that still read as one festival identity.",
    approach:
      "Locked a format — hook line, styled captions, festival furniture, consistent runtime — then applied it across the speaker roster.",
    breakdown:
      "9:16 reframing, emphasis-styled caption animation, festival branding, roughly 58-second cuts.",
    result:
      "A speaker teaser library covering the festival programme with a single consistent look.",
  },

  /* ---------------- Digital & YouTube Content ---------------- */
  {
    slug: "chatgpt-hackathon",
    title: "ChatGPT Hackathon — Sharjah",
    category: "Digital & YouTube Content",
    year: "2023",
    client: "Sharjah Entrepreneurship Festival / SHERAA",
    summary:
      "Vertical event recap for an AI hackathon, closing on the event lockup and a sold-out card.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-sharjah-hackathon.mp4`,
    thumbnail: `${T}/social-sharjah-hackathon.jpg`,
    brief: "Recap a tech hackathon for social distribution.",
    problem:
      "Event recaps must convey energy and scale quickly, for an audience that wasn't there.",
    approach:
      "Fast assembly of participation moments, resolving on the event's brand lockup as the payoff.",
    breakdown:
      "Animated logo intro with alpha, kinetic captions, four cut versions delivered from 31s to 54s.",
    result:
      "A recap delivered in multiple lengths; the shortest version closes on the hackathon lockup.",
  },

  /* ---------------- Visual Design / Motion ---------------- */
  {
    slug: "photo-retouch",
    title: "Photo Retouching & Cinematic Grade",
    category: "Visual Design",
    year: "2025",
    summary:
      "Before-and-after retouching: press and match photography regraded into a consistent cinematic look — subject isolated in colour, surroundings cooled and quietened.",
    role: "Retoucher & Colourist",
    tools: ["Photoshop", "Lightroom", "Camera Raw"],
    previewVideo: `${P}/visual-photo-retouch.mp4`,
    thumbnail: `${T}/visual-photo-retouch.jpg`,
    brief:
      "Turn ordinary match and press frames into images that carry a film's weight.",
    problem:
      "Raw sports photography is busy and evenly lit — crowds, advertising boards and daylight all compete with the subject.",
    approach:
      "Held the subject's colour and let everything behind it fall away: desaturated and cooled surroundings, deepened contrast, controlled vignette, cleaned distractions. The same grade language applied across hundreds of frames so the set reads as one body of work.",
    breakdown:
      "Selective colour isolation, background desaturation and tone-mapping, blemish and distraction removal, film-grade curves, vignette and grain.",
    result:
      "A retouch library of roughly 500 images, each kept alongside its original for direct comparison.",
  },
  {
    slug: "ora-identity",
    title: "Ora — Identity in Motion",
    category: "Visual Design",
    year: "2022",
    client: "Ora",
    summary:
      "Logo animation suite and interface preloaders, delivered across colourways, formats and alpha variants.",
    role: "Motion Designer",
    tools: ["After Effects", "Illustrator"],
    previewVideo: `${P}/motion-ora-logo.mp4`,
    thumbnail: `${T}/motion-ora-logo.jpg`,
    brief: "Bring a brand identity into motion for digital products.",
    problem:
      "Identity motion has to survive being seen constantly — restraint matters more than spectacle.",
    approach:
      "Built four shape-animation concepts, then developed the selected direction into a full preloader set.",
    breakdown:
      "Multiple colourways (off-white, grey, coffee), transparent and alpha exports, delivered as MOV, GIF and MP4 for different implementation contexts.",
    result:
      "A complete identity-motion package covering brand animation and product loading states.",
  },
  {
    slug: "gold-era",
    title: "Gold Era — App Identity",
    category: "Motion & 3D",
    year: "2022",
    client: "Gold Era",
    summary:
      "Identity animation and product promo for a gold-investment app — particle logo reveal with Arabic typography and trading-UI motion.",
    role: "Motion Designer & Editor",
    tools: ["After Effects", "Premiere Pro", "Element 3D"],
    previewVideo: `${P}/logo-gold-era.mp4`,
    thumbnail: `${T}/logo-gold-era.jpg`,
    brief: "Launch a gold-investment application with a premium identity animation.",
    problem:
      "Financial products need to feel trustworthy and premium, not gimmicky.",
    approach:
      "Used gold as the literal material of the animation — particle bursts and bullion resolving into the logo mark.",
    breakdown:
      "Particle logo reveal, 3D device mockups, animated trading charts, Arabic headline typography.",
    result:
      "A launch package spanning identity animation and in-app product demonstration.",
  },

  /* ---------------- Sports & Digital Editorial ---------------- */
  {
    slug: "fr-squad-2000",
    title: "FR Squad 2000",
    category: "Sports",
    year: "2024",
    summary:
      "Long-form football retrospective built from archive footage with a strong graphic layer.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-fr-squad-2000.mp4`,
    thumbnail: `${T}/sports-fr-squad-2000.jpg`,
    brief: "Revisit a historic squad through archive and design.",
    problem: "Archive football material needs structure to become a story.",
    approach: "Chapter-based edit with a consistent graphic identity.",
    breakdown: "Player introductions, animated typography, match-action pacing.",
    result: "A 76-second final cut alongside an extended version.",
  },
  {
    slug: "class-92",
    title: "Class 92",
    category: "Sports",
    year: "2023",
    summary: "Short-form football history piece on a famous generation of players.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-class-92.mp4`,
    thumbnail: `${T}/sports-class-92.jpg`,
    brief: "Compress a football era into a short, sharp edit.",
    problem: "Nostalgia pieces need pace to avoid sentimentality.",
    approach: "Tight rhythm, archive-led, graphic punctuation.",
    breakdown: "Archive grading, kinetic type, music-driven cuts.",
    result: "Delivered in two lengths.",
  },
  {
    slug: "marmoush-vs-mo",
    title: "Marmoush vs Mo",
    category: "Sports",
    year: "2025",
    summary: "Head-to-head player comparison built as a fast graphic-led edit.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-marmoush-vs-mo.mp4`,
    thumbnail: `${T}/sports-marmoush-vs-mo.jpg`,
    brief: "Compare two players in a format built for social.",
    problem: "Comparison content must be instantly legible.",
    approach: "Split framing and animated stat treatments.",
    breakdown: "Versus graphics, match action, rapid cutting.",
    result: "A short-form format delivered in two scene variants.",
  },
  {
    slug: "wessam-zlatan",
    title: "Wessam × Zlatan",
    category: "Digital & YouTube Content",
    year: "2024",
    summary:
      "Written football story adapted into a designed motion essay with archive and typography.",
    role: "Writer, Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    previewVideo: `${P}/articles-wessam-zlatan.mp4`,
    thumbnail: `${T}/articles-wessam-zlatan.jpg`,
    brief: "Turn a written football article into a watchable piece.",
    problem: "Long-form writing doesn't automatically translate to video.",
    approach: "Designed the article as a moving editorial layout.",
    breakdown: "Typographic layouts, archive integration, paced reveals.",
    result: "A 90-second motion essay from an original written piece.",
  },
  {
    slug: "pavel-nedved",
    title: "Pavel Nedvěd",
    category: "Digital & YouTube Content",
    year: "2025",
    summary:
      "Motion essay on a football figure, combining original writing with designed archive treatments.",
    role: "Writer, Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    previewVideo: `${P}/articles-pavel-nedved.mp4`,
    thumbnail: `${T}/articles-pavel-nedved.jpg`,
    brief: "Profile a player through writing and design together.",
    problem: "Player profiles need a distinct voice to stand out.",
    approach: "Editorial layout language applied to motion.",
    breakdown: "Highlighted text treatments, archive photography, layered composites.",
    result: "One of a continuing series of motion essays.",
  },
];


/**
 * Alternate clips and stills per project, shown as "More from this project"
 * inside the modal. Kept in a map rather than inline so the project objects
 * stay readable. Every path points at a shipped folder under /public/media.
 */
const S = "/media/final-selected-stills";
const PRJ = "/media/projects";

const projectSnippets: Record<string, ProjectSnippet[]> = {
  "vodafone-stars-clash": [
    { title: "Extended cut", src: `${PRJ}/starsclash-preview.mp4`, poster: `${T}/commercial-vodafone-starsclash.jpg`, duration: "0:28", role: "Full sequence" },
  ],
  "ahly-epic": [
    { title: "Sayed Abdel Hafiz setup", src: `${S}/ahly-epic-shot_10.jpg`, isStill: true, role: "Lighting design" },
    { title: "Amber wrap setup", src: `${S}/ahly-epic-shot_08.jpg`, isStill: true, role: "Lighting design" },
    { title: "Blue rim setup", src: `${S}/ahly-epic-shot_02.jpg`, isStill: true, role: "Lighting design" },
    { title: "Red key setup", src: `${S}/ahly-epic-shot_05.jpg`, isStill: true, role: "Lighting design" },
    { title: "Gesture inserts", src: `${S}/ahly-epic-hands.jpg`, isStill: true, role: "Cutaway coverage" },
    { title: "Profile setup", src: `${S}/ahly-epic-shot_12.jpg`, isStill: true, role: "Lighting design" },
  ],
  "el-gohary-prime-suspect": [
    { title: "Evidence board", src: `${S}/elgohary-title-card.jpg`, isStill: true, role: "Title design" },
    { title: "Fall of the Pharaoh", src: `${S}/elgohary-fall-of-pharaoh.jpg`, isStill: true, role: "Archive treatment" },
    { title: "The trial", src: `${S}/elgohary-press-trial.jpg`, isStill: true, role: "Scene design" },
  ],
  "el-gohary-3d-environments": [
    { title: "Rain stadium, 5–1", src: `${S}/elgohary-stadium-5-1.jpg`, isStill: true, role: "3D environment" },
    { title: "Ahwa at dawn", src: `${S}/elgohary-ahwa-interior.jpg`, isStill: true, role: "3D environment" },
    { title: "Archive animation", src: `${P}/documentary-el-gohary-archive.mp4`, poster: `${T}/documentary-el-gohary-archive.jpg`, duration: "0:09", role: "Companion film" },
  ],
  "sef-speaker-reels": [
    { title: "Akon", src: `${P}/social-sef-akon.mp4`, poster: `${T}/social-sef-akon.jpg`, duration: "0:08", role: "Speaker teaser" },
    { title: "Steven Bartlett", src: `${P}/social-sef-steven-bartlett.mp4`, poster: `${T}/social-sef-steven-bartlett.jpg`, duration: "0:08", role: "Speaker teaser" },
    { title: "Extended cut", src: `${PRJ}/sef-reels-preview.mp4`, poster: `${T}/social-sef-mo-gawdat.jpg`, duration: "0:25", role: "Full sequence" },
  ],
  "chatgpt-hackathon": [
    { title: "Extended recap", src: `${PRJ}/sharjah-hackathon-preview.mp4`, poster: `${T}/social-sharjah-hackathon.jpg`, duration: "0:25", role: "Full sequence" },
  ],
  "zed-talents": [
    { title: "Extended cut", src: `${PRJ}/zed-talents-preview.mp4`, poster: `${T}/commercial-zed-talents.jpg`, duration: "0:25", role: "Full sequence" },
  ],
  "the-transfer": [
    { title: "Extended cut", src: `${PRJ}/the-transfer-preview.mp4`, poster: `${T}/motion-the-transfer.jpg`, duration: "0:25", role: "Full sequence" },
  ],
  "juve-duping": [
    { title: "Extended cut", src: `${PRJ}/juve-duping-preview.mp4`, poster: `${T}/documentary-juve-duping.jpg`, duration: "0:30", role: "Full sequence" },
  ],
  "maaloul-tribute": [
    { title: "Filmstrip design", src: `${S}/maaloul-filmstrip.jpg`, isStill: true, role: "Design frame" },
    { title: "Al Ahly signing", src: `${S}/maaloul-ahly-signing.jpg`, isStill: true, role: "Design frame" },
  ],
  "3d-title-series": [
    { title: "Don't Talk So Much", src: `${S}/3d-titles-dont-talk.jpg`, isStill: true, role: "Episode title" },
  ],
  "photo-retouch": [
    { title: "Duel — before / after", src: `${S}/retouch-ba-duel.jpg`, isStill: true, role: "Before / after" },
    { title: "Omara — before / after", src: `${S}/retouch-ba-omara.jpg`, isStill: true, role: "Before / after" },
    { title: "Keeper — before / after", src: `${S}/retouch-ba-keeper.jpg`, isStill: true, role: "Before / after" },
    { title: "Portrait — before / after", src: `${S}/retouch-ba-portrait.jpg`, isStill: true, role: "Before / after" },
  ],
};

// Attach snippets to their projects.
for (const project of projects) {
  const extra = projectSnippets[project.slug];
  if (extra) project.snippets = extra;
}

export const categories = [
  "All",
  "Documentary & Directing",
  "Motion & 3D",
  "Brand & Commercial",
  "Sports",
  "Visual Design",
  "Social Reels",
  "Digital & YouTube Content",
];

export const services = [
  {
    icon: "Film",
    title: "Video Editing",
    description:
      "Short-form and long-form editing with precise pacing, seamless cuts, and polished final output.",
  },
  {
    icon: "Clapperboard",
    title: "Directing & Cinematography",
    description:
      "Scene direction, lighting design and framing — from documentary interviews to staged narrative setups.",
  },
  {
    icon: "Sparkles",
    title: "Motion Graphics & 3D",
    description:
      "After Effects animation, 3D composites, title sequences, lower thirds and dynamic type.",
  },
  {
    icon: "LayoutTemplate",
    title: "Template & Brand Systems",
    description:
      "Template systems and brand furniture designed to stay consistent across hundreds of deliverables.",
  },
  {
    icon: "Megaphone",
    title: "Brand & Social Content",
    description:
      "Promos, launch films, event recaps and vertical reels optimised for every platform.",
  },
  {
    icon: "PenTool",
    title: "Story Development",
    description:
      "Original written pieces developed into motion essays — writing and design handled together.",
  },
  {
    icon: "Palette",
    title: "Colour & Sound",
    description: "Professional colour grading and sound design to elevate production quality.",
  },
  {
    icon: "Languages",
    title: "Bilingual Delivery",
    description:
      "English and Arabic typography and layout, delivered natively rather than retrofitted.",
  },
];

export const experience = [
  {
    role: "Editor · Director · Motion Designer",
    company: "Freelance",
    period: "2022 — Present",
    achievements: [
      "Directed, shot and cut long-form documentary work in 4K",
      "Built motion-essay formats from original written football pieces",
      "Delivered brand films, event recaps and vertical social formats",
    ],
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"],
  },
  {
    role: "Video Editor",
    company: "Smartlink",
    period: "Aug 2019 — Dec 2022",
    achievements: [
      "African Nations Cup video editing (key responsibility)",
      "Created editing guidelines for Vodafone STARS CLASH",
      "Promo for Jawwal Sport with Roberto Carlos",
      "Built the Zed Talents bilingual visual system (ZED FC × Decathlon × Sawiris Foundation)",
    ],
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"],
  },
  {
    role: "Video Editor",
    company: "Freelancer",
    period: "Jan 2018 — Aug 2019",
    achievements: [
      "Sample promo for YouTuber 'Nsoo7y' channel (Saba7o Korah)",
      "Creative Director & Editor for YouTuber Shady Habashy (Tarikh w Korafia)",
      "Promo for Gold Era application",
      "Promos for LeeLoo & Minglings café & restaurant",
    ],
    skills: ["Premiere Pro", "After Effects", "Audition"],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "Fayoum University",
    period: "Jan 2008 — Aug 2013",
  },
  {
    degree: "Video Editing Certification",
    institution: "Online Courses",
    period: "Ongoing",
  },
];

export const skills = [
  { name: "After Effects", level: 95 },
  { name: "Premiere Pro", level: 90 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "Photoshop", level: 75 },
  { name: "Illustrator", level: 65 },
  { name: "Audition", level: 70 },
];

export const about = {
  heading: "Film · Motion · Story",
  paragraphs: [
    "I'm a video editor, director and motion designer working across documentary, branded film, sports storytelling and motion design. My work runs from directing and lighting a long-form documentary to building a bilingual visual system applied across hundreds of films.",
    "What connects it is rhythm and structure — finding the pace that makes footage feel inevitable, and building systems that hold a brand together at scale. I write, design and cut, which means a story can be developed from the page through to the final frame.",
    "I deliver natively in English and Arabic, and I've worked with brands, festivals and platforms across Egypt and the Gulf.",
  ],
  milestones: [
    { value: "9+", label: "Years in Post-Production" },
    { value: "7", label: "Disciplines Covered" },
    { value: "End-to-End", label: "Creative Direction" },
  ],
};

export const toolsMarquee = [
  "After Effects",
  "Premiere Pro",
  "DaVinci Resolve",
  "Photoshop",
  "Illustrator",
  "Audition",
  "Media Encoder",
  "Cinema 4D",
  "Motion Graphics",
  "Colour Grading",
  "Sound Design",
  "4K Editing",
];

export const projectTypes = [
  "Brand film",
  "Documentary",
  "Sports edit",
  "Social reel",
  "Motion graphics",
  "3D / After Effects",
  "Article / story development",
  "Other",
];
