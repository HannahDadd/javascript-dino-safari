import { describe, it, expect } from 'vitest';
import {
  totalPriceCents,
  parseAge,
  isStrictlyNaN,
  safeDivide,
  roundTo2,
} from './index.js';

describe('03-bugfix-numbers', () => {
  describe('totalPriceCents', () => {
    it('sums simple prices to cents', () => {
      expect(totalPriceCents(['10.00', '5.00'])).toBe(1500);
    });

    it('handles the classic 0.1 + 0.2 trap', () => {
      expect(totalPriceCents(['0.10', '0.20'])).toBe(30);
    });

    it('handles many small values without drift', () => {
      const prices = Array.from({ length: 100 }, () => '0.01');
      expect(totalPriceCents(prices)).toBe(100);
    });

    it('handles mixed decimal places', () => {
      expect(totalPriceCents(['12.10', '3.99', '0.01'])).toBe(1610);
    });
  });

  describe('parseAge', () => {
    it('parses a clean integer string', () => {
      expect(parseAge('25')).toBe(25);
    });

    it('rejects a string with trailing letters', () => {
      expect(parseAge('12abc')).toBeNull();
    });

    it('rejects an empty string', () => {
      expect(parseAge('')).toBeNull();
    });

    it('rejects a non-numeric string', () => {
      expect(parseAge('hello')).toBeNull();
    });

    it('parses "08" correctly as 8', () => {
      expect(parseAge('08')).toBe(8);
    });

    it('rejects float strings', () => {
      expect(parseAge('12.5')).toBeNull();
    });
  });

  describe('isStrictlyNaN', () => {
    it('returns true for NaN', () => {
      expect(isStrictlyNaN(NaN)).toBe(true);
    });

    it('returns false for undefined', () => {
      expect(isStrictlyNaN(undefined)).toBe(false);
    });

    it('returns false for a string', () => {
      expect(isStrictlyNaN('hello')).toBe(false);
    });

    it('returns false for null', () => {
      expect(isStrictlyNaN(null)).toBe(false);
    });

    it('returns false for a number', () => {
      expect(isStrictlyNaN(0)).toBe(false);
    });
  });

  describe('safeDivide', () => {
    it('divides normally', () => {
      expect(safeDivide(10, 2)).toBe(5);
    });

    it('returns null for division by zero', () => {
      expect(safeDivide(1, 0)).toBeNull();
    });

    it('returns null for 0 / 0 (NaN)', () => {
      expect(safeDivide(0, 0)).toBeNull();
    });

    it('returns null for -1 / 0 (-Infinity)', () => {
      expect(safeDivide(-1, 0)).toBeNull();
    });

    it('handles negative division', () => {
      expect(safeDivide(-10, 2)).toBe(-5);
    });
  });

  describe('roundTo2', () => {
    it('rounds to 2 decimal places', () => {
      expect(roundTo2(3.456)).toBe(3.46);
    });

    it('returns a number, not a string', () => {
      expect(typeof roundTo2(3.456)).toBe('number');
    });

    it('keeps whole numbers as numbers', () => {
      expect(roundTo2(10)).toBe(10);
    });

    it('a rounded result plus a number gives a number, not string concat', () => {
      expect(roundTo2(1.005) + 1).toBeGreaterThan(1);
      expect(typeof (roundTo2(1.005) + 1)).toBe('number');
    });
  });
});
