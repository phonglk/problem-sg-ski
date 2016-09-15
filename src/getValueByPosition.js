module.exports = getValueByPosition;

/**
 * getValueByPosition -
 *
 * @param {Number}   position.x horizontal axis
 * @param {Number}   position.y vertical axis
 * @param {Array}   map horizontal axis
 *
 * @return {Number} value at position [y][x]
 */
function getValueByPosition({x, y}, map) {
  if (typeof map[y] !== 'undefined' && typeof map[y][x] !== 'undefined') {
    return map[y][x];
  }
  return false;
}
