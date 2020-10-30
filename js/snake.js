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
    let lastTail = snake.shouldGrow ? snake.tail.lastElement().copy() : null;

    for (let i = snake.tail.length - 1; i >= 0; i--) {
      let follower = snake.tail[i];
      let leaderPosition = i == 0 ? snake.position : snake.tail[i - 1];
      follower.x = leaderPosition.x;
      follower.y = leaderPosition.y;
    }

    if (snake.shouldGrow) {
      snake.tail.push(lastTail);
      snake.shouldGrow = false;
    }

    snake.position.x += snake.velocity.x;
    snake.position.y += snake.velocity.y;
  };

  snake.collided = (board, food) => {
    if (point.isOutside(snake.position, 0, 0, board.size, board.size))
      return board;
    if (point.isSame(snake.position, food)) return food;
    if (snake.tail.some((tail) => point.isSame(tail, snake.position)))
      return snake;
  };

  snake.eat = (food) => {
    food.eaten = true;
    snake.shouldGrow = true;
  };

  snake.changeDirection = (newVelocity) => {
    let sumX = snake.velocity.x + newVelocity.x;
    let sumY = snake.velocity.y + newVelocity.y;
    // checking for invalid direction change
    if (sumX == 0 && sumY == 0) return;
    snake.velocity = newVelocity;
  };

  snake.isIn = (position) =>
    (snake.position.x == position.x && snake.position.y == position.y) ||
    snake.tail.some((t) => t.x == position.x && t.y == position.y);

  return snake;
};
