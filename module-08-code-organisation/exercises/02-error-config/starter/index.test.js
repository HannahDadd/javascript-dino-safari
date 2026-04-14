import { describe, expect, it } from 'vitest';
import { AppError, formatLogLine, loadConfig } from './index.js';

describe('02-error-config', () => {
  it('AppError carries code', () => {
    const err = new AppError('NOT_FOUND', 'missing');
    expect(err).toBeInstanceOf(Error);
    expect(err.code).toBe('NOT_FOUND');
    expect(err.message).toBe('missing');
  });

  it('loadConfig validates env', () => {
    expect(() => loadConfig({})).toThrow(AppError);
    try {
      loadConfig({});
    } catch (e) {
      expect(e.code).toBe('CONFIG_MISSING');
    }

    try {
      loadConfig({ PARK_NAME: 'Safari', API_PORT: 'nope' });
    } catch (e) {
      expect(e.code).toBe('CONFIG_INVALID');
    }

    const cfg = loadConfig({ PARK_NAME: 'DinoWorld' });
    expect(cfg).toEqual({ parkName: 'DinoWorld', apiPort: 8080 });

    const cfg2 = loadConfig({ PARK_NAME: 'X', API_PORT: '3000' });
    expect(cfg2.apiPort).toBe(3000);
  });

  it('formatLogLine includes sorted meta', () => {
    expect(formatLogLine('INFO', 'boot', { zone: 'CV', id: '1' })).toBe(
      '[INFO] boot | id=1 zone=CV',
    );
    expect(formatLogLine('WARN', 'slow')).toBe('[WARN] slow');
  });
});
