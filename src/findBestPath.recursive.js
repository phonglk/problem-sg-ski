const getValueByPosition = require("./getValueByPosition");
const compare = require("./compare");
const DIRECTIONS = require("./directions.const");
const DEFAULT_PATH = {length: 0, slope: 0, lowestHeight: 0};
/**
 * findBestPath - Find best Path at given position
 * criteria: longest path, highest slope
 *
 * @param {Object}   position given position
 * @param {Array}    map      map
 *
 * @return {Object}  Best path
 */
function findBestPath({
    position // {x, y};
  , map // ref
  // , logPrefix = ''
}) {
  global.stepCounter++;
  const currentPoint = getValueByPosition(position, map);
  const currentHeight = currentPoint.height;
  // console.log(`${logPrefix}findBestPath ${JSON.stringify(position)} - ${currentHeight}`);
  if (currentPoint.path === null) {
    currentPoint.path = DIRECTIONS.reduce((maxPath, {x: nX, y: nY}) => {
      const nextPosition = {
        x: position.x + nX,
        y: position.y + nY
      };
      const nextPoint = getValueByPosition(nextPosition, map);
      if (nextPoint !== false && nextPoint.height < currentHeight) {
        const nextPath = findBestPath({position: nextPosition, map});
        if (compare(nextPath, maxPath)) return nextPath;
      }
      return maxPath;
    }, Object.assign({}, DEFAULT_PATH, {lowestHeight: currentHeight}));
  }
  // console.log(`${logPrefix}lowestHeight: ${path.lowestHeight}`);
  return {
    length: currentPoint.path.length + 1,
    slope: currentHeight - currentPoint.path.lowestHeight,
    lowestHeight: currentPoint.path.lowestHeight
  };
}

module.exports = findBestPath;
