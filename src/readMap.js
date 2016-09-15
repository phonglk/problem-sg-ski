const fs = require("fs");

/**
 * readMap - read the file and return a map
 *
 * @param {type} file path
 *
 * @return {type} map
 */
function readMap(file) {
  const content = fs.readFileSync(file).toString().split("\n");
  const map = content.slice(1)
                     .map(line => line.split(" ").map(v => (
                       {
                         height: parseInt(v, 10),
                         path: null
                       }
                     )));
  return map;
}

module.exports = readMap;
