const addBtn = document.querySelector<HTMLElement>("#add");
const blocks = document.querySelector<HTMLElement>("#blocks");

if (addBtn && blocks) {
  blocks.classList.toggle("blocks-toggle");
  addBtn.addEventListener("click", () => {
    blocks.classList.toggle("blocks-toggle");
  });
}
