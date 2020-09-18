const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listSelectedById = document.querySelector('#ingredients');

const productsContainerEl = ingridient => {
  const nameEl1 = document.createElement('li');
  nameEl1.textContent = 'Картошка';

  const nameEl2 = document.createElement('li');
  nameEl2.textContent = 'Грибы';

  const nameEl3 = document.createElement('li');
  nameEl3.textContent = 'Чеснок';

  const nameEl4 = document.createElement('li');
  nameEl4.textContent = 'Помидоры';

  const nameEl5 = document.createElement('li');
  nameEl5.textContent = 'Зелень';

  const nameEl6 = document.createElement('li');
  nameEl6.textContent = 'Приправы';

  const element = nameEl1.append(
    nameEl2,
    nameEl3,
    nameEl3,
    nameEl4,
    nameEl5,
    nameEl6,
  );

  console.log(nameEl1);
  return element;
};

const finish = ingredients.map(productsContainerEl);

listSelectedById.append(...finish);
// console.log(finish);

// const nameEl1 = document.createElement('li');
// nameEl1.textContent = 'Картошка';

// const nameEl2 = document.createElement('li');
// nameEl2.textContent = 'Грибы';

// const nameEl3 = document.createElement('li');
// nameEl3.textContent = 'Чеснок';

// const nameEl4 = document.createElement('li');
// nameEl4.textContent = 'Помидоры';

// const nameEl5 = document.createElement('li');
// nameEl5.textContent = 'Зелень';

// const nameEl6 = document.createElement('li');
// nameEl6.textContent = 'Приправы';

// productsContainerEl.append(...elements);
