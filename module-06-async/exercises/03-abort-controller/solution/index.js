export function createCancellableTask(delayMs) {
  let controller = null;

  return {
    start(value) {
      controller = new AbortController();
      const { signal } = controller;

      return new Promise((resolve, reject) => {
        const onAbort = () => {
          reject(new Error('aborted'));
        };
        signal.addEventListener('abort', onAbort, { once: true });

        const t = setTimeout(() => {
          signal.removeEventListener('abort', onAbort);
          if (!signal.aborted) resolve(`done:${value}`);
        }, delayMs);

        signal.addEventListener(
          'abort',
          () => {
            clearTimeout(t);
          },
          { once: true },
        );
      });
    },
    cancel() {
      controller?.abort();
    },
  };
}
