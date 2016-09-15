const getValueByPosition = require("./getValueByPosition");
const DIRECTIONS = require("./directions.const");

const dir = (o) => JSON.stringify(o);

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
      const newSlope = originalHeight - currentHeight;
      const pathLength = step;
      if (pathLength > maxPath.length ||
        (pathLength === maxPath.length && newSlope > maxPath.slope)) {
        maxPath.length = pathLength;
        maxPath.slope = newSlope;
      }
    }

    return cur;
  }

  do {
    // console.log(`Step: ${step} # nextPoints: ${dir(possiblePaths)}`);
    possiblePaths = possiblePaths.reduce(findPossiblePath, []);
    step++;
  } while (possiblePaths.length > 0);
  return maxPath;
}

module.exports = findBestPath;
