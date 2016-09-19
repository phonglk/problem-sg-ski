// Usage: node test-recursive.js ../data/map.txt
const path = require("path");

const OOA = require("./OOA");
const ooa = new OOA();

let file = process.argv[process.argv.length - 1];
const filePath = path.join(__dirname, file);

ooa.readMap(filePath);
console.log(ooa.find());
