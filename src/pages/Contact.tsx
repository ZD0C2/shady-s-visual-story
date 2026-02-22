import { useState } from "react";
import { Mail, Phone, ExternalLink, Send } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with backend
    setSent(true);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <SectionHeader number="—" title="Get in Touch" subtitle="Have a project in mind? Let's talk." />

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a href={`mailto:${siteData.contact.email}`} className="glass-card-hover p-5 flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-muted-foreground">{siteData.contact.email}</p>
            </div>
          </a>
          <a href={`tel:${siteData.contact.phone}`} className="glass-card-hover p-5 flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-xs text-muted-foreground">{siteData.contact.phone}</p>
            </div>
          </a>
          <a href={siteData.social.vimeo} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-5 flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Vimeo</p>
              <p className="text-xs text-muted-foreground">Watch my work</p>
            </div>
          </a>
          <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-5 flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm font-medium">Facebook</p>
              <p className="text-xs text-muted-foreground">Connect with me</p>
            </div>
          </a>
        </div>

        {sent ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-8 text-center">
            <p className="font-heading text-xl font-semibold gradient-text">Message Sent!</p>
            <p className="text-sm text-muted-foreground mt-2">I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity w-full justify-center"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
