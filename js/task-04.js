const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const spanValueEl = document.querySelector("#value");

let counterValue = 0;

function incrementValueEl() {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
}
function decrementValueEl() {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
}

incrementBtnEl.addEventListener("click", incrementValueEl);
decrementBtnEl.addEventListener("click", decrementValueEl);
