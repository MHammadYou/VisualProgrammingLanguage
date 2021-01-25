const addBtn = document.querySelector("#add");
const blocks = document.querySelector("#blocks");

addBtn.addEventListener("click", () => {
  console.log("Clicked");
  blocks.style.display = "none";
});

console.log(blocks);
