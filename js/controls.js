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

  let commands = [];
  controls.bind = () => {
    window.addEventListener("keydown", (evt) => {
      if (!controls[evt.key]) return;

      let newVelocity = controls[evt.key];
      if (commands.length > 2) commands = [newVelocity];
      else commands.push(newVelocity);
    });
  };

  controls.issuedCommand = () => commands.shift();

  return controls;
};
