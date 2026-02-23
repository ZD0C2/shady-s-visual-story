import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const homeAnchors = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = homeAnchors.map((a) => a.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const h = document.documentElement;
      const progress = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setScrollProgress(Math.min(progress, 1));

      if (!isHome) return;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
          scrolled ? "bg-background/70 border-b border-border/40 shadow-sm" : "bg-background/30"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <Link to="/" className="font-heading text-lg font-bold tracking-tight">
            <span className="gradient-text">SM</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {isHome &&
              homeAnchors.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(a.href);
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className={`text-sm transition-colors cursor-pointer ${
                    activeSection === a.href.slice(1)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {a.label}
                </a>
              ))}
            {navLinks
              .filter((l) => !(isHome && l.href === "/work"))
              .map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm transition-colors ${
                  location.pathname === l.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {isHome &&
                  homeAnchors.map((a) => (
                    <a
                      key={a.href}
                      href={a.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        const el = document.querySelector(a.href);
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.scrollY - 80;
                          window.scrollTo({ top, behavior: "smooth" });
                        }
                      }}
                      className="text-lg font-heading text-foreground cursor-pointer"
                    >
                      {a.label}
                    </a>
                  ))}
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-heading text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-lg font-heading text-foreground"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
