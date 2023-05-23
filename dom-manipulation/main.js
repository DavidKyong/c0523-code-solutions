let numClick = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickButton = document.querySelector('.click-count');

$hotButton.addEventListener('click', () => {
  numClick++;
  $clickButton.textContent = 'Clicks: ' + numClick;
  if (numClick < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numClick < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numClick < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numClick < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numClick < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
);
