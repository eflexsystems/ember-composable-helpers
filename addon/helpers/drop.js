import asArray from '../utils/as-array';

export function drop(dropAmount, array) {
  return asArray(array).slice(dropAmount);
}

export default drop;
