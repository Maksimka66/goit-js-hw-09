const formItem = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageArea = document.querySelector('[name="message"]');

const dataItems = {
  email: '',
  message: '',
};

formItem.addEventListener('input', event => {
  event.preventDefault();
  dataItems.email = emailInput.value;
  dataItems.message = messageArea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataItems));
});

const filledForm = localStorage.getItem('feedback-form-state');

if (filledForm !== null) {
  const parsedForm = JSON.parse(filledForm);
  emailInput.value = parsedForm.email;
  messageArea.value = parsedForm.message;
}

formItem.addEventListener('submit', event => {
  event.preventDefault();
  console.log(dataItems);
  localStorage.clear();
  formItem.reset();
});