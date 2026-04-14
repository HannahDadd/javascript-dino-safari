export function withTimeout(promise, timeoutMs) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), timeoutMs);
    promise.then(
      (v) => {
        clearTimeout(t);
        resolve(v);
      },
      (e) => {
        clearTimeout(t);
        reject(e);
      },
    );
  });
}

export async function runWithRetry(task, { maxAttempts, timeoutMs }) {
  let lastErr;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await withTimeout(task(), timeoutMs);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}
