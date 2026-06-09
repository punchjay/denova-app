# Denova App

Portfolio App built with **React 19** using **TypeScript** and **Styled Components**, showcasing projects, skills, and experience.

[https://punchjay.github.io/denova-app](https://punchjay.github.io/denova-app)

## Tech Stack

- **React 19** — UI library with concurrent features and the new compiler
- **Vite** — Build tool and dev server
- **TypeScript** — Static typing
- **Styled Components** — Styling

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
git clone https://github.com/punchjay/denova-app
cd denova-app
npm install
npm run dev
```

## Commands

```bash
npm run dev        # dev server (localhost:5273)
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build (localhost:4273)
npm run typecheck  # tsc over src/ and src/Tests/ (no emit)
npm run lint       # ESLint
npm run format     # Prettier
npm test           # run tests once
npm run test:watch # tests in watch mode
```

## Deployment & Releases

Merging to `master` triggers an automatic deploy to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), which runs CI first — `npm test`, `npm run lint`, and `npx tsc --noEmit` — and only deploys if it passes.

Releases are automated with [release-please](https://github.com/googleapis/release-please-action) (`.github/workflows/release-please.yml`). It reads [Conventional Commits](https://www.conventionalcommits.org/) on `master` and keeps an open **release PR** that bumps the version, updates `CHANGELOG.md`, and tags + publishes the GitHub Release when you merge it. There's no manual tagging — just merge the release PR when you're ready to ship.

Commit messages should follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, …) so release-please can version and categorize changes correctly.
