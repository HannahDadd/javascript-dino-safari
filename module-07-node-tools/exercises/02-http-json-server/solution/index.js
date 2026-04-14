import http from 'node:http';

export function createDinoApiServer({ dinosaurs }) {
  const byId = new Map(dinosaurs.map((d) => [d.trackingId, d]));

  return http.createServer((req, res) => {
    const url = new URL(req.url ?? '/', 'http://127.0.0.1');
    const parts = url.pathname.split('/').filter(Boolean);

    const sendJson = (status, body) => {
      res.writeHead(status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(body));
    };

    if (req.method === 'GET' && parts[0] === 'health' && parts.length === 1) {
      sendJson(200, { ok: true });
      return;
    }

    if (req.method === 'GET' && parts[0] === 'dinosaurs' && parts.length === 1) {
      sendJson(200, dinosaurs);
      return;
    }

    if (req.method === 'GET' && parts[0] === 'dinosaurs' && parts.length === 2) {
      const hit = byId.get(parts[1]);
      if (!hit) {
        sendJson(404, { error: 'not_found' });
        return;
      }
      sendJson(200, hit);
      return;
    }

    sendJson(404, { error: 'not_found' });
  });
}
