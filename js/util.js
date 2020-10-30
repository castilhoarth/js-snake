let random = {
  int: (min, max) => Math.floor(Math.random() * (max - min)) + min,
  coinFlip: (heads, tails) => (Math.random() > 0.5 ? heads : tails),
};

Array.prototype.lastElement = function () {
  return this[this.length - 1];
};

Object.prototype.copy = function () {
  return Object.assign({}, this);
};
