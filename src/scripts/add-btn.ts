const addBtn = document.querySelector<HTMLElement>("#add");
const blocks = document.querySelector<HTMLElement>("#blocks");

if (addBtn && blocks) {
  addBtn.addEventListener("click", () => {
    blocks.classList.toggle("blocks-toggle");
  });
}
