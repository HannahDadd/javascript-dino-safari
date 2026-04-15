/** @param {number[]} numbers */
export const sum = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

/** @param {{ species: string, zone: string }[]} dinos */
export const countByZone = (dinos) => {
  return dinos.reduce((acc, dino) => { 
    if (acc[dino.zone]) {
      acc[dino.zone] += 1;
    } else {
      acc[dino.zone] = 1;
    }
    return acc;
  }, {});
};

/** @param {{ species: string, dangerLevel: number }[]} dinos */
export const maxDanger = (dinos) => {
  return dinos.reduce((max, dino) => {
    return dino.dangerLevel > max ? dino.dangerLevel : max;
  }, 0);
};
