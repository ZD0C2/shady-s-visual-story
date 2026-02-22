import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 {siteData.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={siteData.social.vimeo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vimeo</a>
          <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
          <a href={`mailto:${siteData.contact.email}`} className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
