const inputEl = document.querySelector('#name-input');
const outputTextEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    outputTextEl.textContent = event.currentTarget.value;
  }
  outputTextEl.textcontent = 'незнакомец';
}
