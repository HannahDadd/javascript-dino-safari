/**
 * @param {number} delayMs
 */
export function createCancellableTask(_delayMs) {
  void _delayMs;
  // TODO
  return {
    start() {
      return Promise.reject(new Error('TODO'));
    },
    cancel() {},
  };
}
