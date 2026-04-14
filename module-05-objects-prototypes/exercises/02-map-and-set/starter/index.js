/**
 * @returns {{
 *   add: (dino: { trackingId: string, species: string, zone: string, name?: string }) => void,
 *   get: (trackingId: string) => object | undefined,
 *   findByZone: (zone: string) => object[],
 *   listSpecies: () => string[]
 * }}
 */
export function createDinoRegistry() {
  // TODO
  return {
    add() {},
    get() {
      return undefined;
    },
    findByZone() {
      return [];
    },
    listSpecies() {
      return [];
    },
  };
}
