# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server (Vite, localhost:5173)
npm run build      # production build → dist/
npm test           # run all tests once (Vitest)
npm run test:watch # watch mode
npm run lint       # run ESLint
npm run format     # format all files with Prettier
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

`StarBackground` renders a fixed-position star field behind all content. It is mounted as a sibling to `<ErrorBoundary>` in `App.tsx` so it is visible even during loading. Stars are generated once per mount via a `useState` lazy initializer using the CSS box-shadow technique, split into five groups that twinkle independently via a styled-components `keyframes` animation. `AppContainer` has `background: transparent` and `z-index: 1` so the star field shows through.

`Card` is a Styled Component used by `CardOne`, `CardTwo`, and `CardThree` to give each section an elevated card appearance (semi-transparent background, border, border-radius, box-shadow, max-width, centered with `margin: 0 auto`).

`ScrollReveal` wraps each card section in `App.tsx` and uses `IntersectionObserver` to trigger a fade-in/slide-up animation when the section enters the viewport. It accepts an optional `delay` prop (ms) for staggering. The observer disconnects after firing once. `CardTwo` uses `delay={150}` for a slight stagger after `CardOne`.

## Key conventions

**TypeScript types** — shared data-shape interfaces live in `src/AppData/types.ts`. Components use these instead of prop-types.

**Dynamic image requires** — `CardOne`, `CardTwo`, `CardThree`, and `Footer` load images with template literal `require()` calls:

```tsx
src={require(`../AppData/Img/${variable}.png`)}
```

These are intentionally kept as `require()`. A custom Vite plugin in `vite.config.mjs` (`dynamicRequirePlugin`) transforms them to `import.meta.glob` at build time. The `require` function is declared as a global in `src/vite-env.d.ts`. Do not convert them to static imports.

**Lazy loading** — images below the fold (`CardTwo`, `CardThree`, `Footer`) use `loading="lazy"`. The `CardOne` gear icon is above the fold and must not be lazy loaded.

**Data sources** — `src/AppData/AppData.ts` is local mock data used only in tests. The live app fetches from `src/AppData/Api.ts` (Postman mock API). The two sources have slightly different content; the API response is authoritative.

**ErrorBoundary** — `ErrorBoundary.tsx` is a class component wrapping `<App>`. It shows the error message and a Retry button (which reloads the page) when a child throws. The retry reloads the page because `appDataPromise` is module-level and cannot be re-fetched without a fresh load.

## Accessibility conventions

- All images use descriptive `alt` text — never `alt="Icon"`.
- `LinkFooter` has `:focus-visible` styles for keyboard navigation.
- Images below the fold use `loading="lazy"` (`CardTwo`, `CardThree`, `Footer`). The `CardOne` gear icon is above the fold — do not add lazy loading to it.

## Testing conventions

- Every component has a test in `src/Tests/` with two cases: `renders without crashing` and `renders correctly` (snapshot).
- `App.test.tsx` mocks `../AppData/Api` via `vi.mock` and wraps renders in `await act()` to handle the Suspense/`use()` hook correctly.
- `Api.test.ts` tests `fetchApi` directly using `vi.stubGlobal('fetch', ...)` — covers happy path, HTTP error, and network failure.
- `ErrorBoundary.test.tsx` tests the no-error path, error-thrown path, and verifies the Retry button calls `window.location.reload()`.
- `App.test.tsx` includes a content assertion test verifying all four sections render expected text from mock data.
- Snapshots are gitignored — run `npx vitest run -u` to update them after UI changes.
- `StarBackground.test.tsx` and `App.test.tsx` mock `Math.random` via `vi.spyOn(Math, 'random').mockReturnValue(0.5)` so star positions are deterministic and snapshots are stable across runs.
- `setupTests.ts` stubs `IntersectionObserver` with a plain class (not `vi.fn()`) that fires the callback immediately on `observe()`. Using a plain class prevents `vi.restoreAllMocks()` from clearing the implementation between tests.

## Code quality

**Prettier** — formats all `src/` files. Config in `.prettierrc`. VS Code formats on save via `.vscode/settings.json` (requires the Prettier extension: `esbenp.prettier-vscode`). Run manually with `npm run format`.

**ESLint** — lints all `src/` files. Config in `eslint.config.js` using the modern flat config format. Uses `typescript-eslint` and `eslint-plugin-react-hooks`. The `no-require-imports` rule is disabled because the dynamic `require()` image pattern is intentional. VS Code shows errors inline via `.vscode/settings.json` (requires the ESLint extension: `dbaeumer.vscode-eslint`). Run manually with `npm run lint`.

## Vite config notes

`vite.config.mjs` contains two plugins:

1. `react()` — standard `@vitejs/plugin-react`
2. `dynamicRequirePlugin` — converts template-literal `require()` calls to `import.meta.glob`

Vitest config is also in `vite.config.mjs` (`test:` key) with `jsdom` environment and `globals: true`.
