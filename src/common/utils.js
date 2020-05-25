export function debounce(func, delay) {
  return function (...args) {
    if (func.timer) clearTimeout(func.timer);
    func.timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  };
}
 