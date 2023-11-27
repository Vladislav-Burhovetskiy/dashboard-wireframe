const textBtn = document.querySelector(".text-open-btn");
const addBtn = document.querySelector(".text-add-btn");
const textList = document.querySelector(".text-list");
const textBox = document.querySelector(".text-box");
const text = document.querySelector(".text");

textBtn.addEventListener("click", toggle);

function toggle() {
  text.classList.toggle("open");
  addBtn.style.display = text.classList.contains("open") ? "block" : "none";
}

addBtn.addEventListener("click", () => {
  if (textBox.value) {
    textList.innerHTML += `<li>${textBox.value}</li>`;
    textBox.value = "";
  }
});
