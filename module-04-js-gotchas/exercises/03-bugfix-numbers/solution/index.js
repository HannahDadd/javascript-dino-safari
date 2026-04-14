export function totalPriceCents(prices) {
  let sumCents = 0;
  for (const p of prices) {
    sumCents += Math.round(parseFloat(p) * 100);
  }
  return sumCents;
}

export function parseAge(input) {
  if (typeof input !== 'string') return null;
  const trimmed = input.trim();
  if (trimmed === '' || !/^\d+$/.test(trimmed)) return null;
  return Number(trimmed);
}

export function isStrictlyNaN(x) {
  return Number.isNaN(x);
}

export function safeDivide(a, b) {
  const result = a / b;
  if (!Number.isFinite(result)) return null;
  return result;
}

export function roundTo2(n) {
  return Number(n.toFixed(2));
}
