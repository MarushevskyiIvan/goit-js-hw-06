const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

const liElement = ingredients.map((ingredient) => {
  const newList = document.createElement("li");
  newList.textContent = ingredient;
  newList.classList.add("item");

  return newList;
});

console.log(liElement);

ulIngredients.append(...liElement);
