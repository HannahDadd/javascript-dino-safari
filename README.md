# Dinosaur Safari: JavaScript with Node

```
                    __
                   / _)
        _.----._/ /
       /         /
    __/ (  | (  |
   /__.-'|_|--|_|
   🦖 Welcome to Jurassic Node.js 🦕
```

**Mission:** Build rock-solid JavaScript skills while running everything in **Node.js** — from modern syntax and tooling to async patterns, streams, and scalable project structure. HQ has opened the park gates for two intensive days of hands-on tracking.

## Prerequisites

- **Node.js** v20 or newer (`node -v`)
- **pnpm** v10 or newer (`pnpm -v`) — install with `corepack enable && corepack prepare pnpm@latest --activate`
- A code editor (VS Code / Cursor recommended)
- Terminal comfort (`cd`, `pnpm`)

## Setup

```bash
cd javascript-with-node-course
pnpm install
pnpm test          # run all exercise tests (Vitest — many fail until you complete start.js)
pnpm lint          # ESLint
pnpm format        # Prettier
```

This project is a **pnpm monorepo** — each module is its own workspace package under `module-*/`. All shared tooling (Vitest, ESLint, Prettier) lives at the root.

Each **module** has its own `README.md`, **demo** scripts you can run with `node …`, and **exercises** with `start.js` (your work), `start.test.js` (Vitest), and `solution.js` (instructor reference — try the exercise first!).

Shared park data lives in [`data/dinosaurs.json`](data/dinosaurs.json).

## Slides (React + `slide-deck`)

Each module includes a Vite app under `slides/` that renders teaching decks with the workspace package [`slide-deck`](slide-deck/).

```bash
pnpm slides:01          # same pattern :02 … :08
# or
cd module-01-modern-javascript/slides && pnpm dev
```

Build for static hosting: `pnpm --filter @dino-safari/module-01-slides build` (output in `slides/dist/`).

## Schedule

### Day 1 — Foundations of the park

| Block | Module                                                        | Topic                                            |
| ----- | ------------------------------------------------------------- | ------------------------------------------------ |
| 1     | [module-01-modern-javascript](module-01-modern-javascript/)   | Modern JS: ESM, tooling, Vitest, lint, debugging |
| 2     | [module-02-functions](module-02-functions/)                   | Functions: scope, closures, `this`, modules      |
| 3     | [module-03-objects-prototypes](module-03-objects-prototypes/) | Objects & prototypes, Maps/Sets, composition     |
| 4     | [module-04-types-coercion](module-04-types-coercion/)         | Types, coercion, numbers, edge cases             |

### Day 2 — Operations & scale

| Block | Module                                                      | Topic                                            |
| ----- | ----------------------------------------------------------- | ------------------------------------------------ |
| 5     | [module-05-async](module-05-async/)                         | Promises, async/await, concurrency, event loop   |
| 6     | [module-06-functional](module-06-functional/)               | Immutability, composition, practical FP          |
| 7     | [module-07-node-tools](module-07-node-tools/)               | Files, HTTP, streams                             |
| 8     | [module-08-code-organisation](module-08-code-organisation/) | Structure, APIs between modules, errors & config |

## Running tests for a single module

```bash
pnpm --filter @dino-safari/module-01-modern-javascript test
```

Or from within a module directory:

```bash
cd module-01-modern-javascript
pnpm test
```

Or target a single exercise from the root:

```bash
pnpm vitest run module-01-modern-javascript/exercises/03-vitest-first-test/start.test.js
```

## Workspace commands

```bash
pnpm -r test                    # run test script in every module
pnpm --filter "module-*" test   # same, by glob
```

## Debugging demos

Use the Node inspector on any demo or exercise:

```bash
node --inspect module-01-modern-javascript/demo/03-debugging.js
```

Then attach your debugger (Chrome: `chrome://inspect`).

## License

Copyright (c) 2026 Nicholas Johnson. **All rights reserved.** This material is not licensed for use, copying, or distribution by others. See [LICENSE](LICENSE).
