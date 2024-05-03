export function optional(action) {
  if (typeof action === 'function') {
    return action;
  }

  return (i) => i;
}

export default optional;
