const inputValueEl = document.querySelector("#font-size-control");
const textSizeValueEl = document.querySelector("#text");

function textVal() {
  const fontSizeValue = inputValueEl.value;

  textSizeValueEl.style.fontSize = parseInt(fontSizeValue) + "px";
}

inputValueEl.addEventListener("input", textVal);
