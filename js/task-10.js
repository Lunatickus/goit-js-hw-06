function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = inputEl.value;
  const boxes = [];
  let boxWidth = 20;
  let boxHeight = 20;
  for(let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${boxWidth += 10}px`;
    boxEl.style.height = `${boxHeight += 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    boxes.push(boxEl);
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);