const $taskList = document.querySelector('.task-list');




function singleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.nodeName === "BUTTON") {
   console.log('closest .task-list-item', event.target.closest('.task-list-item'));
  }
  const $removing = event.target.closest('.task-list-item');
  removing.remove();
}



$taskList.addEventListener('click', singleClick);
