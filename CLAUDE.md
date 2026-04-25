# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server (Vite, localhost:5173)
npm run build      # production build → dist/
npm test           # run all tests once (Vitest)
npm run test:watch # watch mode
npm run deploy     # build + push to GitHub Pages (gh-pages -d dist)
```

To run a single test file:
```bash
npx vitest run src/Tests/CardOne.test.tsx
```

## Architecture

Portfolio single-page app. `App.tsx` fetches from a Postman mock API on mount via React 19's `use()` hook and passes the response array by index to four section components:

- `appData[0]` → `CardOne` (intro/hero)
- `appData[1]` → `CardTwo` (tools & skills gallery)
- `appData[2]` → `CardThree` (projects gallery)
- `appData[3]` → `Footer` (contact/link)

`App.tsx` wraps content in `<Suspense>` (shows `<Loader />` while fetching) and `<ErrorBoundary>` (handles fetch errors). All UI is built with Styled Components. No routing.

## Key conventions

**TypeScript types** — shared data-shape interfaces live in `src/AppData/types.ts`. Components use these instead of prop-types.

**Dynamic image requires** — `CardOne`, `CardTwo`, `CardThree`, and `Footer` load images with template literal `require()` calls:
```tsx
src={require(`../AppData/Img/${variable}.png`)}
```
These are intentionally kept as `require()`. A custom Vite plugin in `vite.config.mjs` (`dynamicRequirePlugin`) transforms them to `import.meta.glob` at build time. The `require` function is declared as a global in `src/vite-env.d.ts`. Do not convert them to static imports.

**Data sources** — `src/AppData/AppData.ts` is local mock data used only in tests. The live app fetches from `src/AppData/Api.ts` (Postman mock API). The two sources have slightly different content; the API response is authoritative.

## Vite config notes

`vite.config.mjs` contains two plugins:
1. `react()` — standard `@vitejs/plugin-react`
2. `dynamicRequirePlugin` — converts template-literal `require()` calls to `import.meta.glob`

Vitest config is also in `vite.config.mjs` (`test:` key) with `jsdom` environment and `globals: true`.
