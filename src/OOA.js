const readMap = require("./readMap");
const getValueByPosition = require("./getValueByPosition");
const compare = require("./compare");
const DEFAULT_PATH = {length: 0, slope: 0, lowestHeight: 0};
const DIRECTIONS = require("./directions.const");

/**
 * Object Oriented Approach
 * *
 * *
 * */
class OOA {
  constructor() {
    this.map = null;
    this._stepCounter = 0;
    this.maxPath = {length: 0, slope: 0};
    this.compare = compare;
  }

  readMap(path) {
    this.map = readMap(path);
  }

  getPoint(position) {
    return getValueByPosition(position, this.map);
  }

  // * getDirections(position, height) {
  //   DIRECTIONS.forEach((maxPath, {x: nX, y: nY}) => {
  //     const nextPosition = {
  //       x: position.x + nX,
  //       y: position.y + nY
  //     };
  //     const nextPoint = this.getPoint(nextPosition);
  //     if (nextPoint !== false && nextPoint.height < height) {
  //       yield nextPoint;
  //     }
  //     return maxPath;
  //   });
  // }

  findBestPath(position) {
    this._stepCounter++;
    const currentPoint = this.getPoint(position);
    const currentHeight = currentPoint.height;
    // console.log(`${logPrefix}findBestPath ${JSON.stringify(position)} - ${currentHeight}`);
    if (currentPoint.path === null) {
      currentPoint.path = DIRECTIONS.reduce((maxPath, {x: nX, y: nY}) => {
        const nextPosition = {
          x: position.x + nX,
          y: position.y + nY
        };
        const nextPoint = this.getPoint(nextPosition);
        if (nextPoint !== false && nextPoint.height < currentHeight) {
          const nextPath = this.findBestPath(nextPosition);
          if (this.compare(nextPath, maxPath)) return nextPath;
        }
        return maxPath;
      }, Object.assign({}, DEFAULT_PATH, {lowestHeight: currentHeight}));
    }
    return {
      length: currentPoint.path.length + 1,
      slope: currentHeight - currentPoint.path.lowestHeight,
      lowestHeight: currentPoint.path.lowestHeight
    };
  }

  find() {
    this.map.forEach((row, y) => row.forEach((point, x) => {
      const bestPath = this.findBestPath({x, y});
      if (this.compare(bestPath, this.maxPath)) {
        Object.assign(this.maxPath, bestPath);
      }
    }));
    console.log(`Operations: ${this._stepCounter}`);
    return this.maxPath;
  }
}

module.exports = OOA;
