let random = {
  int: (min, max) => Math.floor(Math.random() * (max - min)) + min,
  coinFlip: (heads, tails) => (Math.random() > 0.5 ? heads : tails),
};

let point = {
  isSame: (pointA, pointB) => pointA.x === pointB.x && pointA.y === pointB.y,
  isOutside: (point, xMin, yMin, xMax, yMax) =>
    point.x >= xMax || point.y >= yMax || point.x < xMin || point.y < yMin,
};

Array.prototype.lastElement = function () {
  return this[this.length - 1];
};

Object.prototype.copy = function () {
  return Object.assign({}, this);
};
