export class AppError extends Error {
  // TODO: accept (code, message)
  constructor() {
    super('TODO');
    this.name = 'AppError';
  }
}

/**
 * @param {NodeJS.ProcessEnv} env
 */
export function loadConfig(_env) {
  void _env;
  throw new Error('TODO');
}

export function formatLogLine(_level, _message, _meta) {
  void _level;
  void _message;
  void _meta;
  return '';
}
