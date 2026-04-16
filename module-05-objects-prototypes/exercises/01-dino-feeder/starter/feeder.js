/**
 * A feeding station for a park zone.
 * State is stored as properties; methods use `this` to access them.
 */
export const feeder = {
  name: 'Carnivore Canyon Feeder',
  supply: 0,
  feedings: [],

  stock(kg) {
    this.supply += kg;
    return this.supply;
  },

  feed(dinoName, kg) {
    if (kg > this.supply) {
      throw new Error('Not enough food');
    }
    this.supply -= kg;
    this.feedings.push({ dino: dinoName, kg });
    return `Fed ${dinoName} ${kg}kg`;
  },

  remaining() {
    return this.supply;
  },

  log() {
    return this.feedings;
  }
};
