const ulCategoriesEl = document.querySelector("#categories");
const liItemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${ulCategoriesEl.children.length}`);

liItemEl.forEach((element) => {
  console.dir(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
