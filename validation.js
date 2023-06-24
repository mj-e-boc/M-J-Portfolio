const formy = document.querySelector('#form');
const email = document.getElementById('imail');
const erra = document.createElement('span');
formy.appendChild(erra);
const button = formy.querySelector('#submitbutton');
formy.insertBefore(erra, button);
erra.classList.add('error');

formy.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value.toLowerCase() !== email.value) {
    email.classList.add('highlight');
    erra.classList.add('inaction');
    erra.textContent = 'Please Enter the email address in lowercase characters.';
  } else {
    email.classList.remove('highlight');
    erra.classList.remove('inaction');
    erra.textContent = '';
    formy.submit();
    formy.reset();
  }
});
