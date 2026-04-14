import { describe, expect, it } from 'vitest';
import { createAlertFn, createTaggedLogger } from './index.js';

describe('02-partial-application', () => {
  it('createAlertFn bakes in severity', () => {
    const warn = createAlertFn('WARN');
    expect(warn('fence stress')).toBe('[WARN] fence stress');
  });

  it('createTaggedLogger prefixes base alert', () => {
    const crit = createAlertFn('CRITICAL');
    const lagoon = createTaggedLogger('LAGOON', crit);
    expect(lagoon('breach')).toBe('LAGOON: [CRITICAL] breach');
  });
});
