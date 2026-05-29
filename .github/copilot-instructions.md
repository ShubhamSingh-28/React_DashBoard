# Copilot Cloud Agent Instructions

## Repository overview
- This is a Vite + React dashboard UI project (no backend service in this repository).
- Entry point: `src/main.jsx`.
- Main page composition: `src/App.jsx`.
- Reusable UI sections live in `src/components/*.jsx`.

## Fast start for cloud agents
1. Install dependencies:
   - `npm ci`
2. Run local dev server when needed:
   - `npm run dev`
3. Validate changes:
   - `npm run lint`
   - `npm run build`

## Code and tooling conventions
- Use existing React function components and JSX style used under `src/components`.
- Keep changes minimal and localized; this is primarily a UI/layout codebase.
- Do not introduce new frameworks or state libraries unless explicitly requested.
- ESLint config is in `eslint.config.js` and linting targets `*.js` and `*.jsx`.

## Validation notes
- There is currently no test script in `package.json`.
- `npm run build` succeeds on the current baseline.
- Vite may report a chunk-size warning during build; this is informational unless the task is about bundle optimization.

## Errors encountered and work-arounds
- Error encountered while running `npm run lint` on a clean baseline:
  - `src/App.jsx` has `no-unused-vars` failures (`useState` and several `recharts` imports are imported but unused).
- Work-around used:
  - Treat this as a pre-existing baseline lint failure when onboarding.
  - For tasks touching `src/App.jsx`, remove or use unused imports in that file so lint can pass for the changed area.
