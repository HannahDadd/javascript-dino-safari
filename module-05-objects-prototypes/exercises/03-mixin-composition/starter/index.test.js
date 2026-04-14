import { describe, expect, it } from 'vitest';
import { withArmor, withFly, withSwim } from './index.js';

describe('03-mixin-composition', () => {
  it('withSwim does not mutate', () => {
    const base = { name: 'Splash' };
    const next = withSwim(base);
    expect(base.swim).toBeUndefined();
    expect(next.swim()).toBe('Splash cuts through the water');
  });

  it('stacks capabilities', () => {
    const base = { name: 'Mega', armorRating: 10 };
    const stacked = withFly(withArmor(withSwim(base)));
    expect(stacked.swim()).toContain('Mega');
    expect(stacked.fly()).toContain('Mega');
    expect(stacked.bash()).toBe('Mega slams with armor 10');
  });

  it('withArmor default rating', () => {
    const d = withArmor({ name: 'Anky' });
    expect(d.armorRating).toBe(8);
    expect(d.bash()).toBe('Anky slams with armor 8');
  });
});
