export function reverse(array) {
  if (!Array.isArray(array)) {
    return [array];
  }

  return array.slice(0).reverse();
}

export default reverse;
