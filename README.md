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
npm start
```

## Available Scripts

```bash
npm start
```

Runs the app in development mode at [http://localhost:5173](http://localhost:5173)

```bash
npm test
```

Runs the test suite once with Vitest.

```bash
npm run test:watch
```

Runs tests in watch mode.

```bash
npm run build
```

Builds the app for production to the `dist` folder.

```bash
npm run preview
```

Serves the production build locally for preview.

```bash
npm run lint
```

Lints all `src/` files with ESLint.

```bash
npm run format
```

Formats all `src/` files with Prettier.

```bash
npx tsc --noEmit
```

Type-checks the project without emitting files.

## Deployment & Releases

Merging to `master` triggers an automatic deploy to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), which runs CI first — `npm test`, `npm run lint`, and `npx tsc --noEmit` — and only deploys if it passes.

Releases are automated with [release-please](https://github.com/googleapis/release-please-action) (`.github/workflows/release-please.yml`). It reads [Conventional Commits](https://www.conventionalcommits.org/) on `master` and keeps an open **release PR** that bumps the version, updates `CHANGELOG.md`, and tags + publishes the GitHub Release when you merge it. There's no manual tagging — just merge the release PR when you're ready to ship.

Commit messages should follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, …) so release-please can version and categorize changes correctly.
