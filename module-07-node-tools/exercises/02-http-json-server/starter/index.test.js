import { afterEach, describe, expect, it } from 'vitest';
import { createDinoApiServer } from './index.js';

function listen(server) {
  return new Promise((resolve) => {
    server.listen(0, () => resolve(server.address().port));
  });
}

describe('02-http-json-server', () => {
  let server;

  afterEach(async () => {
    await new Promise((resolve) => server?.close(() => resolve()));
    server = undefined;
  });

  it('health + list + detail + 404', async () => {
    const dinosaurs = [
      { trackingId: 'A', name: 'One' },
      { trackingId: 'B', name: 'Two' },
    ];
    server = createDinoApiServer({ dinosaurs });
    const port = await listen(server);
    const base = `http://127.0.0.1:${port}`;

    const health = await fetch(`${base}/health`);
    expect(health.status).toBe(200);
    expect(await health.json()).toEqual({ ok: true });

    const all = await fetch(`${base}/dinosaurs`);
    expect(all.status).toBe(200);
    expect(await all.json()).toEqual(dinosaurs);

    const one = await fetch(`${base}/dinosaurs/A`);
    expect(one.status).toBe(200);
    expect(await one.json()).toEqual(dinosaurs[0]);

    const missing = await fetch(`${base}/dinosaurs/nope`);
    expect(missing.status).toBe(404);
    expect(await missing.json()).toEqual({ error: 'not_found' });

    const bad = await fetch(`${base}/unknown-route`);
    expect(bad.status).toBe(404);
  });
});
