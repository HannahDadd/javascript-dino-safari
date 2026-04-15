/**
 * Returns the string in uppercase with "!" appended.
 * @param {string} str
 */
export const shout = (str) => {
  return str.toUpperCase() + "!";
};

/**
 * Returns the string in lowercase, wrapped in parentheses.
 * @param {string} str
 */
export const whisper = (str) => {
  return `(${str.toLowerCase()})`;
};

/**
 * Returns "[id] zone" using a template literal.
 * @param {string} id
 * @param {string} zone
 */
export const formatTag = (id, zone) => {
  return `[${id}] ${zone}`;
};

/**
 * Returns true if str includes word, false otherwise.
 * @param {string} str
 * @param {string} word
 */
export const containsWord = (str, word) => {
  return str.includes(word);
};

/**
 * Given "First Last", returns "F.L."
 * Split on space, take first char of each part, uppercase, join with dots, trailing dot.
 * @param {string} fullName
 */
export const initials = (fullName) => {
  const names = fullName.split(" ");
  const initials = names.map(name => name[0].toUpperCase()).join(".");
  return initials + ".";
};
