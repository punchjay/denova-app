<div align="center">

# Denova

A personal portfolio app built with **React 19**, **TypeScript**, and **Styled Components** — showcasing projects, skills, and experience.

[**View live →**](https://punchjay.github.io/denova-app)

[![Deploy](https://github.com/punchjay/denova-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/punchjay/denova-app/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-19-20bbfc?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/tested%20with-Vitest-6e9f18?logo=vitest&logoColor=white)

</div>

## Features

- **Animated star-field background** rendered with the CSS box-shadow technique, twinkling across independent layers
- **Typewriter intro** that types the hero headline character by character
- **Scroll-reveal animations** — sections fade and slide in via `IntersectionObserver` as they enter the viewport
- **Tools gallery** with CSS-only hover tooltips
- **Projects gallery** with an accessible **lightbox** (rendered through a portal; closes on backdrop click, close button, or `Escape`)
- **Responsive hero** that stacks on mobile and switches to a two-column layout at larger breakpoints
- **Custom 404 page** with SPA-friendly routing on GitHub Pages
- **Accessible by default** — descriptive `alt` text, `:focus-visible` outlines, and `aria` attributes throughout

## Tech Stack

| Area | Tooling |
| --- | --- |
| UI | React 19 (Suspense + `use()` for data loading) |
| Language | TypeScript |
| Styling | Styled Components |
| Routing | React Router v7 |
| Build / Dev | Vite 8 |
| Testing | Vitest + Testing Library |
| Quality | ESLint + Prettier |
| CI / CD | GitHub Actions → GitHub Pages |

## Getting Started

### Prerequisites

- Node.js **20.19+** (or 22.12+)
- npm

### Setup

```bash
git clone https://github.com/punchjay/denova-app
cd denova-app
npm install
npm start
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Vite dev server |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the test suite once (Vitest) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Lint with ESLint |
| `npm run format` | Format with Prettier |

## Testing

Every component has a colocated test in `src/Tests/` covering a render check and a committed snapshot, alongside integration tests for routing, data fetching, and the error boundary. Update snapshots after intentional UI changes with `npx vitest run -u`.

## Deployment

Pushes to `master` run CI (tests, lint, type-check) and, on success, deploy to GitHub Pages via the official `actions/deploy-pages` flow. Pull requests run the same CI checks but do not deploy.
