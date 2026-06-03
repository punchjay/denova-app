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

## Deployment & Releases

Merging to `master` triggers an automatic deploy to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Both deploy and release run CI first — `npm test`, `npm run lint`, and `npx tsc --noEmit` — and only proceed if it passes.

To cut a release:

1. Bump `version` in `package.json` and land it on `master` (so the deployed build and the tag agree).
2. Push a version tag:

   ```bash
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```

The tag push triggers `.github/workflows/release.yml`, which publishes a GitHub Release with notes auto-generated from the merged PRs since the previous tag. Deployment (branch push) and releases (tag push) are independent and don't trigger each other.
