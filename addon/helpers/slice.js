import asArray from '../utils/as-array';

export function slice(...args) {
  let array = args.pop();
  return asArray(array).slice(...args);
}

export default slice;
