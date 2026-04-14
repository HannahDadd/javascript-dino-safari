import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { appendSighting, readSightings } from './index.js';

let tmpDir;

afterEach(async () => {
  if (tmpDir) await rm(tmpDir, { recursive: true, force: true });
  tmpDir = undefined;
});

describe('01-file-io-ndjson', () => {
  it('append + read roundtrip', async () => {
    tmpDir = await mkdtemp(path.join(os.tmpdir(), 'dino-log-'));
    const filePath = path.join(tmpDir, 'nested', 'sightings.ndjson');
    await appendSighting(filePath, { id: '1', zone: 'CV' });
    await appendSighting(filePath, { id: '2', zone: 'RR' });
    const rows = await readSightings(filePath);
    expect(rows).toEqual([
      { id: '1', zone: 'CV' },
      { id: '2', zone: 'RR' },
    ]);
  });
});
