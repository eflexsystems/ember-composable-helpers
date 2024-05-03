import asArray from '../utils/as-array';

export function flatten(array) {
  return asArray(array).flat(Infinity);
}

export default flatten;
