let setupControls = (window, keyBindings) => {
  let controls = {};

  let directions = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };

  for (const direction in keyBindings)
    controls[keyBindings[direction]] = directions[direction];

  controls.bind = (snake) =>
    window.addEventListener("keydown", (evt) => {
      if (!controls[evt.key]) return;
      snake.changeDirection(controls[evt.key]);
    });

  return controls;
};
