function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);

}

  const $clickButton = document.querySelector('.click-button');
  $clickButton.addEventListener('click', handleClick);

  function handleMouseover(event) {
    console.log('button hovered');
    console.log('event:', event);
    console.log('event.target:', event.target);
  }

  const $mouseOver = document.querySelector('.hover-button');
  $mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
