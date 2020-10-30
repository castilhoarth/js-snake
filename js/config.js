function createConfig() {
  return {
    gameSpeed: 100, // refresh rate in milli
    pointsPerFood: 10,
    boardSize: 20,
    startSnakeSize: 3,
    keyBindings: {
      up: "ArrowUp",
      down: "ArrowDown",
      left: "ArrowLeft",
      right: "ArrowRight",
    },
  };
}
