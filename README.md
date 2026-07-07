# N Natural Hair Salon — Careers Landing Page

A responsive careers landing page for N Natural Hair Studio, built with Next.js and Tailwind CSS from a Figma design.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Why This Stack](#why-this-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Design Decisions](#design-decisions)
- [Responsive Design](#responsive-design)
- [Assumptions & Substitutions](#assumptions--substitutions)
- [Assets & Fonts](#assets--fonts)
- [Deployment](#deployment)
- [Notes](#notes)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **next/font** (Google + local fonts)
- **Lucide React** — icons
- **clsx** — conditional class composition

---

## Why This Stack

### Next.js

Next.js gives an excellent developer experience while remaining production-ready. The App Router's file-based routing, built-in image optimization (`next/image`), and automatic code splitting made it a natural fit for a marketing/landing page that still needs to load fast and score well on Core Web Vitals.

### TypeScript

TypeScript improves maintainability by providing type safety, better editor support, and fewer runtime errors as the project grows — especially valuable here since most sections are driven by typed data structures in `constants/`.

### Tailwind CSS

Tailwind made it possible to match the Figma design with pixel-level accuracy while keeping styles close to the components. Utility classes reduced the need for large component-specific stylesheets; shared type treatments (headings, card titles, body copy) are centralized as named classes in `globals.css` instead, so components stay uncluttered without losing consistency (see [Design Decisions](#design-decisions)).

### next/font

Fonts are loaded through `next/font` for automatic self-hosting, no layout shift, and no external network requests at runtime:

- **Sora** (body copy) is loaded via `next/font/google`.
- **Nonchalance** (display/heading face, in Regular/Medium/Bold) is a licensed font loaded via `next/font/local` from `app/fonts/`.

### Lucide React

A lightweight, tree-shakeable icon set used for UI chrome (menu toggle, chevrons, carousel arrows) — avoids shipping a full icon font for a handful of icons.

### clsx

A tiny utility for conditionally composing Tailwind class strings (e.g. toggling a card's "featured" styling, an accordion's open state, a button's variant). Keeps conditional className logic readable instead of nested template literals.

---

## Features

- **Responsive navbar** with a mobile hamburger menu, animated underline on nav links, and scroll-spy highlighting that tracks which section is currently in view (via `IntersectionObserver`) and keeps the URL hash in sync as you scroll.
- **Testimonials carousel** — a custom-built, infinite-looping "coverflow" carousel (no external carousel library): a large centered testimonial with smaller, dimmed cards peeking on either side, navigable by arrow buttons, dot indicators, keyboard, or swipe/scroll, with seamless wrap-around from the last card back to the first.
- **Accordion FAQ** with a smooth height transition (CSS Grid `0fr → 1fr` technique, since `height: auto` can't be transitioned directly) and a rotating chevron indicator.
- **Data-driven sections** — benefits, job listings, testimonials, FAQs, application steps, and the value-proposition cards are all rendered from typed arrays in `constants/`, not hardcoded JSX.
- **Micro-interactions** — hover states use scale/lift/glow transitions on buttons and cards, tuned per element rather than a single generic hover style.
- **Accessibility baseline** — visible keyboard focus, `aria-expanded`/`aria-hidden` wired up on the accordion, ARIA carousel roles (`role="region"`, `aria-roledescription="carousel"`, per-slide labeling), and `prefers-reduced-motion` respected on every animated element.

---

## Project Structure

```
app/
  fonts/           # Local Nonchalance font files (.otf)
  globals.css      # Design tokens + centralized typography classes
  layout.tsx        # Root layout, font loading
  page.tsx          # Assembles all sections in order
components/
  layout/          # Navbar, Footer
  sections/        # One component per landing-page section
  ui/              # Reusable building blocks (Button, Container, cards, carousel, etc.)
constants/
  *.ts / *.tsx     # Static, typed content for each data-driven section
public/
  images/          # Page imagery
  icons/           # SVG icons
```

- **`layout/`** contains components shared across the whole page (navbar, footer).
- **`sections/`** contains one component per landing-page section (`Hero`, `Benefits`, `SupportSection`, `ValueProposition`, `Testimonials`, `JobBoard`, `FAQ`, `FinalCTA`), assembled in order in `app/page.tsx`.
- **`ui/`** contains smaller, reusable components consumed by one or more sections (`Button`, `Container`, `JobCard`, `FAQItem`, `TestimonialsCarousel`, etc.).
- **`constants/`** stores all static content separately from presentation, so copy and data can change without touching component code.

---

## Setup

### Prerequisites

- Node.js 18.18 or later (LTS recommended)
- npm (or your package manager of choice — no lockfile-specific tooling is required)

No environment variables are required to run this project.

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Production build

```bash
npm run build
npm start
```

---

## Available Scripts

| Script          | Description                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Starts the dev server (Turbopack)             |
| `npm run build` | Creates an optimized production build         |
| `npm start`     | Serves the production build                   |
| `npm run lint`  | Runs ESLint (`eslint-config-next`)             |

---

## Design Decisions

The project follows a component-first architecture. Reusable UI — `Button`, `Container`, `FAQItem`, `JobCard`, `JobBadge`, `ApplicationStep`, `TestimonialsCarousel`, and more — is isolated into its own component to avoid duplication and keep section files focused on layout and content.

Static page content is stored in `constants/` to separate content from presentation — updating a job listing or FAQ answer means editing a plain data file, not JSX.

Typography, colors, and other design tokens are centralized in `globals.css`. Section headings, card titles, and body copy across the entire page share a small set of named classes (`.section-title`, `.card-title`, `.card-body`, etc.) rather than each component repeating its own long Tailwind utility string — this keeps every heading and paragraph visually consistent and makes a future type-scale change a one-line edit instead of a find-and-replace across a dozen files. Colors are left as per-instance Tailwind utilities on the element itself where they genuinely vary (e.g. a card title that's white in one context and dark in another), since Tailwind v4 generates its utilities inside a CSS cascade layer — a plain class baking in a color would silently win over a component's own override.

---

## Responsive Design

The page was built desktop-first from the supplied Figma design and adapted down to smaller breakpoints. Key responsive considerations include:

- Flexible container layout with consistent horizontal padding at every breakpoint
- Responsive typography (every heading/body class has a distinct mobile and `lg:` desktop size)
- Mobile navigation (hamburger menu with its own nav list)
- Adaptive grids (e.g. benefit cards reflow from 1 → 2 → 3 columns)
- Image scaling via `next/image` with responsive `className`s
- A testimonials carousel that shows one large card on mobile (with a peek of the next one) and scales up on larger screens
- Collapsible FAQ accordion

---

## Assumptions & Substitutions

- **Mobile spacing/sizing not in the Figma file.** Some measurements for smaller breakpoints weren't specified in the design. In these cases I made reasonable decisions while preserving the visual hierarchy and staying consistent with the desktop design's proportions.
- **Testimonials carousel is an enhancement beyond the static comp.** The Figma design showed testimonial cards in a single static arrangement; I built a fully interactive, looping carousel on top of that layout rather than a plain static grid, since the content (more testimonials than fit on screen at once) called for it.
- **Testimonial copy is placeholder.** The current testimonial entries in `constants/testimonials.tsx` repeat the same sample quote — real client testimonials should replace these before launch.
- **Job application links are not wired up.** "Apply for this role" buttons and job `href`s currently point at `#`. Wiring these to a real application flow or ATS is intentionally left for integration with the client's actual hiring pipeline (see [Future Improvements](#future-improvements)).

---

## Assets & Fonts

Images and icons are stored in:

```
public/images
public/icons
```

Fonts are loaded via `next/font`:

- **Sora** — Google Font, loaded through `next/font/google`.
- **Nonchalance** — a licensed display font, loaded through `next/font/local` from `app/fonts/` (Regular, Medium, and Bold weights).

Both are self-hosted and exposed as CSS variables (`--font-sora`, `--font-nonchalance`) consumed throughout `globals.css`.

---

## Deployment

This project is configured for **Netlify** (`netlify.toml` + `@netlify/plugin-nextjs`), which handles Next.js's server-rendering and image optimization requirements automatically. Pushing to the connected branch triggers `npm run build`; no additional environment configuration is required.

---

## Notes

- Colors are managed through CSS custom properties defined in `globals.css` (`--bg`, `--primary`, `--text`, etc.), also exposed to Tailwind via `@theme`.
- Typography utilities are centralized in `globals.css` rather than repeated inline (see [Design Decisions](#design-decisions)).
- Section content is data-driven where appropriate (jobs, testimonials, FAQs, values, benefits, application steps).
- Images are rendered using the Next.js `<Image />` component for automatic optimization.
- Interactive components (mobile menu, FAQ accordion, testimonials carousel) are implemented with plain React state — no external UI/animation library.
- Every animated or transitioning element respects `prefers-reduced-motion`.

---

## Future Improvements

Given additional time, I would consider:

- A full accessibility audit (broader ARIA coverage, focus-trap on the mobile menu, more thorough keyboard-navigation testing)
- Animation polish using Framer Motion for page-load and scroll-triggered reveals
- Dark/light theme support
- CMS integration for job listings and testimonials, so non-developers can update content
- Form integration for job applications (or an ATS handoff) instead of placeholder links
- Automated testing with Playwright and React Testing Library
- Lighthouse optimization and performance tuning pass

---

## Author

Built by Aaron Daniel Ramirez.
