function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputValueEl = document.querySelector("#controls");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");

createBtnEl.addEventListener("click", createBoxes);
// destroyBtnEl.addEventListener("click", event);

const inputValue = inputValueEl.firstElementChild.value;

const box = `<div class="" width="30px" height="30px"></div>`;

createBoxes(inputValue);
