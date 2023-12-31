const formItem = document.querySelector('.feedback-form');

const dataItems = {
  email: '',
  message: '',
};

formItem.addEventListener('input', event => {
  if (event.target.name === 'email') {
    dataItems.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    dataItems.message = event.target.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(dataItems));
});

document.addEventListener('DOMContentLoaded', () => {
  const filledForm = localStorage.getItem('feedback-form-state');
  if (filledForm !== null) {
    const parsedForm = JSON.parse(filledForm);
    formItem.elements.email.value = parsedForm.email;
    formItem.elements.message.value = parsedForm.message;
  }
});

formItem.addEventListener('submit', event => {
  event.preventDefault();
  if (
    formItem.elements.email.value === '' ||
    formItem.elements.message.value === ''
  ) {
    return;
  }
  dataItems.email = formItem.elements.email.value.trim();
  dataItems.message = formItem.elements.message.value.trim();
  console.log(dataItems);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
