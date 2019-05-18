let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.onclick = function(event) {
  // координаты поля в окне
  var fieldCoords = this.getBoundingClientRect();
  // координаты левого-верхнего  угла без рамки
  var fieldInnerCoords = {
    top: fieldCoords.top + field.clientTop,
    left: fieldCoords.left + field.clientLeft
  };
  //координаты средины мяча
  var ballCoords = {
    top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
    left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
  };
  //чтоб не вылазил за рамки
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
}