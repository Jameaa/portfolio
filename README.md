# Portfolio

A personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Framer Motion](https://motion.dev/) for scroll-reveal animations
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) + [Prettier](https://prettier.io/) for linting and formatting

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the dev server                      |
| `npm run build`        | Type-check and build for production       |
| `npm run preview`      | Preview the production build locally      |
| `npm run lint`         | Lint the codebase with oxlint             |
| `npm run typecheck`    | Run the TypeScript compiler in check mode |
| `npm run format`       | Format all files with Prettier            |
| `npm run format:check` | Check formatting without writing changes  |

## Customizing content

All editable content lives in `src/data/` — no need to touch component code to update the site:

- [`src/data/profile.ts`](src/data/profile.ts) — name, role, bio, nav links, social links
- [`src/data/projects.ts`](src/data/projects.ts) — project cards
- [`src/data/skills.ts`](src/data/skills.ts) — skill groups

Replace `public/favicon.svg` with your own icon, and add a `resume.pdf` to `public/` if you link one from `profile.ts`.

## Project structure

```
src/
  components/
    layout/     # Header, Footer
    sections/   # Hero, About, Projects, Skills, Contact
    ui/         # Reusable primitives (Button, Badge, Container, ...)
    ProjectCard.tsx
  data/         # Editable site content
  lib/          # Small utilities (cn helper)
  types/        # Shared TypeScript types
```

## Deployment

The build output in `dist/` is static and can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.):

```bash
npm run build
```
