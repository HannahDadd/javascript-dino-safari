# Module 2 - Functions, Arrows, and Functional Loops

Functions are the fundamental unit of work in JavaScript. This module covers how to declare them, the compact arrow syntax you'll use constantly, and the array methods - `filter`, `sort`, `map`, `reduce` - that replace most hand-written loops.

By the end of this module you should be able to:

- **Declare functions** three ways: declaration, expression, and arrow.
- **Use default and rest parameters** to write flexible signatures.
- **Pass functions as values** - to other functions, into arrays, wherever.
- **Use `.filter()`** to select elements from an array.
- **Use `.sort()`** with a comparator to order arrays.
- **Use `.map()`** to transform every element.
- **Use `.reduce()`** to fold an array into a single value.
- **Chain** filter, map, and reduce into readable data pipelines.

> **Prerequisites:** You should already be able to write a basic `function` with parameters and `return`, and run Vitest tests (covered in Module 1).

---

## 1. Function basics - declarations, expressions, arrows

```bash
node module-02-functions/demo/01-function-basics
```

### Declarations, expressions, arrows

Three ways to create a function:

```js
// Declaration - hoisted, available anywhere in the scope
function greetRanger(name) {
  return `Welcome, Ranger ${name}.`;
}

// Expression - assigned to a const, not hoisted
const describeDino = function (dino) {
  return `${dino.name} - ${dino.species}`;
};

// Arrow - compact, no own `this`
const double = (n) => n * 2;
```

Arrows shine for callbacks: short, no curly braces needed for single expressions, and no `this` confusion.

### Default parameters

```js
function formatSighting(name, zone = 'Uncharted', risk = 0) {
  return `${name} @ ${zone} (risk ${risk})`;
}
formatSighting('Compy'); // "Compy @ Uncharted (risk 0)"
```

Defaults fill in when the argument is `undefined`. They keep call sites clean - no need to pass values you rarely change.

### Rest parameters

```js
function logAll(label, ...items) {
  for (const item of items) {
    console.log(`${label}: ${item}`);
  }
}
logAll('Zone', 'North', 'South', 'Ridge');
```

`...items` collects all remaining arguments into a real array. Unlike the legacy `arguments` object, rest params are a proper array - you can `.map()` and `.filter()` them directly.

---

## 2. Filter

```bash
node module-02-functions/demo/02-filter
```

`.filter()` returns a **new array** containing only the elements that pass a test:

```js
const evens = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0);
// [2, 4, 6]
```

The callback (the **predicate**) receives each element. Return `true` to keep it, `false` to drop it.

Filter works on objects too:

```js
const dangerous = dinosaurs.filter((d) => d.dangerLevel > 5);
```

You can combine filter with `.includes()` to find overlap between two arrays:

```js
const shared = zoneA.filter((id) => zoneB.includes(id));
```

The original array is never mutated - `.filter()` always returns a fresh array.

---

## 3. Sort

```bash
node module-02-functions/demo/03-sort
```

`.sort()` orders elements **in place** (it mutates the array). Without a comparator, it sorts **lexicographically** - which gives wrong results for numbers:

```js
[10, 1, 21, 2].sort(); // [1, 10, 2, 21] - wrong!
[10, 1, 21, 2].sort((a, b) => a - b); // [1, 2, 10, 21] - correct
```

The comparator function returns a negative number if `a` should come first, positive if `b` should come first, and zero if they're equal.

Sort objects by a numeric field:

```js
dinos.sort((a, b) => b.dangerLevel - a.dangerLevel); // highest first
```

Sort alphabetically with `.localeCompare()`:

```js
dinos.sort((a, b) => a.species.localeCompare(b.species));
```

**Mutation warning:** If you need to keep the original order, spread first: `[...dinos].sort(...)`.

---

## 4. Map

```bash
node module-02-functions/demo/04-map
```

`.map()` transforms **every element** and returns a new array of the same length:

```js
const doubled = [1, 2, 3].map((n) => n * 2); // [2, 4, 6]
```

Extract a single field from objects:

```js
const names = dinosaurs.map((d) => d.species);
// ['Tyrannosaurus', 'Brachiosaurus', 'Velociraptor']
```

Format objects into strings:

```js
const lines = dinosaurs.map((d) => `${d.species} (${d.zone}) - danger: ${d.dangerLevel}`);
```

Like `.filter()`, `.map()` never mutates the original - it returns a fresh array every time.

---

## 5. Reduce

```bash
node module-02-functions/demo/05-reduce
```

`.reduce()` folds an array down to a **single value** - a number, a string, an object, anything. It takes a callback and an initial value for the **accumulator**:

```js
const total = [3, 7, 2, 8].reduce((acc, n) => acc + n, 0); // 20
```

The accumulator carries state between iterations. After each call, whatever you return becomes the new `acc`.

Group items into an object:

```js
const countByZone = dinos.reduce((acc, d) => {
  acc[d.zone] = (acc[d.zone] ?? 0) + 1;
  return acc;
}, {});
// { North: 2, Lake: 2, South: 1 }
```

Find a maximum:

```js
const mostDangerous = dinos.reduce((best, d) =>
  d.dangerLevel > best.dangerLevel ? d : best,
);
```

**Always pass an initial value.** Without one, `.reduce()` on an empty array throws a `TypeError`.

---

## 6. Pipelines - putting it all together

```bash
node module-02-functions/demo/06-pipelines
```

The real power comes from chaining filter, map, and reduce together:

```js
const carnivorePressure = dinosaurs
  .filter((d) => d.diet === 'carnivore' && d.isActive)
  .map((d) => ({ zone: d.zone, danger: d.dangerLevel }))
  .reduce((acc, row) => {
    acc[row.zone] = (acc[row.zone] ?? 0) + row.danger;
    return acc;
  }, {});
```

Read it top to bottom: filter the data, reshape it, fold it into a summary. Each step returns a new value - no mutation, no side effects.

---

## Exercises

| #   | Folder                                                                | What you'll practice                              |
| --- | --------------------------------------------------------------------- | ------------------------------------------------- |
| 1   | [`exercises/01-arrow-functions`](exercises/01-arrow-functions/)       | Arrow syntax, default params, rest params         |
| 2   | [`exercises/02-filter`](exercises/02-filter/)                         | `.filter()` on numbers and objects                |
| 3   | [`exercises/03-sort`](exercises/03-sort/)                             | `.sort()` with numeric and string comparators     |
| 4   | [`exercises/04-map`](exercises/04-map/)                               | `.map()` to double, extract, format               |
| 5   | [`exercises/05-reduce`](exercises/05-reduce/)                         | `.reduce()` to sum, group, find max               |
| 6   | [`exercises/06-migration-pipeline`](exercises/06-migration-pipeline/) | Full pipeline: filter + map + reduce composed     |

Each exercise has a `starter/` folder. To work on an exercise:

```bash
cd module-02-functions/exercises/<exercise>/starter && pnpm install && pnpm test
```

---

## Slides

Teaching deck: from repo root run `pnpm slides:02`, or `cd slides && pnpm dev`.

## Reference

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN: Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
