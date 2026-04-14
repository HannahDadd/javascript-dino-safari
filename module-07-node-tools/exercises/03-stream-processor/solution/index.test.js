import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { streamFilterDangerous } from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixture = path.join(__dirname, 'fixture.csv');

describe('03-stream-processor', () => {
  it('filters by danger level', async () => {
    const rows = await streamFilterDangerous(fixture, 4);
    expect(rows).toEqual([
      { trackingId: 'TRX-001', dangerLevel: 5, zone: 'Cretaceous Valley' },
      { trackingId: 'VLR-042', dangerLevel: 4, zone: 'Raptor Ridge' },
    ]);
  });
});
