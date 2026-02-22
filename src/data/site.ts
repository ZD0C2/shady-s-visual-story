export const siteData = {
  name: "Shady Maged",
  title: "Creative Director & Editor",
  tagline: "Promos • Sports • Ads • Social Content",
  heroSubline: "Crafting cinematic stories through precision editing, motion graphics, and sound design.",
  statusPill: "Open for freelance projects",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Deliverables" },
    { value: "Fast", label: "Turnaround" },
  ],
  contact: {
    phone: "01275288876",
    email: "captinshady90@gmail.com",
    location: "Hadayek El Ahram, Egypt",
  },
  social: {
    facebook: "https://facebook.com/shady.maged",
    vimeo: "https://vimeo.com/shadyart",
  },
  rotatingWords: ["EDIT", "CUT", "COLOR", "DELIVER", "CREATE"],
  showreelUrl: "https://vimeo.com/shadyart",
};

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  role: string;
  tools: string[];
  thumbnail?: string;
  brief: string;
  problem: string;
  approach: string;
  breakdown: string;
  result: string;
  videoUrl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "african-nations-cup",
    title: "African Nations Cup Coverage",
    category: "Sports",
    year: "2021",
    summary: "Full video editing coverage for the African Nations Cup tournament — fast-paced, broadcast-quality sports content.",
    role: "Lead Video Editor",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    brief: "Produce high-energy sports highlight packages and recap videos for the African Nations Cup.",
    problem: "Tight deadlines with massive amounts of raw footage requiring rapid turnaround while maintaining broadcast quality.",
    approach: "Developed a streamlined workflow with pre-built templates, shot decision lists, and parallel editing sequences.",
    breakdown: "Built custom motion graphics templates in After Effects, color graded in Premiere Pro, and mixed audio in Audition for consistent broadcast output.",
    result: "Delivered 50+ video packages on schedule, earning recognition as the primary editor for tournament coverage.",
  },
  {
    slug: "vodafone-stars-clash",
    title: "Vodafone STARS CLASH",
    category: "Ads",
    year: "2020",
    summary: "Created editing guidelines and produced promo content for Vodafone's STARS CLASH program.",
    role: "Video Editor & Guidelines Creator",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    brief: "Establish a consistent visual editing style for a major Vodafone campaign.",
    problem: "Multiple editors needed to produce content with a unified look and feel across all deliverables.",
    approach: "Designed comprehensive editing guidelines covering cuts, transitions, color grading, and pacing standards.",
    breakdown: "Created template projects, preset libraries, and style guides that ensured consistency across the team.",
    result: "Successfully unified the visual language across all campaign materials, improving production efficiency by 40%.",
  },
  {
    slug: "jawwal-sport-roberto-carlos",
    title: "Jawwal Sport × Roberto Carlos",
    category: "Promos",
    year: "2021",
    summary: "High-profile sports promo featuring football legend Roberto Carlos for Jawwal Sport.",
    role: "Video Editor",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    brief: "Produce a cinematic promo featuring Roberto Carlos for a sports telecommunications brand.",
    problem: "Balancing the prestige of a celebrity endorsement with dynamic sports energy in a tight format.",
    approach: "Used cinematic color grading, dramatic pacing, and high-energy motion graphics to create impact.",
    breakdown: "Shot selection focused on Roberto Carlos's iconic moments, layered with brand messaging and dynamic transitions.",
    result: "Delivered a high-impact promo that elevated the brand's sports positioning in the market.",
  },
  {
    slug: "nsoo7y-saba7o-korah",
    title: "Nsoo7y — Saba7o Korah",
    category: "Social",
    year: "2018",
    summary: "Sample promo and ongoing content for popular YouTuber 'Nsoo7y' channel.",
    role: "Video Editor",
    tools: ["Premiere Pro", "After Effects"],
    brief: "Create engaging YouTube content for a sports-focused channel with a growing audience.",
    problem: "Needed to establish a unique editing style that would differentiate the channel in a crowded space.",
    approach: "Developed fast-paced editing with custom transitions, lower thirds, and branded intro/outro sequences.",
    breakdown: "Implemented jump cuts, zoom effects, and dynamic text overlays that became the channel's signature style.",
    result: "Helped grow the channel's engagement and established a recognizable visual brand.",
  },
  {
    slug: "gold-era-app",
    title: "Gold Era Application Promo",
    category: "Promos",
    year: "2019",
    summary: "Promotional video for the Gold Era mobile application launch.",
    role: "Video Editor & Creative Director",
    tools: ["Premiere Pro", "After Effects", "Illustrator"],
    brief: "Create a compelling app launch video that showcases features and drives downloads.",
    problem: "Translating app functionality into an engaging visual narrative within a 60-second format.",
    approach: "Combined screen recordings with motion graphics and lifestyle footage to tell a complete story.",
    breakdown: "Animated UI elements, created custom transitions between features, and added energetic sound design.",
    result: "Delivered a polished launch video that was used across social media and app store listings.",
  },
  {
    slug: "leeloo-cafe-promo",
    title: "LeeLoo Café & Restaurant",
    category: "Corporate",
    year: "2019",
    summary: "Atmospheric promotional video for LeeLoo café & restaurant.",
    role: "Creative Director & Editor",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    brief: "Capture the ambiance and culinary experience of a premium café and restaurant.",
    problem: "Creating a warm, inviting visual story that makes viewers want to visit.",
    approach: "Slow-motion food shots, ambient lighting, and a warm color grade to evoke comfort and quality.",
    breakdown: "Used rack focus transitions, warm color grading in DaVinci, and subtle ambient sound mixing.",
    result: "Produced an atmospheric promo that effectively communicated the brand's premium positioning.",
  },
];

export const services = [
  {
    icon: "Film",
    title: "Video Editing",
    description: "Short-form and long-form editing with precise pacing, seamless cuts, and polished final output.",
  },
  {
    icon: "Megaphone",
    title: "Promos & Ads",
    description: "High-energy promotional videos, social cuts, and ad content optimized for every platform.",
  },
  {
    icon: "Palette",
    title: "Color & Sound",
    description: "Professional color grading and sound design to elevate production quality.",
  },
  {
    icon: "Sparkles",
    title: "Motion Graphics",
    description: "Custom After Effects animations, lower thirds, intros, and dynamic text overlays.",
  },
  {
    icon: "Monitor",
    title: "Multi-Platform Delivery",
    description: "Optimized exports for YouTube, Instagram, TikTok, broadcast, and web.",
  },
];

export const experience = [
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
  {
    role: "Video Editor",
    company: "Smartlink",
    period: "Aug 2019 — Dec 2022",
    achievements: [
      "African Nations Cup video editing (key responsibility)",
      "Created editing guidelines for Vodafone STARS CLASH",
      "Promo for Jawwal Sport with Roberto Carlos",
      "Responsible for Zed Talents sports videos",
    ],
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"],
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

export const toolsMarquee = [
  "After Effects", "Premiere Pro", "DaVinci Resolve", "Photoshop",
  "Illustrator", "Audition", "Media Encoder", "Final Cut Pro",
  "Motion Graphics", "Color Grading", "Sound Design", "4K Editing",
];

export const categories = ["All", "Promos", "Sports", "Ads", "Social", "Corporate"];
