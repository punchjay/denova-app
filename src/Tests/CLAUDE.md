# Testing conventions

- Every component has a test in `src/Tests/` with two cases: `renders without crashing` and `renders correctly` (snapshot).
- `App.test.tsx` wraps renders in `await act()` to handle the `use()` hook correctly. It renders the real bundled `AppData` (no mock needed since the app loads local data).
- `ErrorBoundary.test.tsx` tests the no-error path, error-thrown path, and verifies the Retry button calls `window.location.reload()`.
- `App.test.tsx` includes a content assertion test verifying all four sections render expected text from the local data. `CardOne`'s assertion uses `PAR_ONE` (not `HEADER_ONE`) because `HEADER_ONE` is typed out by `TypeWriter` and starts empty.
- Snapshots are committed. Run `npx vitest run -u` to update them after UI changes, then commit the updated files.
- `StarBackground.test.tsx` and `App.test.tsx` mock `Math.random` via `vi.spyOn(Math, 'random').mockReturnValue(0.5)` so star positions are deterministic and snapshots are stable across runs.
- `setupTests.ts` stubs `IntersectionObserver` with a plain class (not `vi.fn()`) that fires the callback immediately on `observe()`. Using a plain class prevents `vi.restoreAllMocks()` from clearing the implementation between tests.
- Components that use React Router (`NotFound`, `HomeLink`) must be wrapped in a router for tests. Use the shared `renderWithRouter` helper from `src/Tests/test-utils.tsx` rather than wrapping in `MemoryRouter` inline.
- `NotFound.test.tsx` mocks `Math.random` (same as `StarBackground.test.tsx`) because `NotFound` mounts a `StarBackground`.
- `smoke.test.tsx` covers router-level integration using `createMemoryRouter` + `RouterProvider` (not `renderWithRouter`). It tests both routes, the `HomeLink` href, and the full lightbox open/close flow through the live app. Note: React Router v7 has an `AbortSignal` incompatibility with jsdom that prevents navigation assertions — link `href` is verified instead; navigation belongs in E2E tests.
