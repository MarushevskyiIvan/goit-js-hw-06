const formEl = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены");
    return;
  }
  console.log(formData);

  event.currentTarget.reset();
}

formEl.addEventListener("submit", onFormSubmit);
