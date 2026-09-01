# TODO

## Commit the pending Prettier fix

`src/Components/ErrorBoundary.tsx` has an uncommitted formatting fix sitting on
`master` (an inline `style` object split across lines to satisfy the print width).
`npm run lint`, `npx prettier --check src/`, and `npm run typecheck` all pass with it
applied.

Every change in this repo has landed through a PR, so this wants a branch and a PR
rather than a direct commit to `master`:

```bash
git checkout -b chore/prettier-error-boundary
git commit -am "style: format ErrorBoundary per Prettier"
gh pr create --fill
```
