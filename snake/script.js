document.addEventListener('DOMContentLoaded', () => {
  debugger;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let score = 0;
  const snake = [{ x: 10, y: 10 }];
  let food = {x:5, y:5}

  ctx.fillStyle = 'green';
  snake.forEach((segment) => {
    ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
  });

  function moveSnake() {
    const head = { ...snake[0] };

    snake.unshift(head);
    snake.pop();
    checkCollision();
    checkFood();

    drawSnake();
  }

  function checkFood(){
   const head = {...snake[0]}
   if(head.x === food.x && head.y === food.y){
      score++;
      generateFood()
      growSnake()
   }
  }
  function growSnake(){
   const tail = { ...snake[snake.length - 1] };
  const newTail = { ...tail };
  snake.push(newTail);
  }

  function generateFood(){
   food = {
      x : Math.floor(Math.random()* 400/20),
      y : Math.floor(Math.random()* 400/20)
   }
  }
  function checkCollision() {
    if ( collisionWithWall()) {
      return endGame();
    }
  }

  function collisionWithBody() {
    const [head, ...body] = snake;
    return body.some((segment) => segment.x === head.x && segment.y === head.y) && body.length > 0;
  }

  function collisionWithWall() {
    const head = snake[0];
    return head.x < 0 || head.y < 0 || head.x > 380 / 20 || head.y > 400 / 20;
  }

  function endGame() {
   resetGame();
    alert('Game over'+score);
    
  }

  function resetGame() {
   
  }
  function drawSnake() {
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = 'green';
    snake.forEach((segment) => {
      ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });

    ctx.fillStyle='red';
    ctx.fillRect(food.x * 20, food.y*20, 20,20)
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
      snake[0].y -= 1;
      moveSnake();
    } else if (event.key === 'ArrowDown') {
      snake[0].y += 1;
      moveSnake();
    } else if (event.key === 'ArrowLeft') {
      snake[0].x -= 1;
      moveSnake();
    } else if (event.key === 'ArrowRight') {
      snake[0].x += 1;
      moveSnake();
    }
  });
});
