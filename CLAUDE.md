# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 15 portfolio using the App Router. All visible content lives on the homepage (`src/app/page.tsx`), composed of section components rendered in sequence: Hero → Projects → Contact, with a fixed Header and Footer.

**Component structure:**
- `src/components/layout/` — Header (scroll-aware, mobile menu) and Footer
- `src/components/sections/` — Hero, Projects (accordion), Contact
- `src/components/ui/` — `AnimatedSection` (scroll-triggered Framer Motion wrapper), `SectionHeading`
- `src/data/projects.ts` — Single source of truth for all project data
- `src/types/index.ts` — Shared `Project` and `ContactItem` interfaces

**Animation pattern:** Framer Motion is used throughout. `AnimatedSection` wraps sections with `useInView` for scroll-triggered fade/slide-in (fires once). Individual components use `motion.*` elements with `variants` and `staggerChildren` for coordinated sequences.

**Projects accordion:**
- Desktop: horizontal accordion (5 columns, expands on hover via Framer Motion `animate`)
- Mobile: vertical accordion (toggles on click)
- Project data includes `image`, `tech`, `gradient`, and `accent` fields used for panel styling

**Styling:** Tailwind CSS with custom accent (`#2563EB`), custom shadows (`card`, `card-hover`, `nav`), and the Inter font via `var(--font-inter)`. Path alias `@/*` maps to `src/*`.

All interactive components use `"use client"` (Hero, Header, Projects, Contact, AnimatedSection).
