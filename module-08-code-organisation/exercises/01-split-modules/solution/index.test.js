import { describe, expect, it } from 'vitest';
import { compileDigest } from './index.js';

describe('01-split-modules', () => {
  it('normalizes zones and counts high alerts', () => {
    const digest = compileDigest(
      [' ridge ', 'RIDGE', 'valley', ' ', ''],
      [
        { zone: 'ridge', level: 5 },
        { zone: 'ridge', level: 2 },
        { zone: 'valley', level: 4 },
        { zone: 'unknown', level: 1 },
      ],
    );

    expect(digest).toEqual({
      zones: ['RIDGE', 'VALLEY'],
      alertsByZone: { ridge: 1, valley: 1 },
    });
  });
});
