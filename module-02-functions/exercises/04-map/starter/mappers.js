/** @param {number[]} numbers */
export const doubleAll = (numbers) => {
  return numbers.map((num) => num * 2);
};

/** @param {{ species: string, zone: string }[]} dinos */
export const extractNames = (dinos) => {
  return dinos.map((dino) => dino.species);
};

/** @param {{ species: string, zone: string, dangerLevel: number }[]} dinos */
export const formatSightings = (dinos) => {
  return dinos.map((dino) => `${dino.species} (${dino.zone}) - Danger Level: ${dino.dangerLevel}`);
};
