import { describe, expect, it } from 'vitest';
import { createZoneTracker } from './index.js';

describe('01-closure-factory', () => {
  it('isolates state per zone', () => {
    const a = createZoneTracker('A');
    const b = createZoneTracker('B');
    a.logSighting('X', 'one');
    b.logSighting('Y', 'two');
    expect(a.getCount()).toBe(1);
    expect(b.getCount()).toBe(1);
  });

  it('getSightings returns a copy', () => {
    const z = createZoneTracker('Z');
    z.logSighting('1', 'a');
    const first = z.getSightings();
    first.push({ assetId: 'evil', note: 'tamper' });
    expect(z.getCount()).toBe(1);
    expect(z.getSightings()).toEqual([{ assetId: '1', note: 'a' }]);
  });

  it('records order', () => {
    const z = createZoneTracker('Ridge');
    z.logSighting('VLR-1', 'north');
    z.logSighting('VLR-2', 'south');
    expect(z.getSightings()).toEqual([
      { assetId: 'VLR-1', note: 'north' },
      { assetId: 'VLR-2', note: 'south' },
    ]);
  });
});
