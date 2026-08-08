import { describe, it, expect } from "vitest";
import { projects, categories, siteData } from "@/data/site";

describe("site data integrity", () => {
  it("has unique project slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("assigns every project to a known category", () => {
    const known = new Set(categories.filter((c) => c !== "All"));
    for (const p of projects) {
      expect(known, `${p.slug} has unknown category "${p.category}"`).toContain(p.category);
    }
  });

  it("gives every project a preview video and thumbnail under /media", () => {
    for (const p of projects) {
      expect(p.previewVideo, `${p.slug} missing previewVideo`).toBeTruthy();
      expect(p.thumbnail, `${p.slug} missing thumbnail`).toBeTruthy();
      expect(p.previewVideo!.startsWith("/media/previews/")).toBe(true);
      expect(p.thumbnail!.startsWith("/media/thumbnails/")).toBe(true);
    }
  });

  it("populates every filter category with at least one project", () => {
    for (const c of categories.filter((c) => c !== "All")) {
      const count = projects.filter((p) => p.category === c).length;
      expect(count, `category "${c}" has no projects`).toBeGreaterThan(0);
    }
  });

  it("marks a small curated set as featured", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(3);
    expect(featured.length).toBeLessThanOrEqual(6);
  });

  it("requires the narrative fields each case study page renders", () => {
    for (const p of projects) {
      for (const field of ["title", "summary", "role", "brief", "approach", "result"] as const) {
        expect(p[field], `${p.slug} missing ${field}`).toBeTruthy();
      }
      expect(p.tools.length).toBeGreaterThan(0);
    }
  });

  it("uses the confirmed site name and hero media", () => {
    expect(siteData.name).toBe("Shady Maged");
    expect(siteData.title).toBe("Film · Motion · Story");
    expect(siteData.heroVideo.startsWith("/media/previews/")).toBe(true);
    expect(siteData.heroPoster.startsWith("/media/thumbnails/")).toBe(true);
  });
});
