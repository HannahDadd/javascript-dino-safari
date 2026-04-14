import { appendFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';

export async function appendSighting(filePath, record) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf8');
}

export async function readSightings(filePath) {
  const raw = await readFile(filePath, 'utf8');
  return raw
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}
