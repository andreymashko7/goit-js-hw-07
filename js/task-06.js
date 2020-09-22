const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputCheckValid);

function inputCheckValid(evt) {
  if (
    evt.currentTarget.getAttribute('data-length') >
    evt.currentTarget.value.length
  ) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
}
