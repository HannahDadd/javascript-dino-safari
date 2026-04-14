# Exercise — Arrow functions and defaults

**Mission briefing:** Write small utility functions using arrow syntax, default parameters, and rest parameters.

## Tasks

Implement in [`starter/index.js`](starter/index.js):

1. **`double(n)`** — returns `n * 2`. One-liner arrow.
2. **`greet(name, greeting = 'Hello')`** — returns `` `${greeting}, ${name}!` ``. Uses a default parameter.
3. **`buildAlert(zone, level)`** — returns `"[DANGER] zone"` if `level >= 4`, otherwise `"[OK] zone"`. Block-body arrow.
4. **`tagAll(tag, ...names)`** — returns an array of `"[tag] name"` strings. Uses a rest parameter.

## Verify

```bash
cd starter && pnpm install && pnpm test
```

Reference: [`solution/index.js`](solution/index.js).
