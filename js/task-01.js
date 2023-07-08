const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`)

itemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const itemsOfCategorie = item.querySelectorAll('li');

    console.log(`Elements: ${itemsOfCategorie.length}`);
})


