import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { siteData, experience, education, skills } from "@/data/site";

export default function Resume() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-heading text-3xl font-bold">Resume</h1>
          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>

        <div className="print-page grid md:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/40 mx-auto md:mx-0 flex items-center justify-center">
              <span className="font-heading text-3xl font-bold gradient-text">SM</span>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold">{siteData.name}</h2>
              <p className="text-primary text-sm font-medium">{siteData.title}</p>
            </div>

            <p className="text-sm text-muted-foreground">{siteData.heroSubline}</p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={14} /> <a href={`mailto:${siteData.contact.email}`} className="hover:text-primary transition-colors">{siteData.contact.email}</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={14} /> <a href={`tel:${siteData.contact.phone}`} className="hover:text-primary transition-colors">{siteData.contact.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} /> {siteData.contact.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ExternalLink size={14} /> <a href={siteData.social.vimeo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vimeo</a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-heading font-semibold text-sm mb-3">Skills</h3>
              <div className="space-y-3">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-secondary">
                      <div className="skill-bar" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-10">
            <section>
              <h3 className="font-heading font-bold text-lg mb-5 pb-2 border-b border-border/40">Work Experience</h3>
              {experience.map((exp, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-heading font-semibold">{exp.role}</h4>
                    <span className="chip">{exp.company}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">•</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h3 className="font-heading font-bold text-lg mb-5 pb-2 border-b border-border/40">Education</h3>
              {education.map((e, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <h4 className="font-heading font-semibold">{e.degree}</h4>
                  <p className="text-sm text-muted-foreground">{e.institution} — {e.period}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
