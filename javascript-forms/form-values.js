const contactForm = document.getElementById('contact-form');


function submitForm(event) {
  event.preventDefault();



  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;

const messageData = {
  name: name,
  email: email,
  message: message
};

  console.log('messageData:', messageData);
  event.target.reset();

  }


contactForm.addEventListener('submit', submitForm);
