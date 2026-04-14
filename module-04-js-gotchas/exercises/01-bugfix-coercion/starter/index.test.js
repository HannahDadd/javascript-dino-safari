import { describe, it, expect } from 'vitest';
import {
  isUsableReading,
  getZoneName,
  addReadings,
  countTruthy,
  hasItems,
  getTimeout,
} from './index.js';

describe('01-bugfix-coercion', () => {
  describe('isUsableReading', () => {
    it('accepts a normal number', () => {
      expect(isUsableReading(42)).toBe(true);
    });

    it('accepts zero as a valid reading', () => {
      expect(isUsableReading(0)).toBe(true);
    });

    it('accepts a negative number', () => {
      expect(isUsableReading(-10)).toBe(true);
    });

    it('rejects null', () => {
      expect(isUsableReading(null)).toBe(false);
    });

    it('rejects undefined', () => {
      expect(isUsableReading(undefined)).toBe(false);
    });
  });

  describe('getZoneName', () => {
    it('returns the given zone name', () => {
      expect(getZoneName('Alpha')).toBe('Alpha');
    });

    it('keeps an empty string as the zone name', () => {
      expect(getZoneName('')).toBe('');
    });

    it('defaults null to "Unknown"', () => {
      expect(getZoneName(null)).toBe('Unknown');
    });

    it('defaults undefined to "Unknown"', () => {
      expect(getZoneName(undefined)).toBe('Unknown');
    });
  });

  describe('addReadings', () => {
    it('adds two numbers', () => {
      expect(addReadings(10, 20)).toBe(30);
    });

    it('handles string inputs from CSV', () => {
      expect(addReadings('5', '3')).toBe(8);
    });

    it('handles mixed string and number', () => {
      expect(addReadings('7', 3)).toBe(10);
    });
  });

  describe('countTruthy', () => {
    it('counts truthy values in a mixed array', () => {
      expect(countTruthy([1, 0, true, false, 'yes', ''])).toBe(3);
    });

    it('counts all truthy when no falsy present', () => {
      expect(countTruthy([1, 2, 'a'])).toBe(3);
    });

    it('returns 0 for all-falsy', () => {
      expect(countTruthy([0, false, '', null])).toBe(0);
    });
  });

  describe('hasItems', () => {
    it('returns true for a non-empty array', () => {
      expect(hasItems([1, 2, 3])).toBe(true);
    });

    it('returns false for an empty array', () => {
      expect(hasItems([])).toBe(false);
    });

    it('returns true for a single-element array', () => {
      expect(hasItems(['x'])).toBe(true);
    });
  });

  describe('getTimeout', () => {
    it('returns the configured timeout', () => {
      expect(getTimeout({ timeout: 3000 })).toBe(3000);
    });

    it('keeps timeout of 0', () => {
      expect(getTimeout({ timeout: 0 })).toBe(0);
    });

    it('defaults to 5000 when timeout is null', () => {
      expect(getTimeout({ timeout: null })).toBe(5000);
    });

    it('defaults to 5000 when timeout is undefined', () => {
      expect(getTimeout({ timeout: undefined })).toBe(5000);
    });
  });
});
