# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

Portfolio app with React Router v7. `src/router.tsx` defines two routes using `createBrowserRouter` with `basename: '/denova-app'`:

- `/` → `App` (home page)
- `*` → `NotFound` (404 page)

`src/index.tsx` renders `<RouterProvider router={router} />`. The router is created at module level in `router.tsx`.

**GitHub Pages SPA routing** — `public/404.html` encodes the requested path as a query param and redirects to `index.html`. A script at the top of `index.html` restores the real path via `history.replaceState` before the app boots, so React Router sees the correct URL.

`App.tsx` loads bundled local data (`src/AppData/AppData.ts`, wrapped in a module-level `Promise.resolve`) via React 19's `use()` hook and passes the array by index to four section components:

- `appData[0]` → `CardOne` (intro/hero)
- `appData[1]` → `CardTwo` (tools & skills gallery)
- `appData[2]` → `CardThree` (projects gallery)
- `appData[3]` → `Footer` (contact/link)

`App.tsx` wraps content in `<Suspense>` (shows `<Loader />` while the data promise is pending) and `<ErrorBoundary>`. Because the data is bundled locally, the promise resolves immediately — these are effectively instant but kept for structure. All UI is built with Styled Components.

## Design system

**Color palette** — the solid palette lives in `src/Components/colors.ts` (the `colors` object) and is imported into styled-components rather than hardcoded. Use the token, not the hex literal. One-off `rgba()` overlays, borders, and shadows (and `StarBackground`'s alpha-templated star colors) stay inline at their usage sites. `Base bg` lives in `index.css` (CSS can't import the TS token).

## Key conventions

**TypeScript types** — shared data-shape interfaces live in `src/AppData/types.ts`. Components use these instead of prop-types.

**Dynamic image requires** — `CardOne`, `CardTwo`, `CardThree`, and `Footer` load images with template literal `require()` calls:

```tsx
src={require(`../AppData/Img/${variable}.png`)}
```

These are intentionally kept as `require()`. A custom Vite plugin in `vite.config.mjs` (`dynamicRequirePlugin`) transforms them to `import.meta.glob` at build time. The `require` function is declared as a global in `src/vite-env.d.ts`. Do not convert them to static imports.

**Lazy loading** — images below the fold (`CardTwo`, `CardThree`, `Footer`) use `loading="lazy"`. The `CardOne` profile photo is above the fold and must not be lazy loaded.

**Data sources** — `src/AppData/AppData.ts` is the app's data source, loaded directly with no network request (the app previously fetched a Postman mock API; that fetch layer was removed for instant loads). `AppData.json` mirrors it as a reference for the data shape.

**IMPORTANT: Whenever `AppData.ts` is changed, `AppData.json` must also be updated to match.** Both files must stay in sync.

**ErrorBoundary** — `ErrorBoundary.tsx` is a class component wrapping `<App>`. It shows the error message and a Retry button (which reloads the page) when a child throws. Retained as a safety net even though the local data load no longer throws; the retry reloads because `appDataPromise` is module-level.

**Claude model** — any Claude API / Anthropic SDK code added to this project must use `claude-opus-4-8`.

## Accessibility conventions

- All images use descriptive `alt` text — never `alt="Icon"`.
- External links (`target="_blank"`) use `rel="noopener noreferrer"` — `CardOne`, `CardTwo`, and `Footer`.
- `LinkFooter` and `HomeLink` have `:hover` (cyan blue glow via `filter: drop-shadow`) and `:focus-visible` outline for keyboard navigation.
- `Lightbox` uses `role="dialog"` and `aria-modal="true"` with `aria-label` set to the image name. It closes on `Escape` keydown.

## Testing conventions

Test conventions live in `src/Tests/CLAUDE.md` (loaded when working on tests). Snapshots are committed — after UI changes run `npx vitest run -u` and commit the updated files.

## Code quality

**ESLint** — lints all `src/` files. Config in `eslint.config.js` using the modern flat config format. Uses `typescript-eslint` and `eslint-plugin-react-hooks`. The `no-require-imports` rule is disabled because the dynamic `require()` image pattern is intentional. VS Code shows errors inline via `.vscode/settings.json` (requires the ESLint extension: `dbaeumer.vscode-eslint`). Run manually with `npm run lint`.

**`typescript` is held at 6.x on purpose — do not bump it to 7.** `typescript-eslint` 8.x declares a peer of `typescript ">=4.8.4 <6.1.0"`, so a major bump makes `npm ci` fail with `ERESOLVE`. This constraint used to live as an `ignore` rule in `.github/dependabot.yml`; that file is gone, so it is recorded here instead. Unblocking it means waiting for `typescript-eslint` to widen the peer range — check `node_modules/@typescript-eslint/eslint-plugin/package.json` → `peerDependencies.typescript` after a minor bump — then raise `typescript` and drop this note. Don't work around it with `--legacy-peer-deps` or `--force`; that installs a combination the linter isn't tested against.

## CI / Deployment

`.github/workflows/deploy.yml` runs on every push to `master` and on every pull request targeting `master`, with two jobs. The push trigger has `paths-ignore: ['**.md']`, so a push touching only Markdown (README, docs, CLAUDE.md) skips the workflow entirely and does not deploy; PRs are unaffected.

1. **`ci`** — runs for both pushes and PRs, so PRs are validated before merge.
2. **`deploy`** — only on push to `master`, and only if `ci` passes.

GitHub Pages is configured to serve from **GitHub Actions** (Settings → Pages → Source: "GitHub Actions"), not from a branch. There is no longer a `gh-pages` branch — the site is published directly from the build artifact, so nothing needs to be committed to a branch.

`.github/workflows/release-please.yml` automates releases: merging its release PR tags `vX.Y.Z` and publishes the GitHub Release — no manual tagging.

**Commits must follow Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`, …) for release-please to detect changes and categorize the changelog.

Deploy and release are decoupled but both ride branch pushes to `master`: `deploy.yml` publishes the site on every non-Markdown push, while `release-please.yml` manages the release PR / release. When the release PR merges, that push both deploys the version-bumped build and triggers release-please to tag and release.

There is **no Dependabot** in this repo — dependency updates are done by hand (`npm outdated` → bump → PR). It was removed deliberately; don't re-add `.github/dependabot.yml`.
