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
npx tsc --noEmit   # type check without emitting files
```

To run a single test file:

```bash
npx vitest run src/Tests/CardOne.test.tsx
```

## Architecture

Portfolio app with React Router v7. `src/router.tsx` defines two routes using `createBrowserRouter` with `basename: '/denova-app'`:

- `/` → `App` (home page)
- `*` → `NotFound` (404 page)

`src/index.tsx` renders `<RouterProvider router={router} />`. The router is created at module level in `router.tsx`.

**GitHub Pages SPA routing** — `public/404.html` encodes the requested path as a query param and redirects to `index.html`. A script at the top of `index.html` restores the real path via `history.replaceState` before the app boots, so React Router sees the correct URL.

`App.tsx` fetches from a Postman mock API on mount via React 19's `use()` hook and passes the response array by index to four section components:

- `appData[0]` → `CardOne` (intro/hero)
- `appData[1]` → `CardTwo` (tools & skills gallery)
- `appData[2]` → `CardThree` (projects gallery)
- `appData[3]` → `Footer` (contact/link)

`App.tsx` wraps content in `<Suspense>` (shows `<Loader />` while fetching) and `<ErrorBoundary>` (handles fetch errors). All UI is built with Styled Components.

`NotFound` is the 404 page. It uses `StarBackground`, `AppContainer`, `ScrollReveal`, `GhostCard`, `NotFoundHeader`, and `HomeLink` (a `styled(Link)` from React Router). `GhostCard` is a minimal styled div used only by `NotFound` — unlike `Card`, it has no border or background. `NotFoundHeader` is a `styled(HeaderOne)` override with `font-size: 4.5rem`. The card fades in on load via `ScrollReveal`.

`HomeLink` is a styled React Router `Link` using the cyan accent (`#20bbfc`) with hover glow and `:focus-visible` outline, matching the `LinkFooter` accessibility pattern.

`StarBackground` renders a fixed-position star field behind all content. It is used by both `App` and `NotFound` — each mounts its own instance, which is fine since routes are mutually exclusive. Stars are generated once per mount via a `useState` lazy initializer using the CSS box-shadow technique, split into five groups that twinkle independently via a styled-components `keyframes` animation. `AppContainer` has `background: transparent` and `z-index: 1` so the star field shows through.

`Card` is a Styled Component used by `CardOne`, `CardTwo`, and `CardThree` to give each section an elevated card appearance (semi-transparent background, border, border-radius, box-shadow, max-width, centered with `margin: 0 auto`).

`HeroLayout` and `TextContent` are Styled Components used by `CardOne` for a responsive two-column layout. On mobile they stack vertically (centered). At `576px+` they switch to a row with text on the left and the profile photo on the right, with left-aligned text.

`ImageIcon` displays the profile photo in `CardOne`. The image is stored locally at `src/AppData/Img/profile.png` and loaded via the dynamic `require()` pattern like other images. Styled as a circle (`border-radius: 50%`) with a `#20bbfc` blue border. `CardOne` tracks `imgLoaded` state via `onLoad` and passes `$loaded` to `ImageIcon`, which fades the photo in over 1.2s once the image is ready. The photo links to the GitHub profile URL (`GITHUB_LINK` in `CardOneData`) and has a purple glow on hover.

`ScrollReveal` wraps `CardOne`, `CardTwo`, and `CardThree` in `App.tsx`, and the card in `NotFound.tsx`. It uses `IntersectionObserver` to trigger a fade-in/slide-up animation when the section enters the viewport. It accepts an optional `delay` prop (ms) for staggering. The observer disconnects after firing once. `CardTwo` uses `delay={150}` for a slight stagger after `CardOne`. `Footer` renders without `ScrollReveal` — it appears immediately.

`TypeWriter` is a component used by `CardOne` to animate `HEADER_ONE` ("Hello! I'm a...") with a character-by-character typing effect. It accepts a `text` prop, an optional `speed` prop (ms per character, default 80), and an optional `delay` prop (ms before typing starts, default 500). It renders the text incrementally via `useState` + `useEffect` with `setTimeout`, and displays a blinking `|` cursor (CSS `step-end` animation) alongside the text throughout.

`CardTwo` wraps each tool icon in a `ToolWrapper` + `Tooltip` pair. `ToolWrapper` is a `position: relative` flex container; `Tooltip` is an absolutely-positioned `span` that fades in below the icon on hover via CSS only (no JS state). The tooltip uses a cyan border (`rgba(32, 187, 252, 0.3)`) to match the accent palette.

`CardThree` manages a `active` state (`{ src, alt } | null`) to drive a `Lightbox`. Clicking any project screenshot sets `active` and opens the lightbox; clicking the backdrop, the close button, or pressing `Escape` closes it. `Lightbox` renders via `createPortal` into `document.body` so it layers above the star field and all cards.

## Design system

**Color palette** — the solid palette lives in `src/Components/colors.ts` (the `colors` object) and is imported into styled-components rather than hardcoded. Use the token, not the hex literal. One-off `rgba()` overlays, borders, and shadows (and `StarBackground`'s alpha-templated star colors) stay inline at their usage sites. `Base bg` lives in `index.css` (CSS can't import the TS token).

| Token | `colors` key | Hex | Usage |
|---|---|---|---|
| Cyan | `cyan` | `#20bbfc` | Primary accent — `HeaderOne`, links, star field, hover glows |
| Purple | `purple` | `#8b5cf6` | Secondary accent — icon glows, loader, `ImageIcon` border, `ImageFooter` hover |
| Light purple | `lightPurple` | `#a78bfa` | Star field only |
| Grey light | `greyLight` | `#c1cfd7` | Primary body text |
| Grey mid | `greyMid` | `#b1b3b4` | Muted / secondary text |
| White | `white` | `#fff` | `ParagraphOne` lead-in text |
| Card bg | `cardBg` | `rgba(34, 38, 43, 0.10)` | Semi-transparent card background |
| Base bg | — | `#222630` | Page background (behind star field), in `index.css` |

**Typography**

- Font weight: 300 (thin) throughout — headers and body alike
- `HeaderOne`: 2.4rem, cyan (`#20bbfc`), purple drop-shadow for glow effect
- `NotFoundHeader`: 4.5rem override of `HeaderOne`
- Body text: 1.11rem, `#c1cfd7`
- Footer/meta: 0.85rem, `#b1b3b4`
- Tooltip labels: 0.72rem

## Key conventions

**TypeScript types** — shared data-shape interfaces live in `src/AppData/types.ts`. Components use these instead of prop-types.

**Dynamic image requires** — `CardOne`, `CardTwo`, `CardThree`, and `Footer` load images with template literal `require()` calls:

```tsx
src={require(`../AppData/Img/${variable}.png`)}
```

These are intentionally kept as `require()`. A custom Vite plugin in `vite.config.mjs` (`dynamicRequirePlugin`) transforms them to `import.meta.glob` at build time. The `require` function is declared as a global in `src/vite-env.d.ts`. Do not convert them to static imports.

**Lazy loading** — images below the fold (`CardTwo`, `CardThree`, `Footer`) use `loading="lazy"`. The `CardOne` profile photo is above the fold and must not be lazy loaded.

**Data sources** — `src/AppData/AppData.ts` is local mock data used only in tests. The live app fetches from `src/AppData/Api.ts` (Postman mock API). The two sources have slightly different content; the API response is authoritative.

**IMPORTANT: Whenever `AppData.ts` is changed, `AppData.json` must also be updated to match.** Both files must stay in sync — `AppData.ts` drives tests, `AppData.json` is the reference for the live API data shape.

**ErrorBoundary** — `ErrorBoundary.tsx` is a class component wrapping `<App>`. It shows the error message and a Retry button (which reloads the page) when a child throws. The retry reloads the page because `appDataPromise` is module-level and cannot be re-fetched without a fresh load.

**Claude model** — any Claude API / Anthropic SDK code added to this project must use `claude-opus-4-8`.

## Accessibility conventions

- All images use descriptive `alt` text — never `alt="Icon"`.
- External links (`target="_blank"`) use `rel="noopener noreferrer"` — `CardOne`, `CardTwo`, and `Footer`.
- `LinkFooter` and `HomeLink` have `:hover` (cyan blue glow via `filter: drop-shadow`) and `:focus-visible` outline for keyboard navigation.
- `Lightbox` uses `role="dialog"` and `aria-modal="true"` with `aria-label` set to the image name. It closes on `Escape` keydown.

## Testing conventions

- Every component has a test in `src/Tests/` with two cases: `renders without crashing` and `renders correctly` (snapshot).
- `App.test.tsx` mocks `../AppData/Api` via `vi.mock` and wraps renders in `await act()` to handle the Suspense/`use()` hook correctly.
- `Api.test.ts` tests `fetchApi` directly using `vi.stubGlobal('fetch', ...)` — covers happy path, HTTP error, and network failure.
- `ErrorBoundary.test.tsx` tests the no-error path, error-thrown path, and verifies the Retry button calls `window.location.reload()`.
- `App.test.tsx` includes a content assertion test verifying all four sections render expected text from mock data. `CardOne`'s assertion uses `PAR_ONE` (not `HEADER_ONE`) because `HEADER_ONE` is typed out by `TypeWriter` and starts empty.
- Snapshots are committed. Run `npx vitest run -u` to update them after UI changes, then commit the updated files.
- `StarBackground.test.tsx` and `App.test.tsx` mock `Math.random` via `vi.spyOn(Math, 'random').mockReturnValue(0.5)` so star positions are deterministic and snapshots are stable across runs.
- `setupTests.ts` stubs `IntersectionObserver` with a plain class (not `vi.fn()`) that fires the callback immediately on `observe()`. Using a plain class prevents `vi.restoreAllMocks()` from clearing the implementation between tests.
- Components that use React Router (`NotFound`, `HomeLink`) must be wrapped in a router for tests. Use the shared `renderWithRouter` helper from `src/Tests/test-utils.tsx` rather than wrapping in `MemoryRouter` inline.
- `NotFound.test.tsx` mocks `Math.random` (same as `StarBackground.test.tsx`) because `NotFound` mounts a `StarBackground`.
- `smoke.test.tsx` covers router-level integration using `createMemoryRouter` + `RouterProvider` (not `renderWithRouter`). It tests both routes, the `HomeLink` href, and the full lightbox open/close flow through the live app. Note: React Router v7 has an `AbortSignal` incompatibility with jsdom that prevents navigation assertions — link `href` is verified instead; navigation belongs in E2E tests.

## Code quality

**Prettier** — formats all `src/` files. Config in `.prettierrc`. VS Code formats on save via `.vscode/settings.json` (requires the Prettier extension: `esbenp.prettier-vscode`). Run manually with `npm run format`.

**ESLint** — lints all `src/` files. Config in `eslint.config.js` using the modern flat config format. Uses `typescript-eslint` and `eslint-plugin-react-hooks`. The `no-require-imports` rule is disabled because the dynamic `require()` image pattern is intentional. VS Code shows errors inline via `.vscode/settings.json` (requires the ESLint extension: `dbaeumer.vscode-eslint`). Run manually with `npm run lint`.

## CI / Deployment

`.github/workflows/deploy.yml` runs on every push to `master` and on every pull request targeting `master`, with two jobs. The push trigger has `paths-ignore: ['**.md']`, so a push touching only Markdown (README, docs, CLAUDE.md) skips the workflow entirely and does not deploy; PRs are unaffected.

1. **`ci`** — runs `npm test`, `npm run lint`, and `npx tsc --noEmit`. Runs for both pushes and PRs, so PRs are validated before merge.
2. **`deploy`** — gated by `if: github.event_name == 'push'` so it only runs on push to `master` (never on PRs); also `needs: ci`, so it only runs if `ci` passes. Builds with `npm run build`, then publishes `dist/` via the official GitHub Pages Actions flow: `actions/configure-pages` → `actions/upload-pages-artifact` (`path: ./dist`) → `actions/deploy-pages`. It uses the `github-pages` environment, a `pages` concurrency group, and `pages: write` + `id-token: write` permissions.

GitHub Pages is configured to serve from **GitHub Actions** (Settings → Pages → Source: "GitHub Actions"), not from a branch. There is no longer a `gh-pages` branch — the site is published directly from the build artifact, so nothing needs to be committed to a branch.

## Vite config notes

`vite.config.mjs` contains two plugins:

1. `react()` — standard `@vitejs/plugin-react`
2. `dynamicRequirePlugin` — converts template-literal `require()` calls to `import.meta.glob`

Vitest config is also in `vite.config.mjs` (`test:` key) with `jsdom` environment and `globals: true`.
