export function invoke(methodName, ...args) {
  let obj = args.pop();

  if (Array.isArray(obj)) {
    return function () {
      let promises = obj.map((item) => item[methodName]?.(...args));

      return Promise.all(promises);
    };
  }

  return function () {
    return obj[methodName]?.(...args);
  };
}

export default invoke;
