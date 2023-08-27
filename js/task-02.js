const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredientsEl = document.querySelector("#ingredients");

const liElement = ingredients.map((ingredient) => {
  const newListitem = document.createElement("li");
  newListitem.textContent = ingredient;
  newListitem.classList.add("item");

  return newListitem;
});

ulIngredientsEl.append(...liElement);
console.log(ulIngredientsEl);
