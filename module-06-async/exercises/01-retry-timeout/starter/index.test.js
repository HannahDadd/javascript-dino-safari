import { afterEach, describe, expect, it, vi } from 'vitest';
import { runWithRetry, withTimeout } from './index.js';

describe('01-retry-timeout', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('withTimeout resolves when fast enough', async () => {
    vi.useFakeTimers();
    const p = withTimeout(
      new Promise((r) => setTimeout(() => r('ok'), 10)),
      50,
    );
    vi.advanceTimersByTime(15);
    await expect(p).resolves.toBe('ok');
  });

  it('withTimeout rejects on timeout', async () => {
    vi.useFakeTimers();
    const p = withTimeout(
      new Promise((r) => setTimeout(() => r('late'), 100)),
      20,
    );
    vi.advanceTimersByTime(25);
    await expect(p).rejects.toThrow('timeout');
  });

  it('runWithRetry succeeds after transient failures', async () => {
    let n = 0;
    const task = () =>
      new Promise((resolve, reject) => {
        n++;
        if (n < 3) reject(new Error('glitch'));
        else resolve('ping');
      });

    await expect(
      runWithRetry(task, { maxAttempts: 5, timeoutMs: 50 }),
    ).resolves.toBe('ping');
    expect(n).toBe(3);
  });

  it('runWithRetry throws last error after attempts exhausted', async () => {
    const task = () => Promise.reject(new Error('always-down'));
    await expect(
      runWithRetry(task, { maxAttempts: 2, timeoutMs: 50 }),
    ).rejects.toThrow('always-down');
  });
});
