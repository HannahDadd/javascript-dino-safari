import { describe, expect, it } from 'vitest';
import { bumpDangerLevel, renameZone } from './index.js';

describe('01-immutable-records', () => {
  it('bumpDangerLevel does not mutate', () => {
    const dino = {
      name: 'Rex',
      zone: 'CV',
      dangerLevel: 4,
      tags: ['apex'],
    };
    const snapshot = structuredClone(dino);
    const next = bumpDangerLevel(dino, 1);
    expect(dino).toEqual(snapshot);
    expect(next).not.toBe(dino);
    expect(next.dangerLevel).toBe(5);
    expect(next.tags).toEqual(['apex']);
  });

  it('renameZone does not mutate', () => {
    const dino = { name: 'Blue', zone: 'RR', dangerLevel: 3, tags: [] };
    const snapshot = structuredClone(dino);
    const next = renameZone(dino, 'Quarantine Bay');
    expect(dino).toEqual(snapshot);
    expect(next.zone).toBe('Quarantine Bay');
    expect(next.name).toBe('Blue');
  });
});
