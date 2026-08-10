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

  it("marks a small curated set as featured, never more than the homepage shows", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(3);
    // The homepage grid renders 6 — more than that would silently hide work.
    expect(featured.length).toBeLessThanOrEqual(6);
  });

  it("keeps the El Gohary documentary and its 3D environments in separate categories", () => {
    const doc = projects.find((p) => p.slug === "el-gohary-prime-suspect");
    const env = projects.find((p) => p.slug === "el-gohary-3d-environments");
    expect(doc?.category).toBe("Documentary & Directing");
    expect(env?.category).toBe("Motion & 3D");
  });

  it("classifies motion-design-led football pieces under Motion & 3D", () => {
    expect(projects.find((p) => p.slug === "maaloul-tribute")?.category).toBe("Motion & 3D");
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

  it("exposes exactly the seven approved filter categories", () => {
    expect(categories).toEqual([
      "All",
      "Documentary & Directing",
      "Motion & 3D",
      "Brand & Commercial",
      "Sports",
      "Visual Design",
      "Social Reels",
      "Digital & YouTube Content",
    ]);
  });

  it("no longer references retired category names", () => {
    const retired = ["Visual Systems", "Event Recaps", "Logo Animation", "Football Editorial"];
    for (const name of retired) {
      expect(categories).not.toContain(name);
      expect(projects.filter((p) => p.category === name)).toHaveLength(0);
    }
  });

  it("renders hero stats that parse to real numbers", () => {
    // Guards the counter regression that displayed 0 / 1+.
    const byLabel = Object.fromEntries(siteData.stats.map((s) => [s.label, s.value]));
    expect(byLabel["Years Experience"]).toBe("9+");
    expect(byLabel["Disciplines"]).toBe("7");
    expect(byLabel["Delivery"]).toBe("EN / AR");

    for (const { value } of siteData.stats) {
      const m = /^(\d+)(.*)$/.exec(value);
      if (m) expect(parseInt(m[1], 10)).toBeGreaterThan(0);
    }
  });

  it("points social links at confirmed profiles only", () => {
    expect(siteData.social.facebook).toBe("https://www.facebook.com/shady.maged.9256");
    // Unconfirmed profiles stay empty so they are not rendered as dead links.
    for (const url of Object.values(siteData.social)) {
      if (url) expect(url.startsWith("https://")).toBe(true);
    }
  });
});
