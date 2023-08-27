const inputNameEl = document.querySelector("#name-input");
const spanOutputNameEl = document.querySelector("#name-output");

function onTextInputChandge(event) {
  if (event.currentTarget.value === "") {
    spanOutputNameEl.textContent = "Anonymous";
    return;
  }
  spanOutputNameEl.textContent = event.currentTarget.value;
}
inputNameEl.addEventListener("input", onTextInputChandge);
