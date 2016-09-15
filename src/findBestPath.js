const getValueByPosition = require("./getValueByPosition");
const compare = require("./compare");
const DIRECTIONS = require("./directions.const");

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
  position, // {x, y};
  map // ref
}) {
  let possiblePaths = [position];
  let step = 0;
  const maxPath = {length: 0, slope: 0};
  const originalHeight = getValueByPosition(position, map).height;

  /**
   * findPossiblePath - Finding all possible path at given position
   *
   * @param {Array} cur current possible paths storage - by ref
   * @param {Object} pos Given position
   *
   * @return {Array} modified version of cur
   */
  function findPossiblePath(cur, pos) {
    // console.log(`Process ${dir(pos)}`);
    const currentHeight = getValueByPosition(pos, map).height;
    const {x: pX, y: pY} = pos;
    let haveDirection = false;
    DIRECTIONS.forEach(({x: nX, y: nY}) => {
      const nextPosition = {
        x: pX + nX,
        y: pY + nY
      };
      const nextPoint = getValueByPosition(nextPosition, map);
      if (nextPoint && nextPoint.height < currentHeight) {
        // console.log(`nextPosition ${dir(nextPosition)}: (${nextPoint.height}) - ${currentHeight}`);
        cur.push(nextPosition);
        haveDirection = true;
      }
    });

    if (!haveDirection) {
      const newPath = {
        slope: originalHeight - currentHeight,
        length: step
      };
      if (compare(newPath, maxPath)) {
        Object.assign(maxPath, newPath);
      }
    }

    return cur;
  }

  do {
    // console.log(`Step: ${step} # nextPoints: ${dir(possiblePaths)}`);
    step++;
    possiblePaths = possiblePaths.reduce(findPossiblePath, []);
  } while (possiblePaths.length > 0);
  return maxPath;
}

module.exports = findBestPath;
