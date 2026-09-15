import { useEffect } from "react";

/** Freeze looping CSS effects in place while their containing section is away. */
export function useSectionMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll<HTMLElement>("main > section");
    const visible = new Set<Element>();
    const update = (section: HTMLElement) => {
      section.style.setProperty(
        "--section-motion",
        visible.has(section) && !document.hidden ? "running" : "paused",
      );
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
        update(entry.target as HTMLElement);
      }
    }, { threshold: 0 });

    sections.forEach((section) => {
      update(section);
      observer.observe(section);
    });
    const onVisibilityChange = () => sections.forEach(update);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      sections.forEach((section) => section.style.removeProperty("--section-motion"));
    };
  }, []);
}
