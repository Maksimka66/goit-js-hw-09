const formItem = document.querySelector('.feedback-form');

const dataItems = {
  email: '',
  message: '',
};

formItem.addEventListener('input', event => {
  dataItems[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(dataItems));
});

document.addEventListener('DOMContentLoaded', () => {
  const filledForm = localStorage.getItem('feedback-form-state');
  if (filledForm !== null) {
    const parsedForm = JSON.parse(filledForm);
    formItem.elements.email.value = parsedForm.email.trim();
    formItem.elements.message.value = parsedForm.message.trim();
    dataItems.email = formItem.elements.email.value.trim();
    dataItems.message = formItem.elements.message.value.trim();
  }
});

formItem.addEventListener('submit', event => {
  event.preventDefault();
  if (
    formItem.elements.email.value === '' ||
    formItem.elements.message.value === ''
  ) {
    console.log('All fields should be filled!');
    return;
  }
  const resultData = {
    email: formItem.elements.email.value.trim(),
    message: formItem.elements.message.value.trim(),
  };
  console.log(resultData);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
