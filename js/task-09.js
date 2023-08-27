const changeColorBtn = document.querySelector(".change-color");
const changeSpanColorText = document.querySelector(".color");

function bodyChangeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  changeSpanColorText.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", bodyChangeColor);
