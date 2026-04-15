/**
 * @param {string} zoneName
 * @returns {{
 *   logSighting: (assetId: string, note: string) => void,
 *   getSightings: () => { assetId: string, note: string }[],
 *   getCount: () => number
 * }}
 */
export function createZoneTracker(_zoneName) {
  void _zoneName;
  const sightings = [];
  
  return {

    logSighting(assetId, note) {
      sightings.push({ assetId, note });
    },
    
    getSightings() {
      return [...sightings];
    },
    
    getCount() {
      return sightings.length;
    },
  };
}
