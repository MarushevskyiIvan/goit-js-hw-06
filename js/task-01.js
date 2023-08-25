const ulCategories = document.querySelector("#categories");

console.log(`Number of categories: ${ulCategories.children.length}`);

const liItem = document.querySelectorAll(".item");

liItem.forEach((element) => {
  console.dir(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
