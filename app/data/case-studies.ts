/**
 * Screening-room case-study copy: one entry per project video, keyed by the
 * preview filename (basename, no path/host prefix) so it survives the R2
 * media host changing. Fields not covered here fall back to the project's
 * existing title/role/category/description in page.tsx.
 */
export type CaseStudy = {
  format: string;
  toolkit: string[];
  challenge: string;
  approach: string;
  finalFrame: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  /* ---------------- Documentary & Directing ---------------- */
  "documentary-ahly-epic.mp4": {
    format: "Widescreen documentary film",
    toolkit: ["Camera", "Lighting", "Premiere Pro", "DaVinci Resolve", "After Effects"],
    challenge:
      "A long interview documentary risks visual monotony — a dozen people in the same chair for five hours will flatten unless each is given a reason to look different.",
    approach:
      "Designed a distinct lighting setup per subject rather than one house look. Fourteen shot setups, each with its own key placement and colour separation — deep blue rim on one, warm amber wrap on another, cool magenta on a third — so the film changes register as the testimony changes.",
    finalFrame:
      "Three parts plus a teaser, with a director's frame library of over 470 graded stills — the largest and most sustained directing work in the portfolio.",
  },
  "documentary-el-gohary.mp4": {
    format: "3D motion sequence",
    toolkit: ["After Effects", "Cinema 4D", "Photoshop", "Element 3D"],
    challenge:
      "Archive-only storytelling has nowhere to put a camera. Without built space, the film stays flat on the page.",
    approach:
      "Constructed sets rather than backgrounds — an investigation room, a café at first light, an empty stadium in rain — each lit and dressed so a moving camera reveals information the way a scene would.",
    finalFrame:
      "A set of reusable 3D environments that carry the film's key beats and title moments.",
  },
  "documentary-el-gohary-archive.mp4": {
    format: "Widescreen archive documentary",
    toolkit: ["After Effects", "Premiere Pro", "Photoshop"],
    challenge:
      "The story survives mainly as decades-old newspaper print — text-heavy source material with no usable footage, which resists being made cinematic.",
    approach:
      "Treated the archive as the narrative spine: newspaper spreads animated with a moving camera, and progressive highlight callouts that lead the eye through dense Arabic print exactly in step with the narration.",
    finalFrame: "A long-form Arabic documentary built almost entirely from print archive.",
  },
  "documentary-juve-duping.mp4": {
    format: "Widescreen documentary short",
    toolkit: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    challenge: "Documentary storytelling often defaults to talking heads; this needed to feel directed.",
    approach:
      "Staged the narrator in a controlled, low-key set with hard practical light, shooting in 4K for reframing latitude in the edit.",
    finalFrame: "A 12-minute 4K master that demonstrates directing, cinematography and editing in one piece.",
  },
  "documentary-maradona.mp4": {
    format: "Widescreen tribute documentary",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Archive-only edits risk becoming compilations rather than stories.",
    approach:
      "Structured decades of match footage into acts with rising emotional stakes, letting restoration and pacing carry weight that the archive alone couldn't.",
    finalFrame: "A six-minute tribute cut built entirely from historic football archive.",
  },
  "documentary-vesba-story.mp4": {
    format: "Widescreen brand story",
    toolkit: ["Premiere Pro", "DaVinci Resolve"],
    challenge: "Brand stories can feel like ads; this one needed to feel observed rather than sold.",
    approach:
      "Applied documentary grammar — patient framing, real pauses, close observational cuts — to material that started life as a branded commission.",
    finalFrame: "A long-form story piece delivered as a finished master, closer to a short documentary than a promo.",
  },
  "documentary-juve-duping-full-cut.mp4": {
    format: "Widescreen documentary — full cut",
    toolkit: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    challenge:
      "The condensed cut of Juve — The Duping proved the noir approach worked; the harder problem was sustaining that same directed, low-key mood across a full runtime without it reading as repetitive.",
    approach:
      "Kept the same hard-practical lighting and blocking from the short cut but let scenes breathe — holding on reaction beats and archive inserts that the shorter edit had to sacrifice for pace.",
    finalFrame: "The complete 4K master, screened here alongside its shorter companion cut.",
  },
  "documentary-moments.mp4": {
    format: "Widescreen observational cutdown",
    toolkit: ["Premiere Pro", "DaVinci Resolve"],
    challenge:
      "Hours of documentary B-roll and off-camera moments rarely justify their own edit — most of it is there to support the main interview, not stand alone.",
    approach:
      "Pulled the quieter, unscripted beats — a hand gesture, a pause between answers, a glance off camera — and let them run without narration, trusting the observational footage to carry its own rhythm.",
    finalFrame: "A quiet companion cut that shows the documentary's texture between its formal interview setups.",
  },
  "documentary-touching-scene.mp4": {
    format: "Widescreen documentary excerpt",
    toolkit: ["Premiere Pro", "DaVinci Resolve"],
    challenge:
      "A single emotional beat, lifted out of a much longer interview, has to land on its own without the surrounding context that gave it weight.",
    approach:
      "Trimmed tightly around the moment itself, extending the silence either side of it rather than cutting away, so the pause does the work a voiceover would otherwise have to do.",
    finalFrame: "One scene, isolated and re-paced, standing in for the tone of the larger film it comes from.",
  },
  "documentary-showreel-teaser.mp4": {
    format: "Widescreen showreel teaser",
    toolkit: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    challenge:
      "A showreel teaser has to represent directing, cinematography and editing at once, in far less time than any single film gets to make its case.",
    approach:
      "Cut across projects rather than within one — matching light quality and camera movement scene to scene so the jumps between different documentaries read as a single authored voice.",
    finalFrame: "A longer-form teaser built for festival and showreel submission, sequenced as one continuous reel.",
  },

  /* ---------------- Brand & Commercial ---------------- */
  "commercial-vodafone-starsclash.mp4": {
    format: "Widescreen branded series",
    toolkit: ["Premiere Pro", "After Effects", "Audition"],
    challenge:
      "Multi-camera studio footage had to stay energetic across a long runtime while keeping the brand's visual identity present in every segment.",
    approach:
      "Built a repeatable episode structure — cold open, contestant name cards, challenge blocks, reaction beats — so each episode felt consistent and on-brand.",
    finalFrame:
      "Hand-painted brush-stroke name cards, animated scoring accents and reaction cutaways timed to the action delivered a consistent, reusable graphic language across the format.",
  },
  "commercial-leeloo.mp4": {
    format: "Widescreen brand film",
    toolkit: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    challenge:
      "The venue needed to feel warm and worth travelling for, using both live food footage and unbuilt, still-under-construction architecture.",
    approach:
      "Split-frame food montages for appetite appeal, cut against a 3D walkthrough of the venue exterior at dusk to sell a space that didn't fully exist yet.",
    finalFrame:
      "A complete brand kit — intro, location film, snippets and outro — built to be reused across the venue's own channels.",
  },
  "commercial-minglings.mp4": {
    format: "Vertical brand promo",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "The message had to land in a vertical frame within the first seconds.",
    approach: "Presenter-led framing with graphic sticker accents keeping the eye moving through a fast 9:16 cut.",
    finalFrame: "A promo delivered in multiple lengths for feed and story placements.",
  },
  "commercial-saudi-national-day.mp4": {
    format: "Widescreen cultural campaign film",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "National campaigns are crowded; the film needed a single memorable image to anchor it.",
    approach:
      "Anchored the edit on a slow sand-pour against golden-hour desert light, letting the landscape carry the emotion instead of a busier montage.",
    finalFrame: "Delivered in multiple aspect variants for placement across formats, all built around the golden colour grade.",
  },
  "commercial-drjob-pro.mp4": {
    format: "Widescreen product film",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Platform features needed to be legible without a heavy voiceover load.",
    approach: "Motion-graphic sequencing that reveals one benefit at a time, in bilingual text treatments.",
    finalFrame: "Multiple language and length variants produced from a single underlying system.",
  },
  "commercial-football-history-tales.mp4": {
    format: "Widescreen editorial series film",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge:
      "A history-and-folklore YouTube format lives or dies on whether archive and illustration feel authored rather than stock.",
    approach:
      "Took creative direction across the series — pairing period-appropriate imagery with restrained kinetic type so the storytelling voice, not the graphics, stays the focus.",
    finalFrame: "A recurring visual identity applied across the 'Tarikh w Korafia' series for Shady Habashy.",
  },
  "commercial-minglings-promo.mp4": {
    format: "Widescreen brand film — full cut",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge:
      "The vertical Minglings promo proved the presenter-led format worked; the full-length version had to justify a longer runtime before the social cutdowns took over.",
    approach:
      "Let the presenter's energy set the pace rather than compressing every beat, keeping the same graphic sticker language but with more room between hits.",
    finalFrame: "The source cut the shorter social versions were built from.",
  },
  "commercial-leeloo-brand-film.mp4": {
    format: "Widescreen brand film",
    toolkit: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    challenge: "A longer brand film needed to sustain appetite appeal without leaning on the 3D reveal alone.",
    approach: "Paired food cinematography with the venue's ambient atmosphere across a fuller runtime than the primary cut.",
    finalFrame: "A companion long-form cut of the LeeLoo brand film.",
  },
  "commercial-gold-era-1.mp4": {
    format: "Widescreen app promo",
    toolkit: ["Premiere Pro", "After Effects", "Element 3D"],
    challenge: "A gold-investment app needed a promo that felt premium without leaning on gimmicks.",
    approach: "Carried the particle-and-bullion identity language from the logo animation into a full product promo edit.",
    finalFrame: "The first of two promotional cuts produced for the Gold Era application.",
  },
  "commercial-gold-era-2.mp4": {
    format: "Widescreen app promo — alternate cut",
    toolkit: ["Premiere Pro", "After Effects", "Element 3D"],
    challenge: "A second cut needed to reach the same audience without simply repeating the first.",
    approach: "Re-sequenced the same asset library around a different pacing and emphasis for a fresh placement.",
    finalFrame: "An alternate promotional cut for the Gold Era application, screened alongside Cut 1.",
  },
  "commercial-drjob-pro-1.mp4": {
    format: "Widescreen product promo",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A recruitment platform needed several promo edits addressing different features and audiences.",
    approach: "Applied the same bilingual UI-motion system to a distinct feature set and sequencing.",
    finalFrame: "The first in a series of promotional edits for Dr.Job Pro.",
  },
  "commercial-drjob-pro-2.mp4": {
    format: "Widescreen product promo",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "The second promo had to stay visually consistent with the first while covering new ground.",
    approach: "Reused the platform's UI-motion language with a different benefit sequence and pacing.",
    finalFrame: "The second promotional edit for the Dr.Job Pro platform.",
  },
  "commercial-drjob-pro-3.mp4": {
    format: "Widescreen product promo",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A third variant rounded out the platform's promotional library for a different placement.",
    approach: "Closed out the UI-motion system with a shorter, more condensed benefit sequence.",
    finalFrame: "The third promotional edit for the Dr.Job Pro platform.",
  },
  "commercial-starsclash-tayam-vs-amar.mp4": {
    format: "Widescreen branded episode",
    toolkit: ["Premiere Pro", "After Effects", "Audition"],
    challenge: "Each StarsClash episode had to feel like a distinct head-to-head, not a repeat of the format template.",
    approach: "Applied the series' name-card and scoring-accent system to a specific contestant match-up, timing reaction cutaways to this episode's own beats.",
    finalFrame: "A studio-challenge episode pitting Tayam against M.Amar, built on the format's established graphic language.",
  },
  "commercial-starsclash-teaser-2.mp4": {
    format: "Widescreen branded teaser",
    toolkit: ["Premiere Pro", "After Effects", "Audition"],
    challenge: "A teaser needed to sell the format's energy in a fraction of an episode's runtime.",
    approach: "Compressed the series' fastest reaction beats and scoring hits into a single promotional cutdown.",
    finalFrame: "An alternate teaser cut for the Vodafone StarsClash format.",
  },
  "commercial-zed-talents-2.mp4": {
    format: "Widescreen bilingual template system",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "A second batch of drill films had to slot into the existing bilingual system without visibly restarting the design work.",
    approach: "Applied the locked lower-third pattern and drill taxonomy from the core Zed Talents system to a new set of footage.",
    finalFrame: "Volume 2 of the Zed Talents drill-film library, consistent with the wider campaign.",
  },
  "commercial-zed-talents-3.mp4": {
    format: "Widescreen bilingual template system",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "A further batch of drill footage needed the same treatment at continued volume.",
    approach: "Extended the established bilingual template system to a third set of drill films.",
    finalFrame: "Volume 3 of the Zed Talents drill-film library.",
  },
  "commercial-zed-talents-launch.mp4": {
    format: "Widescreen launch film",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "The programme needed a single film to introduce the whole Zed Talents system before the drill library existed.",
    approach: "Built a mainsell edit establishing the brand furniture and tone that every later drill film would inherit.",
    finalFrame: "The launch film that introduced the Zed Talents programme.",
  },
  "commercial-zed-talents-sample-2.mp4": {
    format: "Widescreen template sample",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "The client needed a reference cut to sign off the template system before it was applied at volume.",
    approach: "Produced a sample edit from the drill-film library, standing in for the wider batch.",
    finalFrame: "A sample/reference cut from the Zed Talents drill-film library.",
  },
  "commercial-zed-talents-registration.mp4": {
    format: "Animated UI walkthrough",
    toolkit: ["After Effects", "Illustrator"],
    challenge: "Parents and players needed to understand a multi-step registration flow without reading a manual.",
    approach: "Animated the app's own registration screens in sequence, matching the platform's real UI rather than a mockup.",
    finalFrame: "An animated walkthrough explaining how to register for the Zed Talents programme.",
  },
  "commercial-ora-preloader.mp4": {
    format: "Branded preloader animation",
    toolkit: ["After Effects", "Illustrator"],
    challenge: "Identity motion has to survive being seen constantly — restraint matters more than spectacle.",
    approach: "Built the preloader as a shape-animation study, informed by the wider Ora identity-in-motion system.",
    finalFrame: "A short branded preloader animation delivered as part of the Ora identity system.",
  },
  "commercial-ora-preloader-off.mp4": {
    format: "Branded preloader animation — alt colourway",
    toolkit: ["After Effects", "Illustrator"],
    challenge: "The identity system needed to survive a different background context without losing legibility.",
    approach: "Re-graded the same preloader animation into an alternate colourway for that placement.",
    finalFrame: "An alternate colourway of the Ora preloader animation.",
  },
  "commercial-ora-shape-logo-3.mp4": {
    format: "Shape-animation logo build",
    toolkit: ["After Effects", "Illustrator"],
    challenge: "Four competing shape-animation concepts needed to be built out fully before one could be chosen.",
    approach: "Developed this direction — Design 3 — to the same finished standard as its siblings, so the comparison was fair.",
    finalFrame: "One of four shape-animation logo builds developed for the Ora identity system.",
  },

  /* ---------------- Motion & 3D ---------------- */
  "motion-the-transfer.mp4": {
    format: "3D motion sequence",
    toolkit: ["After Effects", "Photoshop", "Cinema 4D"],
    challenge: "Static football posters lose impact in motion feeds without added dimension.",
    approach: "Parallax camera moves through layered composites, with type treated as a design element rather than an overlay.",
    finalFrame: "A repeatable series format extended across several editions.",
  },
  "logo-gold-era.mp4": {
    format: "Identity animation",
    toolkit: ["After Effects", "Premiere Pro", "Element 3D"],
    challenge: "Financial products need to feel trustworthy and premium, not gimmicky.",
    approach: "Used gold as the literal material of the animation — particle bursts and bullion resolving into the logo mark.",
    finalFrame: "A launch package spanning identity animation and in-app product demonstration.",
  },
  "motion-maaloul-3d-feature.mp4": {
    format: "3D motion tribute — feature cut",
    toolkit: ["After Effects", "Cinema 4D", "Photoshop"],
    challenge: "A full career tribute in 3D needed enough runtime to let its floating-screen and filmstrip sequences resolve properly.",
    approach: "Built out the complete 3D environment and camera choreography at feature length before it was cut down for other placements.",
    finalFrame: "The longer feature cut of the Ali Maaloul 3D tribute.",
  },
  "motion-maaloul-3d-cutdown.mp4": {
    format: "3D motion tribute — cutdown",
    toolkit: ["After Effects", "Cinema 4D", "Photoshop"],
    challenge: "The feature-length tribute needed a short-form version for social and homepage placements without losing its sense of scale.",
    approach: "Trimmed to the strongest floating-screen and trophy-montage beats from the feature cut.",
    finalFrame: "A short-form cutdown of the Ali Maaloul 3D tribute.",
  },
  "motion-3d-reel-2.mp4": {
    format: "3D motion reel",
    toolkit: ["After Effects", "Cinema 4D", "Element 3D"],
    challenge: "Individual 3D and motion jobs don't show range on their own; a reel has to prove versatility in one sitting.",
    approach: "Compiled render and type-animation work across projects into a single continuous sequence, cut for rhythm rather than chronology.",
    finalFrame: "The second volume of a compiled 3D and motion-graphics reel.",
  },
  "motion-3d-reel-3.mp4": {
    format: "3D motion reel",
    toolkit: ["After Effects", "Cinema 4D", "Element 3D"],
    challenge: "A further body of 3D and After Effects work needed its own showcase without repeating the earlier volume.",
    approach: "Selected a different set of render and object-animation studies, sequenced for pace.",
    finalFrame: "The third volume of the compiled 3D and motion-graphics reel series.",
  },
  "motion-articles-reel-1.mp4": {
    format: "Motion essay",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "Original football writing needed a visual form that read as authored rather than a generic explainer.",
    approach: "Applied the 'Articles' format's editorial-layout language — highlighted text, archive photography, layered composites — to a new written piece.",
    finalFrame: "The first instalment of the Articles motion-essay series.",
  },
  "motion-articles-reel-2.mp4": {
    format: "Motion essay",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "A second article needed the same editorial voice without feeling like a repeat of the first.",
    approach: "Reused the series' typographic system with new archive material and a different pacing arc.",
    finalFrame: "The second instalment of the Articles motion-essay series.",
  },
  "motion-articles-reel-3.mp4": {
    format: "Motion essay",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "The series needed to keep proving the format could carry different subjects and arguments.",
    approach: "Carried the layout language into a further original piece of football writing.",
    finalFrame: "The third instalment of the Articles motion-essay series.",
  },
  "motion-articles-reel-4.mp4": {
    format: "Motion essay",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "A shorter article still needed the full weight of the series' visual identity.",
    approach: "Compressed the usual layout system into a tighter runtime without dropping its editorial feel.",
    finalFrame: "A short instalment in the Articles motion-essay series.",
  },
  "motion-ebbe-sand.mp4": {
    format: "Kinetic-typography retrospective",
    toolkit: ["After Effects", "Photoshop"],
    challenge:
      "An archival interview transcript has no usable video of its own — the words exist, but there's nothing to cut to.",
    approach:
      "Built the piece as kinetic typography paired with restored match photography, using torn-paper reveals to turn quotes into on-screen events rather than static captions.",
    finalFrame: "A retrospective told entirely through a subject's own words, staged as type and archive rather than footage.",
  },
  "motion-know-your-rights.mp4": {
    format: "3D title package",
    toolkit: ["After Effects", "Cinema 4D", "Element 3D"],
    challenge: "A legal-explainer short needed titles with enough weight to match a tense, night-time dramatization.",
    approach: "Built an extruded 3D title system around a roadside-stop scene, letting the type carry the same tension as the staged footage.",
    finalFrame: "A punchy title package built specifically around a night-time traffic-stop dramatization.",
  },
  "motion-scene-transitions.mp4": {
    format: "3D transition system",
    toolkit: ["After Effects", "Cinema 4D", "Element 3D"],
    challenge:
      "Moving between archival photography and newspaper print usually means a hard cut, breaking whatever momentum the story had built.",
    approach:
      "Designed a 3D coverflow system that carries the camera through stacked archive and print material as one continuous move instead of a cut.",
    finalFrame: "A reusable transition system for moving between archive photography and print without breaking the scene.",
  },

  /* ---------------- Sports ---------------- */
  "sports-maaloul-tribute.mp4": {
    format: "3D motion tribute",
    toolkit: ["After Effects", "Photoshop", "Cinema 4D"],
    challenge: "A career spanning Sfaxien, Al Ahly and Tunisia had to be legible at a glance without becoming a highlights reel.",
    approach:
      "Arranged career moments as floating screens and filmstrip frames inside a lit stadium environment, so the viewer reads the span of a career spatially.",
    finalFrame: "A tribute package delivered in several cuts and design variants.",
  },
  "sports-marmoush-vs-mo.mp4": {
    format: "Widescreen sports edit",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Comparison content must be instantly legible.",
    approach: "Split framing and animated stat treatments set the two players against each other at a glance.",
    finalFrame: "A short-form comparison format delivered in two scene variants.",
  },
  "sports-visual-snippets-1.mp4": {
    format: "Sports cutaway reel",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Match-day cutaways and reaction shots rarely get their own showcase, even when the framing is doing real work.",
    approach: "Compiled a run of standalone sports visual snippets, cut for texture and rhythm rather than a single narrative.",
    finalFrame: "The first volume of a compiled sports snippet reel.",
  },
  "sports-visual-snippets-2.mp4": {
    format: "Sports cutaway reel",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A second body of match cutaways needed its own reel without repeating the first volume's selects.",
    approach: "Selected a fresh set of visual snippets, sequenced with the same attention to pace.",
    finalFrame: "The second volume of the compiled sports snippet reel.",
  },
  "sports-squads.mp4": {
    format: "Widescreen squad edit",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A roster announcement has to introduce a full squad without turning into a static name list.",
    approach: "Built a squad-announcement structure with consistent player-card pacing and graphic rhythm.",
    finalFrame: "A squad-announcement edit built around roster-reveal pacing.",
  },
  "sports-gary-neville-is-red.mp4": {
    format: "Widescreen commentary edit",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Fan-commentary content needs personality to stand out from straight highlights packages.",
    approach: "Built the edit around Gary Neville's own reactions, letting his commentary set the cutting rhythm.",
    finalFrame: "A commentary-led sports edit built around a single recognisable voice.",
  },
  "sports-gary-neville-is-red-2.mp4": {
    format: "Widescreen commentary edit — alternate cut",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A second cut needed a different angle on the same commentary material.",
    approach: "Re-sequenced the same source around a different pacing and emphasis.",
    finalFrame: "An alternate cut of the Gary Neville Is Red piece.",
  },
  "sports-amoory-like-fares-outro.mp4": {
    format: "Widescreen outro sequence",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A comparison piece between two players needed a closing beat that resolved the argument rather than just stopping.",
    approach: "Built the outro to land the comparison's final point, using it as the piece's payoff rather than a fade-out.",
    finalFrame: "The closing section of a football storytelling piece comparing two players.",
  },
  "sports-vesba-story-fhd.mp4": {
    format: "Widescreen brand story — extended cut",
    toolkit: ["Premiere Pro", "DaVinci Resolve"],
    challenge: "The core Vesba Story cut proved the observational approach worked; a longer full-HD version had to sustain that same restraint.",
    approach: "Extended the same documentary-grammar pacing across a fuller runtime and a higher-resolution master.",
    finalFrame: "An extended full-HD cut of the Vesba Story piece.",
  },
  "sports-abou-ali.mp4": {
    format: "Widescreen player profile",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A single-player profile needed enough structure to feel like a story rather than a highlights compilation.",
    approach: "Built a football storytelling arc centred on Abou Ali, using match footage to support a narrative rather than replace one.",
    finalFrame: "A football storytelling piece centred on a single player's career.",
  },
  "sports-brazil-squad.mp4": {
    format: "Widescreen squad edit",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A national squad carries huge name recognition; the edit had to earn attention on craft rather than the roster alone.",
    approach: "Applied the same squad-announcement pacing used elsewhere in the sports work to the Brazil national team.",
    finalFrame: "A squad-focused sports edit built around the Brazilian national team.",
  },
  "sports-squat-fitness.mp4": {
    format: "Widescreen fitness edit",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A fitness edit needed a title treatment with enough presence to match the intensity of the training footage.",
    approach: "Built a neon 'FITNESS' title card as the piece's signature moment, timed to the training footage's own energy.",
    finalFrame: "A fitness-focused edit anchored by its neon title-card treatment.",
  },
  "sports-sabaho-korah.mp4": {
    format: "Widescreen channel promo",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A football-talk YouTube channel needed a sample promo that represented its tone before a full episode existed.",
    approach: "Built a promotional edit around the format's conversational, talk-show energy.",
    finalFrame: "A sample promotional edit produced for the Nsoo7y channel's football-talk format.",
  },

  /* ---------------- Visual Design ---------------- */
  "visual-photo-retouch.mp4": {
    format: "Photo retouch showcase",
    toolkit: ["Photoshop", "Lightroom", "Camera Raw"],
    challenge:
      "Raw sports photography is busy and evenly lit — crowds, advertising boards and daylight all compete with the subject.",
    approach:
      "Held the subject's colour and let everything behind it fall away: desaturated and cooled surroundings, deepened contrast, controlled vignette, cleaned distractions — the same grade language applied across hundreds of frames so the set reads as one body of work.",
    finalFrame: "A retouch library of roughly 500 images, each kept alongside its original for direct comparison.",
  },
  "visual-shady-habashy-story.mp4": {
    format: "Visual design showcase",
    toolkit: ["Photoshop", "After Effects"],
    challenge: "A storytelling-format channel needed a visual-design piece that matched its editorial identity rather than a generic edit.",
    approach: "Built the piece around the Shady Habashy channel's own visual language and pacing conventions.",
    finalFrame: "A visual-design-led piece built around the channel's storytelling format.",
  },
  "visual-wessam-abou-ali-2.mp4": {
    format: "Visual design showcase — alternate cut",
    toolkit: ["Photoshop", "After Effects"],
    challenge: "A second cut needed a distinct visual-design treatment rather than repeating an existing edit.",
    approach: "Applied a different design and pacing approach to the same subject.",
    finalFrame: "An alternate visual-design cut centred on Wessam Abou Ali.",
  },
  "visual-frames-showcase.mp4": {
    format: "Graded stills showcase",
    toolkit: ["Photoshop", "DaVinci Resolve"],
    challenge: "Individual graded stills rarely get seen as a body of work rather than one-off frames.",
    approach: "Sequenced standalone graded frames and visual-design stills into a single moving showcase.",
    finalFrame: "A short showcase reel of graded frames and visual-design stills in motion.",
  },
  "visual-ali-maaloul-2.mp4": {
    format: "Visual design showcase",
    toolkit: ["Photoshop", "After Effects"],
    challenge: "Alongside the 3D tribute pieces, Ali Maaloul's story needed a distinct, design-first treatment.",
    approach: "Built a visual-design-focused edit separate from the 3D tribute series, leaning on composition and grade rather than dimensional type.",
    finalFrame: "A visual-design-focused edit built around Ali Maaloul, distinct from the 3D tribute pieces.",
  },
  "visual-before-and-after.mp4": {
    format: "Before / after showcase",
    toolkit: ["Photoshop", "Lightroom", "DaVinci Resolve"],
    challenge: "Colour-grading and retouch work is easy to undersell without a direct comparison to the source.",
    approach: "Built the piece explicitly as a before/after sequence, letting the raw and finished frames sit side by side.",
    finalFrame: "A colour-grading and retouch before/after showcase.",
  },

  /* ---------------- Social Reels ---------------- */
  "social-sef-akon.mp4": {
    format: "Vertical social short",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Dozens of speakers needed individual teasers that still read as one festival identity.",
    approach: "Locked a format — hook line, styled captions, festival furniture, consistent runtime — then applied it to this speaker.",
    finalFrame: "One entry in a speaker teaser library covering the festival programme with a single consistent look.",
  },
  "social-sef-mo-gawdat.mp4": {
    format: "Vertical thought-leadership reel",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Dozens of speakers needed individual teasers that still read as one festival identity.",
    approach: "Locked a format — hook line, styled captions, festival furniture, consistent runtime — then applied it across the speaker roster.",
    finalFrame: "A speaker teaser library covering the festival programme with a single consistent look.",
  },
  "social-sef-steven-bartlett.mp4": {
    format: "Vertical social short",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A premium vertical edit had to make a strong spoken idea land quickly without visual clutter getting in the way.",
    approach: "Kept captions restrained and the frame clean, trusting the speaker's own delivery to carry the piece.",
    finalFrame: "A speaker teaser built for immediate clarity over graphic spectacle.",
  },
  "social-sharjah-hackathon.mp4": {
    format: "Vertical event recap",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Event recaps must convey energy and scale quickly, for an audience that wasn't there.",
    approach: "Fast assembly of participation moments, resolving on the event's brand lockup as the payoff.",
    finalFrame: "A recap delivered in multiple lengths, from 31 to 54 seconds; the shortest closes on the hackathon lockup.",
  },
  "social-reels-mix-1.mp4": {
    format: "Vertical reel compilation",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Several short-form social pieces needed a single reel that showed range without feeling disjointed.",
    approach: "Sequenced a mix of vertical pieces back to back, matching pace and colour so the transitions feel intentional.",
    finalFrame: "The first volume of a vertical social reels compilation.",
  },
  "social-reels-mix-2.mp4": {
    format: "Vertical reel compilation",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A second compilation needed fresh material without repeating the first mix's selects.",
    approach: "Sequenced a further mix of short-form vertical pieces with the same pacing discipline.",
    finalFrame: "The second volume of the vertical social reels compilation.",
  },
  "social-karim-hanafy.mp4": {
    format: "Vertical social short",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A speaker-led vertical piece needed to hold attention with minimal visual support.",
    approach: "Built the edit around Karim Hanafy's own delivery, using captions and pacing rather than heavy graphics.",
    finalFrame: "A vertical social piece built around a single speaker's voice.",
  },
  "social-sef-2023-recap.mp4": {
    format: "Vertical event recap",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A full festival year needed to be summarised in a single fast-moving recap.",
    approach: "Compiled the year's strongest moments into one energetic vertical edit, mirroring the format used for the hackathon recap.",
    finalFrame: "A recap edit of the Sharjah Entrepreneurship Festival's 2023 programme.",
  },
  "social-chatgpt-recap-update-2.mp4": {
    format: "Vertical event recap",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A previous recap needed updating with new event content while keeping the established recap format.",
    approach: "Reapplied the recap structure and pacing to a refreshed selection of footage.",
    finalFrame: "An updated recap edit covering ChatGPT-related event content.",
  },
  "social-chatgpt-hackathon-3.mp4": {
    format: "Vertical event recap",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "The hackathon recap went through several iterations before landing on a final approved version.",
    approach: "Refined pacing and shot selection across successive versions of the same recap.",
    finalFrame: "One of several finished cuts of the ChatGPT Hackathon recap, from a series of iterated versions.",
  },
  "social-chatgpt-interviews.mp4": {
    format: "Vertical interview short",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Event-floor conversations needed a format that felt considered rather than raw phone footage.",
    approach: "Applied styled captions and consistent framing to on-the-ground AI-event conversations.",
    finalFrame: "A vertical interview-format piece built around event-floor conversations.",
  },
  "social-suggest-a-speaker-sef23.mp4": {
    format: "Vertical call-to-action short",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A call-for-speakers piece has to prompt action, not just inform, in a few seconds of attention.",
    approach: "Built a direct, graphic-led promotional short around the festival's speaker nomination process.",
    finalFrame: "A promotional piece inviting speaker suggestions for SEF 2023.",
  },
  "social-sons-of-yusuf-teaser.mp4": {
    format: "Vertical teaser",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A project teaser needed to build curiosity in a vertical, social-first format.",
    approach: "Withheld resolution in favour of tone and atmosphere, consistent with the project's teaser philosophy elsewhere in the archive.",
    finalFrame: "A vertical teaser cut for the 'Sons of Yusuf' project.",
  },
  "social-emma-reels-1.mp4": {
    format: "Vertical editorial motion piece",
    toolkit: ["After Effects", "Premiere Pro"],
    challenge: "A reels format needed a distinct visual signature to stand apart from standard social edits.",
    approach: "Built a glitch-and-collage editorial motion style specific to the EMMA reels format.",
    finalFrame: "The first volume of the EMMA reels format's glitch-collage motion style.",
  },

  /* ---------------- Digital & YouTube Content ---------------- */
  "articles-pavel-nedved.mp4": {
    format: "Motion essay",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "Player profiles need a distinct voice to stand out.",
    approach: "Applied an editorial layout language to motion — highlighted text treatments over archive photography and layered composites.",
    finalFrame: "One of a continuing series of motion essays.",
  },
  "articles-wessam-zlatan.mp4": {
    format: "Motion essay",
    toolkit: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "Long-form writing doesn't automatically translate to video.",
    approach: "Designed the article as a moving editorial layout, with typographic structure carrying the argument.",
    finalFrame: "A 90-second motion essay built from an original written piece.",
  },
  "commercial-hareef-gaming.mp4": {
    format: "Vertical tournament promo",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "Gaming audiences scroll fast and expect high-tempo motion.",
    approach: "Aggressive cut rhythm synced to motion-graphic hits, building toward a prize-reveal payoff.",
    finalFrame: "An 85-second promo package delivered for the FreeFire tournament campaign.",
  },
  "digital-art-studio.mp4": {
    format: "Digital documentary short",
    toolkit: ["Premiere Pro", "DaVinci Resolve"],
    challenge: "A studio-process video risks feeling like unstructured footage rather than a piece with a point of view.",
    approach: "Shaped the studio visit into a small observational arc, letting the work being made set the pacing.",
    finalFrame: "A YouTube/digital piece documenting the process inside an art studio.",
  },
  "digital-sons-of-yusuf-intro-2.mp4": {
    format: "Digital documentary intro",
    toolkit: ["Premiere Pro", "After Effects"],
    challenge: "A second intro cut needed to introduce the 'Sons of Yusuf' project differently from the existing vertical teaser.",
    approach: "Built a horizontal, digital/YouTube-oriented intro treatment distinct from the social teaser's vertical format.",
    finalFrame: "An alternate intro cut for the 'Sons of Yusuf' digital/YouTube project.",
  },
};
