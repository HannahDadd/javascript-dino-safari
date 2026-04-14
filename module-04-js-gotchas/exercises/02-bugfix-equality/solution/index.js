export function isNullish(val) {
  return val == null;
}

export function betterTypeof(val) {
  if (val === null) return 'null';
  if (Array.isArray(val)) return 'array';
  return typeof val;
}

export function isActuallyNaN(val) {
  return Number.isNaN(val);
}

export function isArray(val) {
  return Array.isArray(val);
}

export function areSameValue(a, b) {
  return Object.is(a, b);
}
