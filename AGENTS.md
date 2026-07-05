# AGENTS.md — Resume (Emerson Vásquez)

## Project overview

Single-page React + TypeScript + Vite + Tailwind CSS app that renders an interactive digital resume. Resume data is hardcoded as a JS object in `src/App.tsx`.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | `tsc -b && vite build` — typecheck first, then bundle |
| `npm run lint` | oxlint (no type-aware rules enabled yet) |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build + publish via `gh-pages -d dist` to `gh-pages` branch (manual fallback) |

Always run `npm run build` before commit — the build pipeline runs both tsc and vite.

## Key architecture

- **Resume data**: Lives in the `resume` object at `src/App.tsx:4-175`. Edit this object to update content.
- **Entrypoint**: `src/main.tsx` → `src/App.tsx` (all resume rendering in one file)
- **Styling**: Tailwind CSS v3 with `darkMode: 'class'` — toggle by `setDark()` state
- **Base URL**: `/resume/` (configured in `vite.config.ts`)
- **No routing, no state manager, no tests**

## Print / PDF

- Static PDF file at `public/Emerson_Vasquez_Resume.pdf` — linked from the header.
- Regenerate via `npm run build && node scripts/generate-pdf.mjs` (uses Playwright to render the built app).
- The `scripts/generate-pdf.mjs` script starts Vite preview, captures the page, and saves to `public/`.
- To add a new skill category: add to `resume.skills` AND add a color entry to the `colors` map in `SkillBadge` (`src/App.tsx:176-182`).

## Animation patterns

- **`useOnScreen(ref)`** — IntersectionObserver-based hook. Returns `true` when element scrolls into view.
- **Timeline nodes**: `animatedNodes` state tracks which experience entries have been revealed. Observer attaches to each via `data-index`.

## Conventions & gotchas

- `tsconfig.app.json` has `noUnusedLocals: true`, `noUnusedParameters: true`, `verbatimModuleSyntax: true`.
- CSS uses `@tailwind base/components/utilities` — no custom components layer defined.
- `.vscode/*` is gitignored except `.vscode/extensions.json`.
- CI/CD workflow at `.github/workflows/deploy.yml` — builds on push to `main` and deploys to GitHub Pages via `actions/deploy-pages@v4`.
- `npm run deploy` still works as manual fallback.
- Windows PowerShell: use `cmd1; if ($?) { cmd2 }` for sequential commands (no `&&` support).
