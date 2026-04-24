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
npx vitest run src/Tests/CardOne.test.js
```

## Architecture

Portfolio single-page app. `App.jsx` fetches from a Postman mock API on mount and passes the response array by index to four section components:

- `appData[0]` → `CardOne` (intro/hero)
- `appData[1]` → `CardTwo` (tools & skills gallery)
- `appData[2]` → `CardThree` (projects gallery)
- `appData[3]` → `Footer` (contact/link)

All UI is built with Styled Components. No routing.

## Key conventions

**Dynamic image requires** — `CardOne`, `CardTwo`, `CardThree`, and `Footer` load images with template literal `require()` calls:
```js
src={require(`../AppData/Img/${variable}.png`)}
```
These are intentionally kept as `require()`. A custom Vite plugin in `vite.config.js` (`dynamicRequirePlugin`) transforms them to `import.meta.glob` at build time. Do not convert them to static imports.

**Test files are `.test.js` (not `.jsx`)** but contain JSX. This works via the `jsxInJsPlugin` in `vite.config.js`. The same plugin handles `src/index.jsx` (the app entry point).

**Data sources** — `src/AppData/AppData.js` is local mock data used only in tests. The live app fetches from `src/AppData/Api.js` (Postman mock API). The two sources have slightly different content; the API response is authoritative.

## Vite config notes

`vite.config.js` contains three plugins:
1. `jsxInJsPlugin` — runs esbuild JSX transform on `.js` files in `src/`
2. `react()` — standard `@vitejs/plugin-react`
3. `dynamicRequirePlugin` — converts template-literal `require()` calls to `import.meta.glob`

Vitest config is also in `vite.config.js` (`test:` key) with `jsdom` environment and `globals: true`.
