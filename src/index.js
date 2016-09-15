// Usage: node index.js ../data/map.txt
const path = require("path");

const findBestPath = require("./findBestPath");
const readMap = require("./readMap");
const compare = require("./compare");

let file = process.argv[process.argv.length - 1];
const map = readMap(path.join(__dirname, file));
const maxPath = {length: 0, slope: 0};

map.forEach((row, y) => row.forEach((point, x) => {
  const path = findBestPath({position: {x, y}, map});
  if (compare(path, maxPath)) Object.assign(maxPath, path);
}));

console.log(maxPath);
