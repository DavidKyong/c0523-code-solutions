
const $light = document.querySelector('.light');
const $lightCircle = document.querySelector('.light-circle');
let color = true;


$lightCircle.addEventListener('click', () => {
  if (color) {
    $light.className = 'dark';
    $lightCircle.className = 'dark-circle';
    color = false;
  } else  {
    $light.className = 'light';
    $lightCircle.className = 'light-circle';
    color = true;
  }
});
