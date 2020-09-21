// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество
// элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const list = document.querySelector('#categories');
const titleEl = document.querySelector('h2');
const itemsEl = document.querySelectorAll('.item');
const liEl = document.querySelectorAll('li');

// const box = list.forEach(categoryEl => {
//   const nameCategory = titleEl.querySelector(`h2`);
//   console.log(`Категория: ${nameCategory}`);
// });
// list.forEach(element => {
//   // const nameCategory = titleEl.querySelector(`h2`);

// });
function box() {
  console.log(`В списке ${itemsEl.length} категории.`);
  console.log(`Категория: ${titleEl.textContent}`);
  console.log(`Количество элементов: ${liEl.length}`);
}

list.foreach(box, {});
console.log(list);
// console.log(`В списке ${itemsEl.length} категории.`);
// console.log(`Категория: ${titleEl.textContent}`);
// console.log(`Количество элементов: ${liEl.length}`);
