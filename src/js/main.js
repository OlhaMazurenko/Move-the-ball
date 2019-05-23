let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.addEventListener('click', ()=> {
  let fieldCoords = field.getBoundingClientRect();
  let fieldInnerCoords = {
    top: fieldCoords.top + field.clientTop,
    left: fieldCoords.left + field.clientLeft
  };
  let ballCoords = {
    top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
    left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
  };
 
  if (ballCoords.top < 0) {
    ballCoords.top = 0;
  }

  if (ballCoords.left <0) {
    ballCoords.left = 0;
  }
  //нижняя граница
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }
  //правая граница
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
});
