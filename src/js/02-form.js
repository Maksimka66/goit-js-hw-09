const formItem = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageArea = document.querySelector('[name="message"]');

const dataItems = {
  email: '',
  message: '',
};

const filledForm = localStorage.getItem('feedback-form-state');

if (filledForm !== '') {
  dataItems.email = emailInput.value;
  dataItems.message = messageArea.value;
}

formItem.addEventListener('input', event => {
  event.preventDefault();
  dataItems.email = emailInput.value;
  dataItems.message = messageArea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataItems));
});

formItem.addEventListener('submit', event => {
  event.preventDefault();
  console.log(dataItems);
  formItem.reset();
  localStorage.removeItem('feedback-form-state');
});
