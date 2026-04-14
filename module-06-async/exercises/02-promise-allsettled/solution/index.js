export async function summarizeSensorBatch(sensorFns) {
  const settled = await Promise.allSettled(sensorFns.map((fn) => fn()));
  return settled.map((r) => {
    if (r.status === 'fulfilled') {
      return { status: 'fulfilled', value: r.value };
    }
    const reason = r.reason;
    return {
      status: 'rejected',
      reason: String(reason?.message ?? reason),
    };
  });
}
