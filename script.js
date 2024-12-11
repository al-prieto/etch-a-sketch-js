const container = document.querySelector("#container");
const buttonSlider = document.querySelector("#slider");
let gridSize = buttonSlider.value;

function generateGrid(gridSize) {
  container.innerHTML = "";
  for (let i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.dataset.darkness = 0;
    cell.style.flex = `1 0 calc(100% / ${gridSize})`;
    cell.classList.add("grid-cell");
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = `rgb(255, 255, 255, ${cell.dataset.darkness})`;
      cell.dataset.darkness = parseFloat(cell.dataset.darkness) + 0.3;
    });
    container.appendChild(cell);
  }
}

buttonSlider.addEventListener("input", () => {
  gridSize = buttonSlider.value;
  generateGrid(gridSize);
});

document.addEventListener("DOMContentLoaded", () => {
  generateGrid(gridSize);
});

document.querySelector("#reset").addEventListener("click", () => {
  generateGrid(gridSize);
});
