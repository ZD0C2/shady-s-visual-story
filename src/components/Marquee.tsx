import { toolsMarquee } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";

const toolIcons: Record<string, string> = {
  "Premiere Pro": "Pr",
  "After Effects": "Ae",
  "Audition": "Au",
  "Photoshop": "Ps",
  "Illustrator": "Ai",
  "DaVinci Resolve": "DV",
  "Media Encoder": "Me",
  "Final Cut Pro": "FC",
};

export default function Marquee() {
  const items = [...toolsMarquee, ...toolsMarquee];
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader number="03" title="Tools" subtitle="Software I use daily to craft visual stories." />
      </div>
      <div className="overflow-hidden py-6 border-y border-border/30 group/marquee">
        <div className="marquee group-hover/marquee:[animation-play-state:paused]">
          {items.map((tool, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-sm text-muted-foreground font-heading tracking-wider uppercase shrink-0 mr-8"
            >
              <span className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary font-bold text-xs border border-border/50">
                {toolIcons[tool] || tool.slice(0, 2)}
              </span>
              {tool}
              <span className="glow-dot ml-5" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
