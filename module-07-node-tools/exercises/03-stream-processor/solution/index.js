import { createReadStream } from 'node:fs';
import readline from 'node:readline';

export async function streamFilterDangerous(filePath, minDanger) {
  const rl = readline.createInterface({ input: createReadStream(filePath) });
  const out = [];
  let first = true;

  for await (const line of rl) {
    if (first) {
      first = false;
      continue;
    }
    if (!line.trim()) continue;
    const [trackingId, dangerRaw, zone] = line.split(',');
    const dangerLevel = Number(dangerRaw);
    if (Number.isFinite(dangerLevel) && dangerLevel >= minDanger) {
      out.push({ trackingId, dangerLevel, zone });
    }
  }

  return out;
}
