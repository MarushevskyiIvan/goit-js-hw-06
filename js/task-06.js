const inputValueEl = document.querySelector("#validation-input");

function onInputValueChange() {
  const size = inputValueEl.dataset.length;

  if (parseInt(size) === inputValueEl.value.length) {
    inputValueEl.classList.remove("invalid");
    inputValueEl.classList.add("valid");

    return;
  }
  inputValueEl.classList.remove("valid");
  inputValueEl.classList.add("invalid");
}

inputValueEl.addEventListener("blur", onInputValueChange);
