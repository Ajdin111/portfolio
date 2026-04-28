# Personal Portfolio — Ajdin Mujkanović

A personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a responsive layout, dark/light mode toggle, smooth scroll navigation, and sections for software projects and client work.

**Live site:** [ajdinmujkanovic.vercel.app](https://ajdinmujkanovic.vercel.app)

---

## Tech stack

- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **Vite** for bundling and development
- Custom hooks for theme persistence and scroll-spy navigation
- Deployed on **Vercel** with automatic deploys on push to `main`

---

## Features

- Dark/light mode toggle with `localStorage` persistence
- Scroll-spy sidebar navigation — active section highlights as you scroll
- Scroll progress indicator
- Responsive layout — fixed sidebar on desktop, hamburger drawer on mobile
- Alternating project card layout for the Work section
- Separate Client Work section with hover animations
- Single-page smooth scroll with section anchors

---

## Project structure

```
src/
├── assets/           # Project screenshots and images
├── components/
│   ├── layout/       # Sidebar, ScrollProgress
│   ├── sections/     # Hero, About, Work, Clients, Contact
│   └── ui/           # ProjectCard, ClientCard, TechTag, ThemeToggle
├── data/             # Project and client data (TypeScript)
├── hooks/            # useTheme, useScrollSpy
└── types/            # Shared TypeScript interfaces
```

---

## Running locally

```bash
# Clone the repo
git clone https://github.com/Ajdin111/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Adding content

All portfolio content lives in two data files — no component changes needed:

**`src/data/projects.ts`** — software projects (title, description, tech stack, GitHub URL, live URL, image)

**`src/data/clients.ts`** — client work (name, description, live URL, image)

Add images to `src/assets/` and import them at the top of the relevant data file.

---

## Customisation

The color palette is built around a single teal accent (`#2dd4bf`) on a near-black background (`#0d1117`). To change the accent color, update the `text-teal-400`, `border-teal-400`, and `bg-teal-400` Tailwind classes across the components, or define a CSS variable in `index.css`.

Sidebar width is controlled by `w-72` on the `<aside>` element in `Sidebar.tsx` and the matching `lg:ml-72` offset in `App.tsx`.

---

## Deployment

The project is deployed on Vercel. Every push to `main` triggers an automatic redeploy. 



