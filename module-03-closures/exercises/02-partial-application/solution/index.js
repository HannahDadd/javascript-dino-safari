export function createAlertFn(severity) {
  return (message) => `[${severity}] ${message}`;
}

export function createTaggedLogger(tag, baseAlertFn) {
  return (message) => `${tag}: ${baseAlertFn(message)}`;
}
