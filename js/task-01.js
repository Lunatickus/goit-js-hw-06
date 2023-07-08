const itemsEl = document.querySelectorAll('.item');

let countOfCategories = 0;

itemsEl.forEach(() => {
    countOfCategories += 1;
});

console.log(`Number of categories: ${countOfCategories}`)

itemsEl.forEach(item => {
    console.log(item.firstElementChild.textContent);
    const itemsOfCategorie = item.querySelectorAll('li');
    let countOfItems = 0;

    itemsOfCategorie.forEach(() => {
        countOfItems += 1;
    });

    console.log(`Elements: ${countOfItems}`);
})


