// Usage: node test-recursive.js ../data/map.txt
const path = require("path");

const findBestPath = require("./findBestPath.recursive");
const readMap = require("./readMap");
const compare = require("./compare");

let file = process.argv[process.argv.length - 1];
const map = readMap(path.join(__dirname, file));
const maxPath = {length: 0, slope: 0};

map.forEach((row, y) => row.forEach((point, x) => {
  const bestPath = findBestPath({position: {x, y}, map});
  if (compare(bestPath, maxPath)) Object.assign(maxPath, bestPath);
}));

// console.log(findBestPath({position: {x: 1, y: 1}, map}));
console.log(maxPath);
