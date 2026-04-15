/** @param {number[]} numbers */
export const keepEvens = (numbers) => {
  return numbers.filter((num) => num % 2 === 0);
};

/**
 * @param {number[]} a
 * @param {number[]} b
 */
export const overlap = (a, b) => {
  return a.filter((num) => b.includes(num));
};

/** @param {{ species: string, zone: string, dangerLevel: number }[]} dinos */
export const getDangerous = (dinos) => {
  return dinos.filter((dino) => dino.dangerLevel > 5);
};
