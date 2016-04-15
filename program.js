var h1 = document.querySelector('h1');
var button = document.querySelector('button');

button.addEventListener('mousedown', function (event) {
  if (h1.innerHTML === 'OFF') {
    h1.innerHTML = 'ON';
    button.innerHTML = 'Switch OFF';
  } else {
    h1.innerHTML = 'OFF';
    button.innerHTML = 'Switch ON';
  }
});
