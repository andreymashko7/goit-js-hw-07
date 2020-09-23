const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputCheckValid);

// function inputCheckValid(evt) {
//   if (
//     evt.currentTarget.getAttribute('data-length') >
//     evt.currentTarget.value.length
//   ) {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   } else {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   }
// }

function inputCheckValid(evt) {
  if (evt.currentTarget.value.length === 6) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    // inputEl.classList.replace('invalid', 'valid');
  }
}

// elem.classList.replace(oldClass, newClass)
// - заменяет существующий класс на указанный
