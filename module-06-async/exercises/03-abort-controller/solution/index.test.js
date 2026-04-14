import { afterEach, describe, expect, it, vi } from 'vitest';
import { createCancellableTask } from './index.js';

describe('03-abort-controller', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('resolves when not cancelled', async () => {
    vi.useFakeTimers();
    const task = createCancellableTask(100);
    const p = task.start('rex');
    vi.advanceTimersByTime(120);
    await expect(p).resolves.toBe('done:rex');
  });

  it('rejects aborted', async () => {
    vi.useFakeTimers();
    const task = createCancellableTask(100);
    const p = task.start('blue');
    vi.advanceTimersByTime(20);
    task.cancel();
    vi.advanceTimersByTime(200);
    await expect(p).rejects.toThrow('aborted');
  });

  it('cancel without start is safe', () => {
    const task = createCancellableTask(10);
    expect(() => task.cancel()).not.toThrow();
  });
});
