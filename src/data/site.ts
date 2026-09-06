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
    previewVideo: `${P}/commercial-starsclash-teaser-2.mp4`,
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
    previewVideo: `${P}/commercial-leeloo-brand-film.mp4`,
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
    previewVideo: `${P}/commercial-minglings-promo.mp4`,
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
    previewVideo: `${P}/commercial-drjob-pro-1.mp4`,
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
    slug: "ebbe-sand",
    title: "Ebbe Sand — In His Own Words",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A kinetic-typography retrospective built from an archival interview transcript and restored match photography, paired with torn-paper quote reveals.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/motion-ebbe-sand.mp4`,
    thumbnail: `${T}/motion-ebbe-sand.jpg`,
    brief: "Turn an archival interview transcript into a watchable retrospective.",
    problem:
      "The only usable source was a text interview and scattered old match photography — no interview footage existed to cut against.",
    approach:
      "Built a torn-newspaper quote treatment that reveals the interview as kinetic type, intercut with restored match photography timed to the pacing of the words.",
    breakdown:
      "Torn-paper reveal animation, kinetic typography, photo restoration and parallax, archival colour grading.",
    result: "A 95-second retrospective built entirely from print and photography.",
  },
  {
    slug: "know-your-rights",
    title: "Know Your Rights — Roadside Stop",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A punchy extruded-3D title package for a legal-explainer short, built around a night-time traffic-stop dramatization.",
    role: "Motion Designer",
    tools: ["After Effects", "Cinema 4D"],
    previewVideo: `${P}/motion-know-your-rights.mp4`,
    thumbnail: `${T}/motion-know-your-rights.jpg`,
    brief: "Give a legal-rights explainer clip a title package with real weight.",
    problem:
      "A short, plainly-shot dramatization needed to read as a produced explainer rather than a stock clip.",
    approach:
      "Chunky extruded 3D titles timed to the beats of the dialogue, holding over the dramatization instead of a plain lower-third.",
    breakdown:
      "Extruded 3D typography, beat-matched title timing, colour grading to match the night exterior.",
    result: "A 19-second title package ready to lead a longer explainer series.",
  },
  {
    slug: "archive-scene-transitions",
    title: "Archive Carousel — Scene Transitions",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A 3D coverflow transition system built to move between archival football photography and newspaper print without a hard cut.",
    role: "Motion Designer & 3D Artist",
    tools: ["After Effects", "Cinema 4D"],
    previewVideo: `${P}/motion-scene-transitions.mp4`,
    thumbnail: `${T}/motion-scene-transitions.jpg`,
    brief: "Move between archival stills and print without breaking the read.",
    problem:
      "A run of archival photography and newspaper clippings needed to feel like one continuous sequence, not a slideshow.",
    approach:
      "A 3D carousel rig that turns each still into a physical card, so the camera move itself becomes the transition.",
    breakdown:
      "3D card rig, camera-driven transitions, paper and photo material shaders.",
    result: "A reusable transition system now available for any archive-driven edit.",
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
    previewVideo: `${P}/motion-maaloul-3d-feature.mp4`,
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
    previewVideo: `${P}/commercial-zed-talents-launch.mp4`,
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
    previewVideo: `${P}/motion-3d-reel-2.mp4`,
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
    previewVideo: `${P}/documentary-juve-duping-full-cut.mp4`,
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
    previewVideo: `${P}/documentary-showreel-teaser.mp4`,
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
    previewVideo: `${P}/sports-vesba-story-fhd.mp4`,
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
    previewVideo: `${P}/social-chatgpt-hackathon-3.mp4`,
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
    previewVideo: `${P}/commercial-ora-shape-logo-3.mp4`,
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
    previewVideo: `${P}/commercial-gold-era-1.mp4`,
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

  /* ---------------- New Showreel Ingest (2026-08-29) ---------------- */
  {
    slug: "juve-duping-full-cut",
    title: "Juve Duping — Full Cut",
    category: "Documentary & Directing",
    year: "2024",
    summary:
      "The complete cut of a noir-toned narrative documentary, built on multi-camera interview lighting and graded contrast.",
    role: "Director & Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    previewVideo: `${P}/documentary-juve-duping-full-cut.mp4`,
    thumbnail: `${T}/documentary-juve-duping-full-cut.jpg`,
    brief:
      "Deliver the full-length cut of the Juve Duping documentary alongside its shorter derivatives.",
    problem:
      "A long-form noir narrative needed to hold tension and pacing across a full runtime, not just in a trailer-length cut.",
    approach:
      "Structured the film in acts, leaning on lighting and a controlled colour palette to keep the noir register consistent scene to scene.",
    breakdown:
      "Structured the film in acts, leaning on lighting and a controlled colour palette to keep the noir register consistent scene to scene.",
    result:
      "A complete director's-cut documentary alongside the shorter promotional versions already on the reel.",
  },
  {
    slug: "documentary-moments",
    title: "Moments",
    category: "Documentary & Directing",
    year: "2024",
    summary:
      "A quieter observational cutdown built from documentary B-roll and candid interview moments.",
    role: "Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    previewVideo: `${P}/documentary-moments.mp4`,
    thumbnail: `${T}/documentary-moments.jpg`,
    brief:
      "Assemble a short observational piece from documentary coverage that didn't make the main narrative cut.",
    problem:
      "Strong B-roll and candid moments existed outside the main story's structure and needed a home.",
    approach:
      "Cut a loose, moment-led sequence prioritising tone and rhythm over plot.",
    breakdown:
      "Cut a loose, moment-led sequence prioritising tone and rhythm over plot.",
    result:
      "A standalone mood piece that complements the main documentary without repeating it.",
  },
  {
    slug: "documentary-touching-scene",
    title: "A Touching Scene",
    category: "Documentary & Directing",
    year: "2024",
    summary:
      "A single emotional beat pulled from long-form documentary footage, cut for pacing and impact.",
    role: "Editor",
    tools: ["Premiere Pro"],
    previewVideo: `${P}/documentary-touching-scene.mp4`,
    thumbnail: `${T}/documentary-touching-scene.jpg`,
    brief:
      "Isolate and pace a key emotional scene from a larger documentary shoot.",
    problem:
      "The moment needed room to breathe without losing the audience's attention.",
    approach:
      "Trimmed around the performance rather than the dialogue, letting silence and reaction carry the beat.",
    breakdown:
      "Trimmed around the performance rather than the dialogue, letting silence and reaction carry the beat.",
    result:
      "A self-contained emotional scene that reads clearly outside the context of the full film.",
  },
  {
    slug: "documentary-showreel-teaser",
    title: "Showreel Teaser",
    category: "Documentary & Directing",
    year: "2024",
    summary:
      "A longer-form teaser cut drawing on documentary and directing footage, built for festival/showreel submission.",
    role: "Director & Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    previewVideo: `${P}/documentary-showreel-teaser.mp4`,
    thumbnail: `${T}/documentary-showreel-teaser.jpg`,
    brief:
      "Cut an extended teaser suitable for a showreel or festival submission.",
    problem:
      "Existing short teasers didn't give enough room to show directing and lighting range together.",
    approach:
      "Combined multiple scenes into one continuous teaser, prioritising visual variety over a single narrative thread.",
    breakdown:
      "Combined multiple scenes into one continuous teaser, prioritising visual variety over a single narrative thread.",
    result:
      "A longer teaser used to demonstrate range across lighting, blocking and pacing in one cut.",
  },
  {
    slug: "maaloul-3d-feature",
    title: "Ali Maaloul — 3D Tribute (Feature Cut)",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A longer 3D motion tribute piece built around footballer Ali Maaloul, combining live footage with 3D typography and effects.",
    role: "Motion Designer & Editor",
    tools: ["After Effects", "Cinema 4D"],
    previewVideo: `${P}/motion-maaloul-3d-feature.mp4`,
    thumbnail: `${T}/motion-maaloul-3d-feature.jpg`,
    brief:
      "Build a 3D-led tribute piece around a football player using motion graphics and archival footage.",
    problem:
      "Archival match footage alone didn't carry the celebratory tone the tribute needed.",
    approach:
      "Layered 3D title cards and particle/light effects over graded footage to lift the moments the edit wanted to emphasise.",
    breakdown:
      "Layered 3D title cards and particle/light effects over graded footage to lift the moments the edit wanted to emphasise.",
    result:
      "A feature-length 3D tribute cut used as the flagship version of the piece.",
  },
  {
    slug: "maaloul-3d-cutdown",
    title: "Ali Maaloul — 3D Tribute (Cutdown)",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A short-form cutdown of the Ali Maaloul 3D tribute, trimmed for social and homepage use.",
    role: "Motion Designer & Editor",
    tools: ["After Effects", "Cinema 4D"],
    previewVideo: `${P}/motion-maaloul-3d-cutdown.mp4`,
    thumbnail: `${T}/motion-maaloul-3d-cutdown.jpg`,
    brief:
      "Produce a short cutdown of the 3D tribute piece for feed-length placements.",
    problem:
      "The full tribute ran too long for social and homepage placements.",
    approach:
      "Selected the strongest 3D beat from the feature cut and re-timed it to a standalone short.",
    breakdown:
      "Selected the strongest 3D beat from the feature cut and re-timed it to a standalone short.",
    result:
      "A compact highlight version reusing the same 3D asset library as the feature cut.",
  },
  {
    slug: "3d-motion-reel-2",
    title: "3D & Motion Reel — Vol. 2",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A compiled reel of 3D render and motion graphics work, showcasing type and object animation.",
    role: "Motion Designer",
    tools: ["After Effects", "Cinema 4D"],
    previewVideo: `${P}/motion-3d-reel-2.mp4`,
    thumbnail: `${T}/motion-3d-reel-2.jpg`,
    brief:
      "Compile a second volume of 3D and motion design shots into one reel.",
    problem:
      "Individual 3D shots were strong on their own but scattered across projects.",
    approach:
      "Grouped complementary shots by rhythm and colour so the compilation reads as one continuous reel.",
    breakdown:
      "Grouped complementary shots by rhythm and colour so the compilation reads as one continuous reel.",
    result:
      "A dedicated 3D/motion reel used to demonstrate range beyond client-specific work.",
  },
  {
    slug: "3d-motion-reel-3",
    title: "3D & Motion Reel — Vol. 3",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A further compiled reel of 3D and After Effects motion work.",
    role: "Motion Designer",
    tools: ["After Effects", "Cinema 4D"],
    previewVideo: `${P}/motion-3d-reel-3.mp4`,
    thumbnail: `${T}/motion-3d-reel-3.jpg`,
    brief:
      "Compile a third volume of 3D and motion design shots into one reel.",
    problem:
      "Newer 3D shots needed a showcase separate from the client projects they came from.",
    approach:
      "Sequenced shots for visual variety, matching move speed and colour temperature between cuts.",
    breakdown:
      "Sequenced shots for visual variety, matching move speed and colour temperature between cuts.",
    result:
      "A third reel extending the 3D/motion showcase started in Vol. 2.",
  },
  {
    slug: "articles-motion-reel-1",
    title: "Articles — Motion Essay Reel 1",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "Part of the 'Articles' motion-essay series — original football writing turned into narrated, animated pieces.",
    role: "Writer, Motion Designer & Editor",
    tools: ["After Effects", "Premiere Pro"],
    previewVideo: `${P}/motion-articles-reel-1.mp4`,
    thumbnail: `${T}/motion-articles-reel-1.jpg`,
    brief:
      "Adapt an original written football piece into a narrated motion-graphics essay.",
    problem:
      "A written article needed a visual language that matched its tone without simply reading text on screen.",
    approach:
      "Built kinetic typography and archival-style imagery around the narration, pacing reveals to the read.",
    breakdown:
      "Built kinetic typography and archival-style imagery around the narration, pacing reveals to the read.",
    result:
      "One instalment in an ongoing motion-essay format built from original writing.",
  },
  {
    slug: "motion-articles-reel-2",
    title: "Articles — Motion Essay Reel 2",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "Another instalment in the Articles motion-essay series.",
    role: "Writer, Motion Designer & Editor",
    tools: ["After Effects", "Premiere Pro"],
    previewVideo: `${P}/motion-articles-reel-2.mp4`,
    thumbnail: `${T}/motion-articles-reel-2.jpg`,
    brief:
      "Continue the Articles format with a new subject and script.",
    problem:
      "Each article needed its own visual identity while staying recognisably part of the same series.",
    approach:
      "Reused the series' typographic system while varying imagery and pacing to suit the new subject.",
    breakdown:
      "Reused the series' typographic system while varying imagery and pacing to suit the new subject.",
    result:
      "A second instalment reinforcing the motion-essay format as a repeatable series.",
  },
  {
    slug: "motion-articles-reel-3",
    title: "Articles — Motion Essay Reel 3",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A further instalment in the Articles motion-essay series.",
    role: "Writer, Motion Designer & Editor",
    tools: ["After Effects", "Premiere Pro"],
    previewVideo: `${P}/motion-articles-reel-3.mp4`,
    thumbnail: `${T}/motion-articles-reel-3.jpg`,
    brief:
      "Produce another entry in the Articles motion-essay series.",
    problem:
      "The series needed to keep finding fresh archival and stock material to match new scripts.",
    approach:
      "Sourced and graded reference footage to sit consistently alongside the series' existing library.",
    breakdown:
      "Sourced and graded reference footage to sit consistently alongside the series' existing library.",
    result:
      "A third instalment continuing the series' authorial voice.",
  },
  {
    slug: "motion-articles-reel-4",
    title: "Articles — Motion Essay Reel 4",
    category: "Motion & 3D",
    year: "2023",
    summary:
      "A short instalment in the Articles motion-essay series.",
    role: "Writer, Motion Designer & Editor",
    tools: ["After Effects", "Premiere Pro"],
    previewVideo: `${P}/motion-articles-reel-4.mp4`,
    thumbnail: `${T}/motion-articles-reel-4.jpg`,
    brief:
      "Produce a short-form entry in the Articles series.",
    problem:
      "Not every article needed a long runtime — some ideas worked better told briefly.",
    approach:
      "Compressed the format's typographic language into a shorter runtime without losing legibility.",
    breakdown:
      "Compressed the format's typographic language into a shorter runtime without losing legibility.",
    result:
      "A short instalment showing the format also works at short-form length.",
  },
  {
    slug: "tarikh-w-korafia",
    title: "Tarikh w Korafia — Shady Habashy",
    category: "Brand & Commercial",
    year: "2019",
    client: "Shady Habashy (YouTube)",
    summary:
      "Creative direction and editing for YouTuber Shady Habashy's history/folklore series 'Tarikh w Korafia'.",
    role: "Creative Director & Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-football-history-tales.mp4`,
    thumbnail: `${T}/commercial-football-history-tales.jpg`,
    brief:
      "Serve as creative director and editor for a YouTube history and folklore series.",
    problem:
      "Long narrated episodes needed pacing and visual variety to hold a YouTube audience.",
    approach:
      "Built a repeatable graphic template for titles and captions, paired with archival-style imagery to match the narration.",
    breakdown:
      "Built a repeatable graphic template for titles and captions, paired with archival-style imagery to match the narration.",
    result:
      "An ongoing series format delivered across multiple episodes for the channel.",
  },
  {
    slug: "minglings-promo-full",
    title: "Minglings — Promo (Full Cut)",
    category: "Brand & Commercial",
    year: "2019",
    client: "Minglings Café & Restaurant",
    summary:
      "The full-length version of the Minglings promotional film, ahead of its social cutdowns.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-minglings-promo.mp4`,
    thumbnail: `${T}/commercial-minglings-promo.jpg`,
    brief:
      "Cut the master promotional film for a café and restaurant brand.",
    problem:
      "The venue needed one master edit that shorter social versions could be trimmed from.",
    approach:
      "Built the story and graphic system at full length first, then treated shorter cuts as derivatives.",
    breakdown:
      "Built the story and graphic system at full length first, then treated shorter cuts as derivatives.",
    result:
      "A master promo film used as the source for the brand's shorter social deliverables.",
  },
  {
    slug: "leeloo-brand-film",
    title: "LeeLoo — Brand Film",
    category: "Brand & Commercial",
    year: "2019",
    client: "LeeLoo Café & Restaurant",
    summary:
      "A longer brand film for LeeLoo, pairing food cinematography with the venue's atmosphere.",
    role: "Creative Director & Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    previewVideo: `${P}/commercial-leeloo-brand-film.mp4`,
    thumbnail: `${T}/commercial-leeloo-brand-film.jpg`,
    brief:
      "Produce a longer-form brand film for a premium café and restaurant.",
    problem:
      "The brand needed a piece that read as a short film rather than a straight advert.",
    approach:
      "Combined slow, appetite-driven food shots with ambient venue footage and a warm grade.",
    breakdown:
      "Combined slow, appetite-driven food shots with ambient venue footage and a warm grade.",
    result:
      "A brand film used alongside the shorter LeeLoo cutdowns already on the reel.",
  },
  {
    slug: "gold-era-1",
    title: "Gold Era — App Promo (Cut 1)",
    category: "Brand & Commercial",
    year: "2019",
    client: "Gold Era",
    summary:
      "A promotional edit for the Gold Era application.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-gold-era-1.mp4`,
    thumbnail: `${T}/commercial-gold-era-1.jpg`,
    brief:
      "Cut a promotional film introducing the Gold Era application.",
    problem:
      "An app product needed to be explained and sold in a short, watchable format.",
    approach:
      "Paired screen-capture UI footage with motion graphics call-outs and a driving music edit.",
    breakdown:
      "Paired screen-capture UI footage with motion graphics call-outs and a driving music edit.",
    result:
      "A promo film introducing the app's core features.",
  },
  {
    slug: "gold-era-2",
    title: "Gold Era — App Promo (Cut 2)",
    category: "Brand & Commercial",
    year: "2019",
    client: "Gold Era",
    summary:
      "An alternate promotional cut for the Gold Era application.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-gold-era-2.mp4`,
    thumbnail: `${T}/commercial-gold-era-2.jpg`,
    brief:
      "Produce an alternate-length promo for the Gold Era application.",
    problem:
      "A shorter placement needed the same message as the primary promo in less time.",
    approach:
      "Re-cut the primary promo's strongest beats into a tighter runtime.",
    breakdown:
      "Re-cut the primary promo's strongest beats into a tighter runtime.",
    result:
      "A second promo version for shorter ad placements.",
  },
  {
    slug: "drjob-pro-1",
    title: "Dr.Job Pro — Promo 1",
    category: "Brand & Commercial",
    year: "2021",
    client: "Dr.Job",
    summary:
      "One of a series of promotional edits for the Dr.Job Pro recruitment platform.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-drjob-pro-1.mp4`,
    thumbnail: `${T}/commercial-drjob-pro-1.jpg`,
    brief:
      "Cut a promotional film for the Dr.Job Pro platform.",
    problem:
      "A recruitment platform needed to explain its value quickly to a professional audience.",
    approach:
      "Combined UI walkthroughs with motion-graphic call-outs explaining key features.",
    breakdown:
      "Combined UI walkthroughs with motion-graphic call-outs explaining key features.",
    result:
      "One instalment in a promo series for the platform, alongside the existing Dr.Job Pro edit on the reel.",
  },
  {
    slug: "drjob-pro-2",
    title: "Dr.Job Pro — Promo 2",
    category: "Brand & Commercial",
    year: "2021",
    client: "Dr.Job",
    summary:
      "A second promotional edit for the Dr.Job Pro platform.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-drjob-pro-2.mp4`,
    thumbnail: `${T}/commercial-drjob-pro-2.jpg`,
    brief:
      "Produce a second promotional cut for the Dr.Job Pro platform.",
    problem:
      "A different feature set needed its own dedicated explainer.",
    approach:
      "Reused the established graphic system with new UI capture and messaging.",
    breakdown:
      "Reused the established graphic system with new UI capture and messaging.",
    result:
      "A second promo extending the Dr.Job Pro series.",
  },
  {
    slug: "drjob-pro-3",
    title: "Dr.Job Pro — Promo 3",
    category: "Brand & Commercial",
    year: "2021",
    client: "Dr.Job",
    summary:
      "A third promotional edit for the Dr.Job Pro platform.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-drjob-pro-3.mp4`,
    thumbnail: `${T}/commercial-drjob-pro-3.jpg`,
    brief:
      "Produce a third promotional cut for the Dr.Job Pro platform.",
    problem:
      "The platform's promo series needed a closing instalment covering remaining features.",
    approach:
      "Matched pacing and graphic language to the earlier two cuts for series consistency.",
    breakdown:
      "Matched pacing and graphic language to the earlier two cuts for series consistency.",
    result:
      "A third and closing promo completing the Dr.Job Pro series.",
  },
  {
    slug: "starsclash-tayam-vs-amar",
    title: "StarsClash — Tayam vs M.Amar",
    category: "Brand & Commercial",
    year: "2021",
    client: "Vodafone / StarsClash",
    summary:
      "A studio-challenge episode from the Vodafone StarsClash format, pitting two contestants head-to-head.",
    role: "Video Editor",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    previewVideo: `${P}/commercial-starsclash-tayam-vs-amar.mp4`,
    thumbnail: `${T}/commercial-starsclash-tayam-vs-amar.jpg`,
    brief:
      "Cut an episode of the recurring Vodafone StarsClash studio format.",
    problem:
      "Multi-camera studio coverage needed to stay energetic across a full head-to-head challenge.",
    approach:
      "Applied the format's established graphic language — name cards, scoring accents and reaction cutaways.",
    breakdown:
      "Applied the format's established graphic language — name cards, scoring accents and reaction cutaways.",
    result:
      "An episode cut consistent with the format's other instalments on the reel.",
  },
  {
    slug: "starsclash-teaser-2",
    title: "StarsClash — Teaser Cut 2",
    category: "Brand & Commercial",
    year: "2021",
    client: "Vodafone / StarsClash",
    summary:
      "An alternate teaser cut for the Vodafone StarsClash format.",
    role: "Video Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-starsclash-teaser-2.mp4`,
    thumbnail: `${T}/commercial-starsclash-teaser-2.jpg`,
    brief:
      "Produce an alternate teaser for the StarsClash format's promotion.",
    problem:
      "Different placements needed different teaser lengths and openings.",
    approach:
      "Re-sequenced highlight beats from the episode footage into a standalone teaser.",
    breakdown:
      "Re-sequenced highlight beats from the episode footage into a standalone teaser.",
    result:
      "A second teaser version used alongside the episode cut.",
  },
  {
    slug: "zed-talents-2",
    title: "Zed Talents — Vol. 2",
    category: "Brand & Commercial",
    year: "2021",
    client: "ZED FC × Decathlon × Sawiris Foundation",
    summary:
      "Part of the Zed Talents bilingual sports template system, applied to a new batch of drill films.",
    role: "Editor & Template Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-zed-talents-2.mp4`,
    thumbnail: `${T}/commercial-zed-talents-2.jpg`,
    brief:
      "Apply the Zed Talents bilingual template system to a further batch of talent-discovery footage.",
    problem:
      "Each new drill film needed the same bilingual lower-third and branding system applied consistently.",
    approach:
      "Reused the established English/Arabic lower-third template and stage/age-group structure.",
    breakdown:
      "Reused the established English/Arabic lower-third template and stage/age-group structure.",
    result:
      "A further set of drill films delivered consistently with the wider Zed Talents system.",
  },
  {
    slug: "zed-talents-3",
    title: "Zed Talents — Vol. 3",
    category: "Brand & Commercial",
    year: "2021",
    client: "ZED FC × Decathlon × Sawiris Foundation",
    summary:
      "A further batch of Zed Talents drill films using the bilingual template system.",
    role: "Editor & Template Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-zed-talents-3.mp4`,
    thumbnail: `${T}/commercial-zed-talents-3.jpg`,
    brief:
      "Continue the Zed Talents template system across additional drill footage.",
    problem:
      "The programme's footage volume required the template to scale to hundreds of near-identical films without drifting.",
    approach:
      "Kept a shared project template and asset library so each new film reused the same settings.",
    breakdown:
      "Kept a shared project template and asset library so each new film reused the same settings.",
    result:
      "Consistent delivery across a large batch of drill films.",
  },
  {
    slug: "zed-talents-launch",
    title: "Zed x Talents — Launch Film",
    category: "Brand & Commercial",
    year: "2021",
    client: "ZED FC × Decathlon × Sawiris Foundation",
    summary:
      "A launch/mainsell film introducing the Zed Talents programme.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-zed-talents-launch.mp4`,
    thumbnail: `${T}/commercial-zed-talents-launch.jpg`,
    brief:
      "Cut the mainsell launch film introducing the Zed Talents talent-discovery programme.",
    problem:
      "A new programme needed one film that explained its purpose to parents and partners at once.",
    approach:
      "Combined programme footage with bilingual titles explaining the stages and partners involved.",
    breakdown:
      "Combined programme footage with bilingual titles explaining the stages and partners involved.",
    result:
      "A launch film used to introduce the programme ahead of the wider drill-film library.",
  },
  {
    slug: "zed-talents-sample-2",
    title: "Zed Talents — Sample Cut 2",
    category: "Brand & Commercial",
    year: "2021",
    client: "ZED FC × Decathlon × Sawiris Foundation",
    summary:
      "A sample/reference cut from the Zed Talents drill-film library.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/commercial-zed-talents-sample-2.mp4`,
    thumbnail: `${T}/commercial-zed-talents-sample-2.jpg`,
    brief:
      "Produce a reference sample cut representing the Zed Talents drill-film format.",
    problem:
      "Stakeholders needed a representative sample without reviewing the full library.",
    approach:
      "Selected and finished one drill film to stand in as the template's reference example.",
    breakdown:
      "Selected and finished one drill film to stand in as the template's reference example.",
    result:
      "A sample cut used as the format's reference version.",
  },
  {
    slug: "zed-talents-registration",
    title: "Zed Talents — Registration Walkthrough",
    category: "Brand & Commercial",
    year: "2021",
    client: "ZED FC × Decathlon × Sawiris Foundation",
    summary:
      "An animated app-UI walkthrough explaining how to register for the Zed Talents programme.",
    role: "Motion Designer",
    tools: ["After Effects"],
    previewVideo: `${P}/commercial-zed-talents-registration.mp4`,
    thumbnail: `${T}/commercial-zed-talents-registration.jpg`,
    brief:
      "Animate a UI walkthrough showing how families register for the programme.",
    problem:
      "A multi-step registration flow needed to be explained clearly to a non-technical audience.",
    approach:
      "Used device mockups, callout arrows and annotated fields to walk through each screen in order.",
    breakdown:
      "Used device mockups, callout arrows and annotated fields to walk through each screen in order.",
    result:
      "A clear registration explainer distinct from the programme's film-editing work.",
  },
  {
    slug: "ora-preloader",
    title: "Ora — Preloader Animation",
    category: "Brand & Commercial",
    year: "2021",
    client: "Ora",
    summary:
      "A short branded preloader animation for the Ora identity system.",
    role: "Motion Designer",
    tools: ["After Effects"],
    previewVideo: `${P}/commercial-ora-preloader.mp4`,
    thumbnail: `${T}/commercial-ora-preloader.jpg`,
    brief:
      "Animate a loading-state preloader consistent with the Ora brand identity.",
    problem:
      "The brand needed a loading moment that still felt on-identity rather than generic.",
    approach:
      "Built a shape-based animation matching the wordmark's construction logic.",
    breakdown:
      "Built a shape-based animation matching the wordmark's construction logic.",
    result:
      "A reusable preloader delivered as part of the wider Ora identity-in-motion suite.",
  },
  {
    slug: "ora-preloader-off",
    title: "Ora — Preloader Animation (Alt Colourway)",
    category: "Brand & Commercial",
    year: "2021",
    client: "Ora",
    summary:
      "An alternate colourway of the Ora preloader animation.",
    role: "Motion Designer",
    tools: ["After Effects"],
    previewVideo: `${P}/commercial-ora-preloader-off.mp4`,
    thumbnail: `${T}/commercial-ora-preloader-off.jpg`,
    brief:
      "Produce an alternate-colourway version of the Ora preloader for different backgrounds.",
    problem:
      "A single colourway didn't work across every placement background.",
    approach:
      "Reworked the animation's palette while keeping its timing and shape logic identical.",
    breakdown:
      "Reworked the animation's palette while keeping its timing and shape logic identical.",
    result:
      "A second colourway extending the preloader's usable placements.",
  },
  {
    slug: "ora-shape-logo-3",
    title: "Ora — Shape Animation Logo (Design 3)",
    category: "Brand & Commercial",
    year: "2021",
    client: "Ora",
    summary:
      "One of four shape-animation logo builds developed for the Ora identity system.",
    role: "Motion Designer",
    tools: ["After Effects", "Illustrator"],
    previewVideo: `${P}/commercial-ora-shape-logo-3.mp4`,
    thumbnail: `${T}/commercial-ora-shape-logo-3.jpg`,
    brief:
      "Animate one of several shape-based logo build options for the Ora identity.",
    problem:
      "The identity needed several logo-build directions to choose between before committing.",
    approach:
      "Built the wordmark from simple animated shapes, keeping restraint central to the design.",
    breakdown:
      "Built the wordmark from simple animated shapes, keeping restraint central to the design.",
    result:
      "One of four logo-build options delivered for the Ora identity system.",
  },
  {
    slug: "visual-snippets-1",
    title: "Visual Snippets — Vol. 1",
    category: "Sports",
    year: "2023",
    summary:
      "A compiled reel of sports visual snippets and cutaways.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-visual-snippets-1.mp4`,
    thumbnail: `${T}/sports-visual-snippets-1.jpg`,
    brief:
      "Compile a reel of standalone sports visual moments.",
    problem:
      "Strong individual sports shots existed without a single project to anchor them.",
    approach:
      "Sequenced the shots by energy and colour so the compilation reads as one continuous piece.",
    breakdown:
      "Sequenced the shots by energy and colour so the compilation reads as one continuous piece.",
    result:
      "A sports visual reel usable as a standalone showcase.",
  },
  {
    slug: "visual-snippets-2",
    title: "Visual Snippets — Vol. 2",
    category: "Sports",
    year: "2023",
    summary:
      "A second compiled reel of sports visual snippets.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-visual-snippets-2.mp4`,
    thumbnail: `${T}/sports-visual-snippets-2.jpg`,
    brief:
      "Compile a further reel of sports visual moments.",
    problem:
      "Newer sports footage needed its own showcase separate from Vol. 1.",
    approach:
      "Applied the same sequencing approach as Vol. 1 to keep the two reels consistent.",
    breakdown:
      "Applied the same sequencing approach as Vol. 1 to keep the two reels consistent.",
    result:
      "A second sports visual reel extending the showcase.",
  },
  {
    slug: "sports-squads",
    title: "Squads",
    category: "Sports",
    year: "2023",
    summary:
      "A squad-announcement/roster-style sports edit.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-squads.mp4`,
    thumbnail: `${T}/sports-squads.jpg`,
    brief:
      "Cut a squad-style roster piece for a sports audience.",
    problem:
      "A list of players/names needed to feel dynamic rather than static on screen.",
    approach:
      "Paired player footage with animated name cards timed to a driving edit rhythm.",
    breakdown:
      "Paired player footage with animated name cards timed to a driving edit rhythm.",
    result:
      "A squad reveal-style edit for social and highlight use.",
  },
  {
    slug: "gary-neville-is-red",
    title: "Gary Neville Is Red",
    category: "Sports",
    year: "2023",
    summary:
      "A football fan/commentary-style sports edit built around Gary Neville.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-gary-neville-is-red.mp4`,
    thumbnail: `${T}/sports-gary-neville-is-red.jpg`,
    brief:
      "Cut a fan-style football commentary piece.",
    problem:
      "Commentary and reaction footage needed comedic/dramatic timing to land.",
    approach:
      "Cut tightly to reaction beats, using captions and sound design to punctuate the humour.",
    breakdown:
      "Cut tightly to reaction beats, using captions and sound design to punctuate the humour.",
    result:
      "A fan-style edit built for social sharing.",
  },
  {
    slug: "gary-neville-is-red-2",
    title: "Gary Neville Is Red — Cut 2",
    category: "Sports",
    year: "2023",
    summary:
      "An alternate cut of the Gary Neville Is Red piece.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-gary-neville-is-red-2.mp4`,
    thumbnail: `${T}/sports-gary-neville-is-red-2.jpg`,
    brief:
      "Produce an alternate-length version of the piece.",
    problem:
      "A shorter placement needed the same joke in less time.",
    approach:
      "Trimmed the original cut down to its strongest single beat.",
    breakdown:
      "Trimmed the original cut down to its strongest single beat.",
    result:
      "A shorter alternate version for feed placements.",
  },
  {
    slug: "amoory-like-fares-outro",
    title: "Amoory Like Fares — Outro",
    category: "Sports",
    year: "2023",
    summary:
      "The closing/outro section of a football storytelling piece comparing two players.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-amoory-like-fares-outro.mp4`,
    thumbnail: `${T}/sports-amoory-like-fares-outro.jpg`,
    brief:
      "Cut the outro sequence for a player-comparison storytelling piece.",
    problem:
      "A comparison narrative needed a satisfying closing beat rather than an abrupt stop.",
    approach:
      "Built a slower-paced outro contrasting with the main piece's rhythm, resolving on a single image.",
    breakdown:
      "Built a slower-paced outro contrasting with the main piece's rhythm, resolving on a single image.",
    result:
      "A closing sequence completing the wider comparison piece.",
  },
  {
    slug: "vesba-story-fhd",
    title: "Vesba Story — Extended Cut",
    category: "Sports",
    year: "2023",
    summary:
      "An extended full-HD cut of the Vesba Story piece.",
    role: "Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    previewVideo: `${P}/sports-vesba-story-fhd.mp4`,
    thumbnail: `${T}/sports-vesba-story-fhd.jpg`,
    brief:
      "Produce an extended cut of the Vesba Story piece at full HD.",
    problem:
      "The short version on the reel didn't leave room for the full story arc.",
    approach:
      "Restored additional scenes trimmed from the shorter cut and re-graded for consistency.",
    breakdown:
      "Restored additional scenes trimmed from the shorter cut and re-graded for consistency.",
    result:
      "A longer version of the story sitting alongside the existing short cut.",
  },
  {
    slug: "abou-ali",
    title: "Abou Ali",
    category: "Sports",
    year: "2023",
    summary:
      "A football storytelling piece centred on player Abou Ali.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-abou-ali.mp4`,
    thumbnail: `${T}/sports-abou-ali.jpg`,
    brief:
      "Cut a storytelling piece centred on a football player's journey.",
    problem:
      "Match footage alone doesn't tell a player's story — it needed narrative framing.",
    approach:
      "Structured the edit around a clear arc, using captions and music to carry the narrative between clips.",
    breakdown:
      "Structured the edit around a clear arc, using captions and music to carry the narrative between clips.",
    result:
      "A player-focused storytelling edit for the sports reel.",
  },
  {
    slug: "brazil-squad",
    title: "Brazil Squad",
    category: "Sports",
    year: "2023",
    summary:
      "A squad-focused sports edit centred on the Brazilian national team.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-brazil-squad.mp4`,
    thumbnail: `${T}/sports-brazil-squad.jpg`,
    brief:
      "Cut a squad-focused piece for a national-team audience.",
    problem:
      "Iconic footage needed fresh pacing to feel current rather than archival.",
    approach:
      "Paired archival clips with modern graphic titles and a contemporary music edit.",
    breakdown:
      "Paired archival clips with modern graphic titles and a contemporary music edit.",
    result:
      "A squad-focused edit for the sports reel.",
  },
  {
    slug: "squat-fitness",
    title: "Squat — Fitness Title Treatment",
    category: "Sports",
    year: "2023",
    summary:
      "A fitness-focused edit featuring a distinctive neon 'FITNESS' title card treatment.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-squat-fitness.mp4`,
    thumbnail: `${T}/sports-squat-fitness.jpg`,
    brief:
      "Cut a fitness-training piece with a strong opening title treatment.",
    problem:
      "Straight training footage needed a hook to stand out from generic gym content.",
    approach:
      "Designed a neon-style animated 'FITNESS' title card to open the piece before cutting into the training footage.",
    breakdown:
      "Designed a neon-style animated 'FITNESS' title card to open the piece before cutting into the training footage.",
    result:
      "A fitness edit distinguished by its title-card treatment.",
  },
  {
    slug: "saba7o-korah-nsoo7y",
    title: "Saba7o Korah — Nsoo7y Channel Promo",
    category: "Sports",
    year: "2019",
    client: "Nsoo7y (YouTube)",
    summary:
      "A sample promotional edit produced for the Nsoo7y YouTube channel's football-talk format.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/sports-sabaho-korah.mp4`,
    thumbnail: `${T}/sports-sabaho-korah.jpg`,
    brief:
      "Produce a sample promo for a football-talk YouTube channel.",
    problem:
      "The channel needed a promo that reflected its casual, conversational football-talk format.",
    approach:
      "Cut a fast-paced highlight-and-reaction promo matching the channel's tone.",
    breakdown:
      "Cut a fast-paced highlight-and-reaction promo matching the channel's tone.",
    result:
      "A sample promo delivered for the channel.",
  },
  {
    slug: "shady-habashy-story",
    title: "Shady Habashy — Story",
    category: "Visual Design",
    year: "2023",
    client: "Shady Habashy (YouTube)",
    summary:
      "A visual-design-led piece built around the Shady Habashy channel's storytelling format.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/visual-shady-habashy-story.mp4`,
    thumbnail: `${T}/visual-shady-habashy-story.jpg`,
    brief:
      "Design a visual treatment for a story-format piece on the Shady Habashy channel.",
    problem:
      "A narrated story needed strong visual design to hold attention across its runtime.",
    approach:
      "Combined typography, imagery and pacing choices that matched the channel's established look.",
    breakdown:
      "Combined typography, imagery and pacing choices that matched the channel's established look.",
    result:
      "A visual-design-forward piece for the channel.",
  },
  {
    slug: "wessam-abou-ali-2",
    title: "Wessam Abou Ali — Cut 2",
    category: "Visual Design",
    year: "2023",
    summary:
      "An alternate visual-design cut of a piece centred on Wessam Abou Ali.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/visual-wessam-abou-ali-2.mp4`,
    thumbnail: `${T}/visual-wessam-abou-ali-2.jpg`,
    brief:
      "Produce an alternate visual-design cut for a different placement.",
    problem:
      "A different placement needed its own pacing and title treatment.",
    approach:
      "Rebuilt the opening titles and re-timed the edit for the new placement.",
    breakdown:
      "Rebuilt the opening titles and re-timed the edit for the new placement.",
    result:
      "A second visual-design version of the piece.",
  },
  {
    slug: "visual-frames-showcase",
    title: "Visual Frames — Showcase",
    category: "Visual Design",
    year: "2023",
    summary:
      "A short showcase reel of standalone graded frames and visual-design stills in motion.",
    role: "Editor & Colourist",
    tools: ["DaVinci Resolve", "Premiere Pro"],
    previewVideo: `${P}/visual-frames-showcase.mp4`,
    thumbnail: `${T}/visual-frames-showcase.jpg`,
    brief:
      "Turn a set of strong graded frames into a short moving showcase.",
    problem:
      "Individual strong frames existed without a piece to present them together.",
    approach:
      "Sequenced the frames with subtle motion and pacing to let each one register before the next.",
    breakdown:
      "Sequenced the frames with subtle motion and pacing to let each one register before the next.",
    result:
      "A short showcase reel of visual-design frames.",
  },
  {
    slug: "visual-ali-maaloul-2",
    title: "Ali Maaloul — Visual Design Cut",
    category: "Visual Design",
    year: "2023",
    summary:
      "A visual-design-focused edit built around footballer Ali Maaloul, distinct from the 3D tribute pieces.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/visual-ali-maaloul-2.mp4`,
    thumbnail: `${T}/visual-ali-maaloul-2.jpg`,
    brief:
      "Produce a visual-design-led cut distinct from the 3D-effects tribute pieces.",
    problem:
      "The subject needed a treatment led by typography and grading rather than 3D effects.",
    approach:
      "Prioritised type layout, colour grade and composition over animated 3D elements.",
    breakdown:
      "Prioritised type layout, colour grade and composition over animated 3D elements.",
    result:
      "A visual-design cut sitting alongside the 3D tribute pieces in the Motion & 3D category.",
  },
  {
    slug: "before-and-after",
    title: "Before & After",
    category: "Visual Design",
    year: "2023",
    summary:
      "A colour-grading and retouch before/after showcase piece.",
    role: "Colourist & Retoucher",
    tools: ["DaVinci Resolve", "Photoshop"],
    previewVideo: `${P}/visual-before-and-after.mp4`,
    thumbnail: `${T}/visual-before-and-after.jpg`,
    brief:
      "Demonstrate colour-grading and retouch work through direct before/after comparison.",
    problem:
      "Grading and retouch work is hard to appreciate without seeing the starting point.",
    approach:
      "Built direct wipes/cuts between ungraded source and finished frame across several examples.",
    breakdown:
      "Built direct wipes/cuts between ungraded source and finished frame across several examples.",
    result:
      "A before/after showcase reel demonstrating grading and retouch craft.",
  },
  {
    slug: "reels-mix-1",
    title: "Reels — Mix 1",
    category: "Social Reels",
    year: "2023",
    summary:
      "A vertical social reels compilation mixing several short-form pieces.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-reels-mix-1.mp4`,
    thumbnail: `${T}/social-reels-mix-1.jpg`,
    brief:
      "Compile a mix of vertical social reels into one showcase.",
    problem:
      "Individual reels lived on different channels without one place to see the range together.",
    approach:
      "Sequenced clips by energy and format so the mix reads as one continuous reel.",
    breakdown:
      "Sequenced clips by energy and format so the mix reads as one continuous reel.",
    result:
      "A vertical showcase mix representing the social-reels category.",
  },
  {
    slug: "reels-mix-2",
    title: "Reels — Mix 2",
    category: "Social Reels",
    year: "2023",
    summary:
      "A second vertical social reels compilation.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-reels-mix-2.mp4`,
    thumbnail: `${T}/social-reels-mix-2.jpg`,
    brief:
      "Compile a second mix of vertical social reels.",
    problem:
      "Newer short-form work needed its own showcase separate from Mix 1.",
    approach:
      "Applied the same sequencing approach as Mix 1 for consistency across the two reels.",
    breakdown:
      "Applied the same sequencing approach as Mix 1 for consistency across the two reels.",
    result:
      "A second vertical showcase mix.",
  },
  {
    slug: "karim-hanafy",
    title: "Karim Hanafy",
    category: "Social Reels",
    year: "2023",
    summary:
      "A vertical social piece built around speaker/creator Karim Hanafy.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-karim-hanafy.mp4`,
    thumbnail: `${T}/social-karim-hanafy.jpg`,
    brief:
      "Cut a vertical social piece for a speaker/creator feature.",
    problem:
      "Talking-head footage needed styled captions and pacing to work as a vertical feed piece.",
    approach:
      "Applied branded caption styling and tight cuts to keep pace in a 9:16 frame.",
    breakdown:
      "Applied branded caption styling and tight cuts to keep pace in a 9:16 frame.",
    result:
      "A vertical social piece for feed placement.",
  },
  {
    slug: "sef-2023-recap",
    title: "SEF 2023 — Recap",
    category: "Social Reels",
    year: "2023",
    client: "Sharjah Entrepreneurship Festival",
    summary:
      "A recap edit of the Sharjah Entrepreneurship Festival (SEF) 2023.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-sef-2023-recap.mp4`,
    thumbnail: `${T}/social-sef-2023-recap.jpg`,
    brief:
      "Cut a recap piece summarising the SEF 2023 event.",
    problem:
      "A multi-day festival's highlights needed compressing into a shareable recap.",
    approach:
      "Selected key moments across speakers and stages, cut to an upbeat recap rhythm.",
    breakdown:
      "Selected key moments across speakers and stages, cut to an upbeat recap rhythm.",
    result:
      "A festival recap piece for social distribution.",
  },
  {
    slug: "chatgpt-recap-update-2",
    title: "ChatGPT Recap — Update 2",
    category: "Social Reels",
    year: "2023",
    summary:
      "An updated recap edit covering ChatGPT-related event content.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-chatgpt-recap-update-2.mp4`,
    thumbnail: `${T}/social-chatgpt-recap-update-2.jpg`,
    brief:
      "Update an earlier recap piece with new event coverage.",
    problem:
      "New coverage needed folding into the recap format without starting from scratch.",
    approach:
      "Reused the established recap template and swapped in newer footage and captions.",
    breakdown:
      "Reused the established recap template and swapped in newer footage and captions.",
    result:
      "An updated recap version for continued social distribution.",
  },
  {
    slug: "chatgpt-hackathon-3",
    title: "ChatGPT Hackathon — Version 3",
    category: "Social Reels",
    year: "2023",
    client: "SHERAA",
    summary:
      "One of several finished cuts of the ChatGPT Hackathon recap, from a series of iterated versions.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-chatgpt-hackathon-3.mp4`,
    thumbnail: `${T}/social-chatgpt-hackathon-3.jpg`,
    brief:
      "Iterate a hackathon recap edit through several finished versions.",
    problem:
      "Stakeholder feedback across versions needed incorporating without losing the recap's pace.",
    approach:
      "Kept the core structure stable while swapping specific beats and the closing card between versions.",
    breakdown:
      "Kept the core structure stable while swapping specific beats and the closing card between versions.",
    result:
      "A third iterated version of the hackathon recap.",
  },
  {
    slug: "chatgpt-interviews",
    title: "ChatGPT Interviews",
    category: "Social Reels",
    year: "2023",
    client: "SHERAA",
    summary:
      "A vertical interview-format piece built around ChatGPT/AI event conversations.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-chatgpt-interviews.mp4`,
    thumbnail: `${T}/social-chatgpt-interviews.jpg`,
    brief:
      "Cut a vertical interview series from an AI/tech event.",
    problem:
      "Long-form interview footage needed condensing into shareable vertical segments.",
    approach:
      "Selected the strongest soundbites and paired them with styled captions for accessibility.",
    breakdown:
      "Selected the strongest soundbites and paired them with styled captions for accessibility.",
    result:
      "A vertical interview series for social distribution.",
  },
  {
    slug: "suggest-a-speaker-sef23",
    title: "Suggest a Speaker — SEF23",
    category: "Social Reels",
    year: "2023",
    client: "Sharjah Entrepreneurship Festival",
    summary:
      "A promotional/call-for-speakers piece for SEF 2023.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-suggest-a-speaker-sef23.mp4`,
    thumbnail: `${T}/social-suggest-a-speaker-sef23.jpg`,
    brief:
      "Cut a call-to-action piece inviting speaker suggestions for the festival.",
    problem:
      "A simple ask needed enough energy to prompt audience action on social.",
    approach:
      "Used direct-to-camera framing and a clear on-screen CTA over a short, energetic cut.",
    breakdown:
      "Used direct-to-camera framing and a clear on-screen CTA over a short, energetic cut.",
    result:
      "A call-for-speakers promo for the festival's social channels.",
  },
  {
    slug: "sons-of-yusuf-teaser",
    title: "Sons of Yusuf — Teaser",
    category: "Social Reels",
    year: "2023",
    summary:
      "A vertical teaser cut for the 'Sons of Yusuf' project.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-sons-of-yusuf-teaser.mp4`,
    thumbnail: `${T}/social-sons-of-yusuf-teaser.jpg`,
    brief:
      "Cut a vertical teaser to promote the Sons of Yusuf project on social.",
    problem:
      "A longer-form project needed a vertical hook distinct from its landscape teaser.",
    approach:
      "Reframed and re-cut key beats specifically for a 9:16 feed placement.",
    breakdown:
      "Reframed and re-cut key beats specifically for a 9:16 feed placement.",
    result:
      "A vertical teaser used for social promotion of the project.",
  },
  {
    slug: "emma-reels-1",
    title: "EMMA Reels — Vol. 1",
    category: "Social Reels",
    year: "2023",
    summary:
      "A glitch/collage-style editorial motion piece for the EMMA reels format.",
    role: "Editor & Motion Designer",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/social-emma-reels-1.mp4`,
    thumbnail: `${T}/social-emma-reels-1.jpg`,
    brief:
      "Cut an editorial motion piece using a glitch/collage visual style.",
    problem:
      "Straight cuts didn't match the format's intended editorial, magazine-like energy.",
    approach:
      "Layered glitch transitions and collage-style compositing between clips.",
    breakdown:
      "Layered glitch transitions and collage-style compositing between clips.",
    result:
      "A stylised editorial reel distinct from the more straightforward social cuts.",
  },
  {
    slug: "digital-art-studio",
    title: "Art Studio",
    category: "Digital & YouTube Content",
    year: "2023",
    summary:
      "A YouTube/digital piece documenting work inside an art studio.",
    role: "Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    previewVideo: `${P}/digital-art-studio.mp4`,
    thumbnail: `${T}/digital-art-studio.jpg`,
    brief:
      "Cut a digital/YouTube piece documenting studio-based creative work.",
    problem:
      "Process footage needed shaping into a watchable narrative rather than raw documentation.",
    approach:
      "Selected process beats and paired them with a calm, observational pacing and grade.",
    breakdown:
      "Selected process beats and paired them with a calm, observational pacing and grade.",
    result:
      "A studio-process piece for digital/YouTube distribution.",
  },
  {
    slug: "sons-of-yusuf-intro-2",
    title: "Sons of Yusuf — Intro (Cut 2)",
    category: "Digital & YouTube Content",
    year: "2023",
    summary:
      "An alternate intro cut for the 'Sons of Yusuf' digital/YouTube project.",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    previewVideo: `${P}/digital-sons-of-yusuf-intro-2.mp4`,
    thumbnail: `${T}/digital-sons-of-yusuf-intro-2.jpg`,
    brief:
      "Produce an alternate opening for the Sons of Yusuf project's YouTube release.",
    problem:
      "The primary intro didn't fit every platform's pacing expectations.",
    approach:
      "Re-timed the opening beats and title card for a YouTube-native pace.",
    breakdown:
      "Re-timed the opening beats and title card for a YouTube-native pace.",
    result:
      "An alternate intro version for the project's YouTube release.",
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
    { title: "Full film", src: `${P}/documentary-el-gohary-epic.mp4`, poster: `${T}/documentary-el-gohary-epic.jpg`, duration: "4:06", role: "Extended cut" },
  ],
  "el-gohary-3d-environments": [
    { title: "Rain stadium, 5–1", src: `${S}/elgohary-stadium-5-1.jpg`, isStill: true, role: "3D environment" },
    { title: "Ahwa at dawn", src: `${S}/elgohary-ahwa-interior.jpg`, isStill: true, role: "3D environment" },
    { title: "Archive animation", src: `${P}/documentary-el-gohary-archive.mp4`, poster: `${T}/documentary-el-gohary-archive.jpg`, duration: "0:09", role: "Companion film" },
    { title: "Full film", src: `${P}/documentary-el-gohary-epic.mp4`, poster: `${T}/documentary-el-gohary-epic.jpg`, duration: "4:06", role: "Extended cut" },
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

/**
 * One muted highlight reel per work category, used on the homepage to let
 * visitors preview each discipline before filtering into /work. Same spirit
 * and compression profile as heroVideo — 1600x900, ~15s, no audio.
 */
// Each category's promo is its single strongest full video, picked from
// the ingested footage — not a cut-together reel. Points straight at that
// project's own (untrimmed) preview + thumbnail files.
export const categoryReels: { category: string; video: string; poster: string }[] = [
  {
    category: "Documentary & Directing",
    video: `${P}/documentary-showreel-teaser.mp4`,
    poster: `${T}/documentary-showreel-teaser.jpg`,
  },
  {
    category: "Motion & 3D",
    video: `${P}/motion-maaloul-3d-feature.mp4`,
    poster: `${T}/motion-maaloul-3d-feature.jpg`,
  },
  {
    category: "Brand & Commercial",
    video: `${P}/commercial-minglings-promo.mp4`,
    poster: `${T}/commercial-minglings-promo.jpg`,
  },
  {
    category: "Sports",
    video: `${P}/sports-vesba-story-fhd.mp4`,
    poster: `${T}/sports-vesba-story-fhd.jpg`,
  },
  {
    category: "Visual Design",
    video: `${P}/visual-shady-habashy-story.mp4`,
    poster: `${T}/visual-shady-habashy-story.jpg`,
  },
  {
    category: "Social Reels",
    video: `${P}/social-reels-mix-1.mp4`,
    poster: `${T}/social-reels-mix-1.jpg`,
  },
  {
    category: "Digital & YouTube Content",
    video: `${P}/digital-art-studio.mp4`,
    poster: `${T}/digital-art-studio.jpg`,
  },
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
