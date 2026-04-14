/**
 * TODO: implement immutably (tests freeze inputs).
 * Current code mutates on purpose so you can see the red tests first.
 */
export function bumpDangerLevel(dino, delta) {
  dino.dangerLevel += delta;
  return dino;
}

export function renameZone(dino, newZone) {
  dino.zone = newZone;
  return dino;
}
