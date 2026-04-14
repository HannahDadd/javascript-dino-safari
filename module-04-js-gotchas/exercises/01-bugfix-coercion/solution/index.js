export function isUsableReading(reading) {
  if (reading === null || reading === undefined) return false;
  return true;
}

export function getZoneName(zone) {
  return zone ?? 'Unknown';
}

export function addReadings(a, b) {
  return Number(a) + Number(b);
}

export function countTruthy(flags) {
  let count = 0;
  for (const flag of flags) {
    if (flag) count++;
  }
  return count;
}

export function hasItems(arr) {
  return arr.length > 0;
}

export function getTimeout(config) {
  return config.timeout ?? 5000;
}
