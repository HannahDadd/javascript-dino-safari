import { describe, expect, it } from 'vitest';
import { double, greet, buildAlert, tagAll } from './index.js';

describe('01-arrow-functions', () => {
  describe('double', () => {
    it('doubles a positive number', () => {
      expect(double(5)).toBe(10);
    });
    it('doubles zero', () => {
      expect(double(0)).toBe(0);
    });
    it('doubles a negative number', () => {
      expect(double(-3)).toBe(-6);
    });
  });

  describe('greet', () => {
    it('uses default greeting', () => {
      expect(greet('Ellie')).toBe('Hello, Ellie!');
    });
    it('uses custom greeting', () => {
      expect(greet('Malcolm', 'Welcome')).toBe('Welcome, Malcolm!');
    });
  });

  describe('buildAlert', () => {
    it('returns DANGER for level >= 4', () => {
      expect(buildAlert('Raptor Ridge', 5)).toBe('[DANGER] Raptor Ridge');
    });
    it('returns DANGER for level exactly 4', () => {
      expect(buildAlert('Paddock', 4)).toBe('[DANGER] Paddock');
    });
    it('returns OK for level < 4', () => {
      expect(buildAlert('Meadow', 2)).toBe('[OK] Meadow');
    });
  });

  describe('tagAll', () => {
    it('tags multiple names', () => {
      expect(tagAll('SECTOR', 'North', 'South')).toEqual([
        '[SECTOR] North',
        '[SECTOR] South',
      ]);
    });
    it('tags a single name', () => {
      expect(tagAll('VIP', 'Rex')).toEqual(['[VIP] Rex']);
    });
    it('returns empty array with no names', () => {
      expect(tagAll('EMPTY')).toEqual([]);
    });
  });
});
