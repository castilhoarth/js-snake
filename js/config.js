function createConfig() {
  return {
    gameSpeed: 100, // refresh rate in milli
    pointsPerFood: 10,
    boardSize: 20,
    startSnakeSize: 3,
    keyBindings: {
      arrows: {
        up: "ArrowUp",
        down: "ArrowDown",
        left: "ArrowLeft",
        right: "ArrowRight",
      },
      fps: {
        up: "w",
        down: "s",
        left: "a",
        right: "d",
      },
      vim: {
        up: "k",
        down: "j",
        left: "h",
        right: "l",
      },
    },
  };
}
