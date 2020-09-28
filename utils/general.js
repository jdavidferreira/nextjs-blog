/**
 * Check if and object has not properties.
 * @param {Object} obj
 */
export function isObjectEmpty(obj) {
  return Object.entries(obj).length === 0
}
