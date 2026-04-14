export function withSwim(dino) {
  return {
    ...dino,
    swim() {
      return `${dino.name} cuts through the water`;
    },
  };
}

export function withFly(dino) {
  return {
    ...dino,
    fly() {
      return `${dino.name} circles above the canopy`;
    },
  };
}

export function withArmor(dino) {
  const armorRating = dino.armorRating ?? 8;
  return {
    ...dino,
    armorRating,
    bash() {
      return `${dino.name} slams with armor ${armorRating}`;
    },
  };
}
