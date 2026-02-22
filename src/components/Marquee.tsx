import { toolsMarquee } from "@/data/site";

export default function Marquee() {
  const items = [...toolsMarquee, ...toolsMarquee];
  return (
    <div className="overflow-hidden py-6 border-y border-border/30">
      <div className="marquee">
        {items.map((tool, i) => (
          <span key={i} className="flex items-center gap-8 text-sm text-muted-foreground font-heading tracking-wider uppercase">
            {tool}
            <span className="glow-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
