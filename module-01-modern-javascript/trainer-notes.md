# Module 1 — Trainer Notes

## Goal

Get everyone from zero to a working modern JS workflow: run scripts, split code into modules, install packages, run tests, attach a debugger. Everything after this module assumes students can do all of these.

## Demo walkthrough

### 01 — Hello World

- Confirm `node -v` works for everyone.
- `node module-01-modern-javascript/demo/01-hello-world` — one `console.log`, instant win.
- Point out: `node` runs a file, `console.log` writes to stdout. That's the whole mental model for now.

### 02 — Syntax fundamentals

- Skip for experienced groups. Useful for mixed rooms to level-set.
- `const` vs `let` — no `var`, ever.
- Three loop forms: `for...of` (most common), classic `for` (when you need an index), `while` (condition-based).
- Ask someone to change a loop bound, predict what happens, run it.

### 03 — ESM basics

- Open `park-info.js` and `index.js` side by side.
- Named exports: `{ braces }`, names must match exactly. Ask: "What happens if you typo `PARK_NAME`?" (you get `undefined`, no error).
- Default export: can use any name on the import side — that's why many teams avoid defaults.
- Point out `"type": "module"` in `package.json` — without it, Node falls back to CommonJS (`require`).

### 04 — Package scripts + npm

- Live-code in a scratch folder if time allows:
  - `pnpm init` → show the generated `package.json`.
  - `pnpm add picocolors` → show `node_modules/`, show the new `dependencies` entry.
  - Add a `"start"` script, run it with `pnpm start`.
- Run the demo: `node module-01-modern-javascript/demo/04-package-scripts`.
- Then run via the script: `pnpm demo:scripts -- --sector=ridge --verbose`.
- Show `process.env.npm_lifecycle_event` — it's set only when running via a script.
- Explain `node_modules/.bin` on PATH: that's why `vitest` and `eslint` work inside scripts without global install.

### 05 — Vitest intro

- **Emphasise this one.** Every exercise from here on has a `.test.js` file. Students need to be comfortable running and reading tests before they leave this module.
- Run the tests live: `pnpm vitest run module-01-modern-javascript/demo/05-vitest-intro/alert.test.js`.
- Break one test on purpose — change an expected string. Show how Vitest highlights the diff.
- Walk through `describe` / `it` / `expect` structure.
- Mention watch mode briefly: `pnpm vitest module-01-modern-javascript/demo/05-vitest-intro/alert.test.js` (no `run`).

### 06 — Debugging

- Run with `--inspect`, attach Chrome DevTools or IDE debugger.
- Set a breakpoint inside the `for` loop in `averageWeightKg`.
- Step through — ask the group to spot the bug (`<=` should be `<`).
- The bug is subtle: `undefined?.weightKg ?? 0` adds zero silently, so no crash, just a wrong answer.
- Takeaway: complex state (loops, objects, arrays) → debugger beats `console.log`.

## Exercises

| # | Folder | Key skills | Notes |
|---|--------|-----------|-------|
| 1 | `01-package-scripts` | `pnpm init`, adding scripts, `pnpm test` | Reinforces demo 04. Students edit a `package.json`. |
| 2 | `02-vitest-contract` | `??` defaults, template literals, Vitest | First time students write code *to pass a test*. Reinforces demo 05. |
| 3 | `03-esm-imports` | Import from Node built-in, npm, local module | Ties demos 03 + 04 together. Uses `node:path`, `picocolors`, local `risk-levels.js`. |

## Timing

- Demos 01–04: ~30–40 min (less if skipping demo 02).
- Demo 05 (Vitest): ~15 min — don't rush this, it pays off all course.
- Demo 06 (debugging): ~10 min.
- Exercises: ~30–45 min for all three.
- Total: roughly 1.5–2 hours including Q&A.

## Common issues

- **`ERR_MODULE_NOT_FOUND`**: student forgot `.js` extension on a relative import. ESM requires it.
- **`SyntaxError: Cannot use import`**: missing `"type": "module"` in `package.json`.
- **`pnpm` not found**: `corepack enable && corepack prepare pnpm@latest --activate`.
- **Vitest "no test files found"**: wrong path, or running from the wrong directory.
- **Debugger won't attach**: firewall, wrong Chrome tab, or missing `--inspect` flag.

## What this module does NOT cover

These topics have their own modules later:

- Destructuring, spread/rest, `?.`, `??` in depth → Module 4 (JS Gotchas) or as-needed in exercises.
- `async` / `await` → Module 6.
- `fs`, `path`, `http` → Module 7.
- Project structure and code organisation → Module 8.
