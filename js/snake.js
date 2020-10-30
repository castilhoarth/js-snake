let createSnake = (controls, board, startSize) => {
  let snake = {
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    tail: [],
    size: startSize,
  };

  snake.spawn = () => {
    let startPosition = {
      x: random.int(snake.size, board.size - snake.size),
      y: random.int(snake.size, board.size - snake.size),
    };
    snake.position = startPosition;

    //velocity
    let randomAxis = random.coinFlip("x", "y");
    let distanceFromAxis = startPosition[randomAxis];
    let distanceToAxisEnd = board.size - startPosition[randomAxis];

    snake.velocity[randomAxis] = distanceFromAxis < distanceToAxisEnd ? 1 : -1;

    //set tail
    let stillAxis = randomAxis == "x" ? "y" : "x";
    for (let i = 1; i < snake.size + 1; i++) {
      let tailSegment = {};
      tailSegment[randomAxis] =
        startPosition[randomAxis] + i * -snake.velocity[randomAxis];
      tailSegment[stillAxis] = startPosition[stillAxis];
      snake.tail.push(tailSegment);
    }

    controls.bind(snake);

    board.renderSnake(snake);
  };

  snake.forward = () => {
    for (let i = snake.tail.length - 1; i >= 0; i--) {
      let follower = snake.tail[i];
      let leaderPosition = i == 0 ? snake.position : snake.tail[i - 1];
      follower.x = leaderPosition.x;
      follower.y = leaderPosition.y;
    }

    snake.position.x += snake.velocity.x;
    snake.position.y += snake.velocity.y;
  };

  snake.collided = (board) =>
    snake.position.x >= board.size ||
    snake.position.y >= board.size ||
    snake.position.x < 0 ||
    snake.position.y < 0;

  snake.changeDirection = (newVelocity) => {
    snake.velocity = newVelocity;
  };

  snake.isIn = (position) =>
    (snake.position.x == position.x && snake.position.y == position.y) ||
    snake.tail.some((t) => t.x == position.x && t.y == position.y);

  return snake;
};
