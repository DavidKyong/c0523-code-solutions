function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name ', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name,':',event.target.value);
}

const userName = document.getElementById('user-name');
const email = document.getElementById('user-email');
const textArea = document.getElementById('user-message');

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
