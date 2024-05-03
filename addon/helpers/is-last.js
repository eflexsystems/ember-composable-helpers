export function isLast(checked, array) {
  if (array == null || checked == null) {
    return false;
  }

  return array.at(-1) === checked;
}

export default isLast;
