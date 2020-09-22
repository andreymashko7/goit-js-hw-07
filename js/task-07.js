const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeFontStyleInput);

function onChangeFontStyleInput(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
