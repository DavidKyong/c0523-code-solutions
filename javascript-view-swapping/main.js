const $tabContainer = document.querySelector('.tab-container');
const $elementTab = document.querySelectorAll('.tab');
const $elementView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', clickTab);


function clickTab(event) {
  if(event.target.matches('.tab')) {

    for (let i = 0; i < $elementTab.length; i++) {

      if (event.target === $elementTab[i]) {

        $elementTab[i].className = 'tab active';
      } else {
        $elementTab[i].className = 'tab';
      }
    }

    const dataView = event.target.getAttribute('data-view');

    for (let j = 0; j < $elementView.length; j++) {
      if (dataView === $elementView[j].getAttribute('data-view')) {
        $elementView[j].className = 'view';
      }
      else {
        $elementView[j].className = 'view hidden';
      }
    }
  }
}
