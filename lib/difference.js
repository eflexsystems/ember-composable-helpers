/**
 * Finds the difference between 2 arrays.
 *
 * let a = [1, 2, 3];
 * let b = [3, 4, 5];
 * difference(a, b) === [1, 2];
 * difference(b, a) === [4, 5];
 *
 * @public
 * @param  {Array} a
 * @param  {Array} b
 * @return {Array} diff
 */
module.exports = function difference(a, b) {
  const seen = [];
  const diff = [];

  for (let i = 0; i < b.length; i++) {
    seen[b[i]] = true;
  }

  for (let j = 0; j < a.length; j++) {
    if (!seen[a[j]]) {
      diff.push(a[j]);
    }
  }

  return diff;
};
