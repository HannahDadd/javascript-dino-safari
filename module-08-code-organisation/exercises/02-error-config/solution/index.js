export class AppError extends Error {
  /**
   * @param {string} code
   * @param {string} message
   */
  constructor(code, message) {
    super(message);
    this.name = 'AppError';
    this.code = code;
  }
}

export function loadConfig(env) {
  const parkName = env.PARK_NAME?.trim();
  if (!parkName) {
    throw new AppError('CONFIG_MISSING', 'PARK_NAME is required');
  }

  const portRaw = env.API_PORT ?? '8080';
  const port = Number(portRaw);
  if (!Number.isInteger(port) || port <= 0) {
    throw new AppError('CONFIG_INVALID', 'API_PORT must be a positive integer');
  }

  return { parkName, apiPort: port };
}

export function formatLogLine(level, message, meta) {
  if (!meta || Object.keys(meta).length === 0) {
    return `[${level}] ${message}`;
  }
  const parts = Object.keys(meta)
    .sort()
    .map((k) => `${k}=${meta[k]}`);
  return `[${level}] ${message} | ${parts.join(' ')}`;
}
