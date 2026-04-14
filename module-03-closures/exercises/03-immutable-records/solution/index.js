export function bumpDangerLevel(dino, delta) {
  return { ...dino, dangerLevel: dino.dangerLevel + delta };
}

export function renameZone(dino, newZone) {
  return { ...dino, zone: newZone };
}
