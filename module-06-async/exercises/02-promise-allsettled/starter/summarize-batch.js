/**
 * @param {(() => Promise<unknown>)[]} sensorFns
 */
export async function summarizeSensorBatch(_sensorFns) {
  void _sensorFns;

  const allResults = await Promise.allSettled(_sensorFns.map(fn => fn()));
  return allResults.map(result => {
    if (result.status === 'fulfilled') {
      return { status: 'fulfilled', value: result.value };
    } else {
      return { status: 'rejected', reason: result.reason.message };
    }
  });
}
