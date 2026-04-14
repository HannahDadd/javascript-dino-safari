/**
 * @param {string} severity
 * @returns {(message: string) => string}
 */
export function createAlertFn(_severity) {
  void _severity;
  // TODO
  return () => '';
}

/**
 * @param {string} tag
 * @param {(message: string) => string} baseAlertFn
 */
export function createTaggedLogger(_tag, _baseAlertFn) {
  void _tag;
  void _baseAlertFn;
  // TODO
  return () => '';
}
