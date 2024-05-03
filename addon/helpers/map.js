import { isEmpty } from '@ember/utils';
import asArray from '../utils/as-array';

export function map(callback, array) {
  if (isEmpty(callback)) {
    return [];
  }

  return asArray(array).map(callback);
}

export default map;
