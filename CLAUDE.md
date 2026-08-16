# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses pnpm (pnpm-lock.yaml is checked in).

- `pnpm dev` — start dev server at http://localhost:3000
- `pnpm build` — production build
- `pnpm lint` — run ESLint (flat config, eslint-config-next)

There are no tests.

### Version constraints (as of Aug 2026)

- `typescript` is pinned to 6.0.3 — typescript-eslint does not yet support TypeScript 7 (the Go-based compiler). Don't bump to 7.x until `pnpm lint` works with it.
- `eslint` is held at 9.x — eslint-plugin-react (pulled in by eslint-config-next) doesn't support ESLint 10 yet.

## Architecture

A single-page portfolio site built with Next.js 16 (App Router), React 19, and Tailwind CSS v4. Everything renders on one route: `app/page.tsx` composes the section components from `components/sections/` (Hero, About, Experience, Skills, Contact) in order, plus `Navigation` (which contains the `ThemeToggle`). Education renders as part of the About fact sheet, not as its own section.

The visual identity is a "financial terminal / ledger" direction: dark terminal-ink default with an amber accent (light mode is paper + amber-brown), Archivo for display headings, IBM Plex Sans for body, JetBrains Mono strictly for data (dates, labels, eyebrows, the hero quote strip). The signature element is the hero "quote strip" — a securities-master-style row of ROLE / EXP / STACK / STATUS cells. Experience renders as a ledger (`.ledger-row`) with duties always visible and tech stacks as a single mono line — no pills. Preserve these conventions when adding UI.

### Data-driven content

All portfolio content lives in `lib/profile.ts` (typed by `lib/interface.ts`). Components never hardcode personal info — they read from the exported `profile`, `experiences`, and `educations` objects. The Skills section is derived, not authored: `lib/utils.ts#getSkillsByCategory()` collects `techStack` entries across all experiences and maps them into categories via a lookup table (unknown skills fall into "DevOps & Tools"). To change page content, edit `lib/profile.ts`; adding a new tech to an experience may require adding it to the category map in `lib/utils.ts`.

The original design brief is in `.github/prompts/portfolio-design.prompt.md`; its key constraints: content must come only from `profile.ts` (no invented sections or copy), responsive, accessible, dark mode by default with a light-mode toggle.

### Theming

Dark mode is the default, set via `data-theme="dark"` on `<html>` in `app/layout.tsx`. `components/ThemeProvider.tsx` (client component wrapping the app) syncs the theme with `localStorage` and updates the `data-theme` attribute; `ThemeToggle` consumes its context via `useTheme()`.

Styling is centralized in `app/globals.css`: CSS variables define the dark palette on `:root` and the light palette under `[data-theme="light"]`, then a Tailwind v4 `@theme inline` block exposes them as utility colors (`text-accent`, `bg-bg-primary`, etc.) and fonts. Reusable classes like `.card`, `.ledger-row`, `.quote-strip`, `.section-eyebrow`, and `.social-link` are also defined there — prefer these over ad-hoc Tailwind when styling matches an existing pattern. When adding a themed color, define it in both palettes and register it in the `@theme inline` block. Muted/secondary text colors were chosen to meet WCAG AA in both themes — keep any new color combinations at or above that bar.

### Server vs client components

Most components are server components. Only theme-related components (`ThemeProvider`, `ThemeToggle`) and anything needing state/effects are `"use client"`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
