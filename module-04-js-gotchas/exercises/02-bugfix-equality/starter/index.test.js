import { describe, it, expect } from 'vitest';
import {
  isNullish,
  betterTypeof,
  isActuallyNaN,
  isArray,
  areSameValue,
} from './index.js';

describe('02-bugfix-equality', () => {
  describe('isNullish', () => {
    it('returns true for null', () => {
      expect(isNullish(null)).toBe(true);
    });

    it('returns true for undefined', () => {
      expect(isNullish(undefined)).toBe(true);
    });

    it('returns false for 0', () => {
      expect(isNullish(0)).toBe(false);
    });

    it('returns false for empty string', () => {
      expect(isNullish('')).toBe(false);
    });

    it('returns false for false', () => {
      expect(isNullish(false)).toBe(false);
    });
  });

  describe('betterTypeof', () => {
    it('returns "null" for null', () => {
      expect(betterTypeof(null)).toBe('null');
    });

    it('returns "array" for an array', () => {
      expect(betterTypeof([1, 2])).toBe('array');
    });

    it('returns "array" for an empty array', () => {
      expect(betterTypeof([])).toBe('array');
    });

    it('returns "number" for a number', () => {
      expect(betterTypeof(42)).toBe('number');
    });

    it('returns "string" for a string', () => {
      expect(betterTypeof('hi')).toBe('string');
    });

    it('returns "undefined" for undefined', () => {
      expect(betterTypeof(undefined)).toBe('undefined');
    });

    it('returns "boolean" for a boolean', () => {
      expect(betterTypeof(true)).toBe('boolean');
    });
  });

  describe('isActuallyNaN', () => {
    it('returns true for NaN', () => {
      expect(isActuallyNaN(NaN)).toBe(true);
    });

    it('returns false for undefined', () => {
      expect(isActuallyNaN(undefined)).toBe(false);
    });

    it('returns false for a string', () => {
      expect(isActuallyNaN('hello')).toBe(false);
    });

    it('returns false for null', () => {
      expect(isActuallyNaN(null)).toBe(false);
    });

    it('returns false for a number', () => {
      expect(isActuallyNaN(42)).toBe(false);
    });
  });

  describe('isArray', () => {
    it('returns true for an array', () => {
      expect(isArray([1, 2, 3])).toBe(true);
    });

    it('returns true for an empty array', () => {
      expect(isArray([])).toBe(true);
    });

    it('returns false for a string', () => {
      expect(isArray('hello')).toBe(false);
    });

    it('returns false for null', () => {
      expect(isArray(null)).toBe(false);
    });

    it('returns false for a plain object', () => {
      expect(isArray({ length: 3 })).toBe(false);
    });
  });

  describe('areSameValue', () => {
    it('returns true for identical numbers', () => {
      expect(areSameValue(1, 1)).toBe(true);
    });

    it('returns true for NaN vs NaN', () => {
      expect(areSameValue(NaN, NaN)).toBe(true);
    });

    it('returns false for +0 vs -0', () => {
      expect(areSameValue(0, -0)).toBe(false);
    });

    it('returns false for different values', () => {
      expect(areSameValue(1, 2)).toBe(false);
    });

    it('returns true for identical strings', () => {
      expect(areSameValue('abc', 'abc')).toBe(true);
    });
  });
});
