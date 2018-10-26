import 'jest-preset-angular';
Object.defineProperty(window, 'CSS', { value: () => ({}) });
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  },
});
