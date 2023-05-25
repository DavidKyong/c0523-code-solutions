const $popUp = document.querySelector('.pop-up');
const $redButton = document.querySelector('.middle');
const $question = document.querySelector('.question');
const $blueButton = document.querySelector('.blue');
const $overlay = document.querySelector('.overlay');



$blueButton.addEventListener('click', () => {
    $popUp.className = 'pop-up-1';
    $redButton.className = 'no-1';
    $question.className = 'question-1';
    $overlay.className = 'overlay-1';
});

$redButton.addEventListener('click', () => {
    $popUp.className = 'pop-up';
    $redButton.className = 'no';
    $question.className = 'question';
    $overlay.className = 'overlay';
});
