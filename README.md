# Shady Maged - Cinematic Portfolio

A premium, cinematic single-page portfolio for **Shady Maged**, Creative Director & Video Editor: sports promos, ads, and social content. Built as a fast, media-optimised React app with a filmic dark theme, letterboxed hero, timecode motifs, and hover-to-play project previews.

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** with **shadcn/ui** / Radix primitives
- **Framer Motion** for animation
- **React Router** for routing
- **Vitest** + **Testing Library** for tests

## Getting started

Requires **Node.js 18+** and npm.

```sh
npm install
npm run dev
```

Open the local site at:

```text
http://127.0.0.1:8080/
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build the static production site to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the project |
| `npm run test` | Run the Vitest suite once |

## Editing content

Main portfolio copy and structured content live in `src/data/site.ts`. Update the profile, projects, services, experience, education, and skills there.

## Deployment

Run:

```sh
npm run build
```

Deploy the generated `dist/` folder to any static host such as GitHub Pages, Netlify, Vercel, Cloudflare Pages, or S3.

## License

All portfolio content and imagery © Shady Maged. Code available for reference.
