const path = require("path");

const findBestPath = require("./findBestPath");
const readMap = require("./readMap");

const map = readMap(path.join(__dirname, '../data/map.txt'));

map.forEach((row, y) => row.forEach((point, x) => {
  console.log(`${x},${y}: ${JSON.stringify(findBestPath({
    position: {x, y},
    map
  }))}`);
}));
