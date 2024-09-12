const intervalID = setInterval(countdown, 1000);
const $h1 = document.querySelector('h1');
let count = 4;

function countdown() {
  $h1.textContent = count;
  count = count - 1;

  if (count < 0) {
    clearInterval(intervalID);
    $h1.textContent = '~Earth Beeeeeloooooooww';
  }
}
