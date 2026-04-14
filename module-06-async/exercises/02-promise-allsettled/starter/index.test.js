import { describe, expect, it } from 'vitest';
import { summarizeSensorBatch } from './index.js';

describe('02-promise-allsettled', () => {
  it('mixes fulfilled and rejected', async () => {
    const out = await summarizeSensorBatch([
      () => Promise.resolve('ridge'),
      () => Promise.reject(new Error('lagoon')),
      () => Promise.resolve('valley'),
    ]);
    expect(out).toEqual([
      { status: 'fulfilled', value: 'ridge' },
      { status: 'rejected', reason: 'lagoon' },
      { status: 'fulfilled', value: 'valley' },
    ]);
  });

  it('non-Error rejection becomes string', async () => {
    const out = await summarizeSensorBatch([() => Promise.reject('offline')]);
    expect(out[0]).toEqual({ status: 'rejected', reason: 'offline' });
  });
});
