import { describe, expect, it } from 'vitest';
import { createDinoRegistry } from './index.js';

describe('02-map-and-set', () => {
  it('add, get, overwrite', () => {
    const r = createDinoRegistry();
    r.add({ trackingId: 'A', species: 'Trex', zone: 'Z1', name: 'Rex' });
    expect(r.get('A')?.name).toBe('Rex');
    r.add({ trackingId: 'A', species: 'Trex', zone: 'Z1', name: 'Rex II' });
    expect(r.get('A')?.name).toBe('Rex II');
  });

  it('findByZone', () => {
    const r = createDinoRegistry();
    r.add({ trackingId: '1', species: 'A', zone: 'north' });
    r.add({ trackingId: '2', species: 'B', zone: 'south' });
    r.add({ trackingId: '3', species: 'C', zone: 'north' });
    const north = r.findByZone('north');
    expect(north).toHaveLength(2);
    expect(north.map((d) => d.trackingId).sort()).toEqual(['1', '3']);
  });

  it('listSpecies sorted unique', () => {
    const r = createDinoRegistry();
    r.add({ trackingId: '1', species: 'Zebra', zone: 'z' });
    r.add({ trackingId: '2', species: 'Apple', zone: 'z' });
    r.add({ trackingId: '3', species: 'Apple', zone: 'z' });
    expect(r.listSpecies()).toEqual(['Apple', 'Zebra']);
  });
});
