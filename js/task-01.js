const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);

itemsEl.forEach(item => {
  const title = item.querySelector('h2');
  console.log(`Категория: ${title.textContent}`);

  const itemEl = item.querySelectorAll('li');
  console.log(`Количество элементов: ${itemEl.length}`);
});
