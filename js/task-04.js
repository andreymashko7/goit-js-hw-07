const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
// document.querySelector('#value');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  value.textContent = counterValue.value;
  console.log(counterValue);
});

incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  value.textContent = counterValue.value;
  console.log(counterValue);
});
