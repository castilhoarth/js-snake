let createGame = (gameSpeed) => {
  let game = {};
  let running = false;
  let interval;

  game.start = (snake, board) => {
    if (running) return;
    running = true;

    interval = setInterval(() => game.gameStep(snake, board), gameSpeed);
  };

  game.gameStep = (snake, board) => {
    const food = board.currentFood();
    snake.forward();

    if (snake.collided(board)) return game.over();

    board.render();
    board.renderSnake(snake);
    board.renderFood(food);
  };

  game.over = () => {
    console.log("game over");
    running = false;
    clearInterval(interval);
  };

  return game;
};
