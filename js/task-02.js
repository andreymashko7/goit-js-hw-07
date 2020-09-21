const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const productEl = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map(element => {
  const itemCreate = document.createElement('li');
  itemCreate.textContent = element;
  return itemCreate;
});

console.log(ingredientsItems);

productEl.append(...ingredientsItems);
