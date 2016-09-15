/**
 * compare - compare 2 paths
 *
 * @param {Object{length, slope}} path1
 * @param {Object{length, slope}} path2
 *
 * @return {Boolean} true if path1 > path2
 */
function compare(path1, path2) {
  return path1.length > path2.length ||
        (path1.length === path2.length && path1.slope > path2.slope);
}
module.exports = compare;
