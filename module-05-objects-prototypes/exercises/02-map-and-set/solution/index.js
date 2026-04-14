export function createDinoRegistry() {
  const byId = new Map();

  return {
    add(dino) {
      byId.set(dino.trackingId, { ...dino });
    },
    get(trackingId) {
      return byId.get(trackingId);
    },
    findByZone(zone) {
      return [...byId.values()].filter((d) => d.zone === zone);
    },
    listSpecies() {
      const species = new Set([...byId.values()].map((d) => d.species));
      return [...species].sort();
    },
  };
}
