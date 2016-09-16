const assert = require("assert"); // node.js core module
const path = require("path");

const readMap = require("../src/readMap");
const findBestPath = require("../src/findBestPath.recursive");

const map = readMap(path.join(__dirname, '../data/map.txt'));

const pick = (({length, slope}) => ({length, slope}));

describe('findBestPath', () => {
  /* eslint-disable max-len */
  it('should return correct path at [0][0]', () => {
    assert.deepEqual({length: 2, slope: 2}, pick(findBestPath({position: {x: 0, y: 0}, map})));
  });
  it('should return correct path at [1][0]', () => {
    assert.deepEqual({length: 5, slope: 7}, pick(findBestPath({position: {x: 1, y: 0}, map})));
  });
  it('should return correct path at [2][0]', () => {
    assert.deepEqual({length: 2, slope: 4}, pick(findBestPath({position: {x: 2, y: 0}, map})));
  });
  it('should return correct path at [3][0]', () => {
    assert.deepEqual({length: 1, slope: 0}, pick(findBestPath({position: {x: 3, y: 0}, map})));
  });
  it('should return correct path at [0][1]', () => {
    assert.deepEqual({length: 1, slope: 0}, pick(findBestPath({position: {x: 0, y: 1}, map})));
  });
  it('should return correct path at [1][1]', () => {
    assert.deepEqual({length: 4, slope: 4}, pick(findBestPath({position: {x: 1, y: 1}, map})));
  });
  it('should return correct path at [2][1]', () => {
    assert.deepEqual({length: 5, slope: 8}, pick(findBestPath({position: {x: 2, y: 1}, map})));
  });
  it('should return correct path at [3][1]', () => {
    assert.deepEqual({length: 1, slope: 0}, pick(findBestPath({position: {x: 3, y: 1}, map})));
  });
  it('should return correct path at [0][2]', () => {
    assert.deepEqual({length: 4, slope: 5}, pick(findBestPath({position: {x: 0, y: 2}, map})));
  });
  it('should return correct path at [1][2]', () => {
    assert.deepEqual({length: 3, slope: 2}, pick(findBestPath({position: {x: 1, y: 2}, map})));
  });
  it('should return correct path at [2][2]', () => {
    assert.deepEqual({length: 2, slope: 1}, pick(findBestPath({position: {x: 2, y: 2}, map})));
  });
  it('should return correct path at [3][2]', () => {
    assert.deepEqual({length: 3, slope: 4}, pick(findBestPath({position: {x: 3, y: 2}, map})));
  });
  it('should return correct path at [0][3]', () => {
    assert.deepEqual({length: 1, slope: 0}, pick(findBestPath({position: {x: 0, y: 3}, map})));
  });
  it('should return correct path at [1][3]', () => {
    assert.deepEqual({length: 4, slope: 3}, pick(findBestPath({position: {x: 1, y: 3}, map})));
  });
  it('should return correct path at [2][3]', () => {
    assert.deepEqual({length: 1, slope: 0}, pick(findBestPath({position: {x: 2, y: 3}, map})));
  });
  it('should return correct path at [3][3]', () => {
    assert.deepEqual({length: 4, slope: 5}, pick(findBestPath({position: {x: 3, y: 3}, map})));
  });
  /* eslint-disable max-len */
});
