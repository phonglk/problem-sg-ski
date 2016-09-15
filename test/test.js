const assert = require("assert"); // node.js core module
const path = require("path");

const readMap = require("../src/readMap");
const getValueByPosition = require("../src/getValueByPosition");
const findBestPath = require("../src/findBestPath");

let isError = false;
let map;
let bmStart = new Date().getTime();
try {
  map = readMap(path.join(__dirname, '../data/map.txt'));
} catch (e) {
  isError = true;
}
const time = new Date().getTime() - bmStart;

describe('readMap', () => {
  it(`should no error while reading file (${time} ms)`, () => {
    assert.equal(false, isError);
  });
  it('should have 4 rows', () => assert.equal(4, map.length));
  it('should have 4 columns - row 1', () => assert.equal(4, map[0].length));
  it('should have 4 columns - row 2', () => assert.equal(4, map[1].length));
  it('should have 4 columns - row 3', () => assert.equal(4, map[2].length));
  it('should have 4 columns - row 4', () => assert.equal(4, map[3].length));
});

describe('getValueByPosition', () => {
  it('should read correct value at [0][0]', () => {
    assert.equal(4, getValueByPosition({x: 0, y: 0}, map).height);
  });
  it('should read correct value at [2][0]', () => {
    assert.equal(6, getValueByPosition({x: 0, y: 2}, map).height);
  });
});

describe('findBestPath', () => {
  /* eslint-disable max-len */
  it('should return correct path at [0][0]', () => {
    assert.deepEqual({length: 1, slope: 2}, findBestPath({position: {x: 0, y: 0}, map}));
  });
  it('should return correct path at [1][0]', () => {
    assert.deepEqual({length: 4, slope: 7}, findBestPath({position: {x: 1, y: 0}, map}));
  });
  it('should return correct path at [2][0]', () => {
    assert.deepEqual({length: 1, slope: 4}, findBestPath({position: {x: 2, y: 0}, map}));
  });
  it('should return correct path at [3][0]', () => {
    assert.deepEqual({length: 0, slope: 0}, findBestPath({position: {x: 3, y: 0}, map}));
  });
  it('should return correct path at [0][1]', () => {
    assert.deepEqual({length: 0, slope: 0}, findBestPath({position: {x: 0, y: 1}, map}));
  });
  it('should return correct path at [1][1]', () => {
    assert.deepEqual({length: 3, slope: 4}, findBestPath({position: {x: 1, y: 1}, map}));
  });
  it('should return correct path at [2][1]', () => {
    assert.deepEqual({length: 4, slope: 8}, findBestPath({position: {x: 2, y: 1}, map}));
  });
  it('should return correct path at [3][1]', () => {
    assert.deepEqual({length: 0, slope: 0}, findBestPath({position: {x: 3, y: 1}, map}));
  });
  it('should return correct path at [0][2]', () => {
    assert.deepEqual({length: 3, slope: 5}, findBestPath({position: {x: 0, y: 2}, map}));
  });
  it('should return correct path at [1][2]', () => {
    assert.deepEqual({length: 2, slope: 2}, findBestPath({position: {x: 1, y: 2}, map}));
  });
  it('should return correct path at [2][2]', () => {
    assert.deepEqual({length: 1, slope: 1}, findBestPath({position: {x: 2, y: 2}, map}));
  });
  it('should return correct path at [3][2]', () => {
    assert.deepEqual({length: 2, slope: 4}, findBestPath({position: {x: 3, y: 2}, map}));
  });
  it('should return correct path at [0][3]', () => {
    assert.deepEqual({length: 0, slope: 0}, findBestPath({position: {x: 0, y: 3}, map}));
  });
  it('should return correct path at [1][3]', () => {
    assert.deepEqual({length: 3, slope: 3}, findBestPath({position: {x: 1, y: 3}, map}));
  });
  it('should return correct path at [2][3]', () => {
    assert.deepEqual({length: 0, slope: 0}, findBestPath({position: {x: 2, y: 3}, map}));
  });
  it('should return correct path at [3][3]', () => {
    assert.deepEqual({length: 3, slope: 5}, findBestPath({position: {x: 3, y: 3}, map}));
  });
  /* eslint-disable max-len */
});
