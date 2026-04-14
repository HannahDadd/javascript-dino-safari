export const double = (n) => n * 2;

export const greet = (name, greeting = 'Hello') => `${greeting}, ${name}!`;

export const buildAlert = (zone, level) => {
  const tag = level >= 4 ? 'DANGER' : 'OK';
  return `[${tag}] ${zone}`;
};

export const tagAll = (tag, ...names) => names.map((name) => `[${tag}] ${name}`);
