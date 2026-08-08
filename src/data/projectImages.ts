/**
 * Project thumbnails.
 *
 * Thumbnails now live in `public/media/thumbnails/` and are referenced directly
 * from each project's `thumbnail` field in `site.ts`. Serving them from /public
 * (rather than bundling via imports) keeps them out of the JS bundle and lets
 * the browser lazy-load them.
 *
 * This map is kept as an optional override for any project that needs a bundled
 * image instead of a public-path one.
 */
export const projectThumbnails: Record<string, string> = {};

/** Resolve a project's thumbnail: bundled override first, then public path. */
export function getThumbnail(slug: string, thumbnail?: string): string | undefined {
  return projectThumbnails[slug] ?? thumbnail;
}
