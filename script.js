
let canvasGrid = 16;
let colorPicker = "#0000FF";
let toolMode = 'color';



function setNewGrid(newGrid) {
    canvasGrid = newGrid;
    setupGrid(newGrid);
}

function setNewColor(newColor) {
    colorPicker = newColor;
}

function setNewMode(newMode) {
    toolMode = newMode;
}

const rangePicker = document.getElementById('range-picker');
const eraseButton = document.getElementById('eraser');
const colorMode = document.getElementById('colormode');
const rainbowMode = document.getElementById('rainbowmode');
const clearButton = document.getElementById('clear');
const grids = document.querySelector('.grid');

rangePicker.oninput = (e) => setNewGrid(e.target.value);
eraseButton.onclick = () => setNewMode('erase');
colorMode.onclick = () => setNewMode('color');
colorMode.oninput = (e) => setNewColor(e.target.value);
rainbowMode.onclick = () => setNewMode('rainbow');
clearButton.onclick = () => reloadGrid();


function setupGrid(newSize) {
grids.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
grids.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;

for (let i = 1; i < (newSize * newSize) + 1; i++)
{
    const newGrid = document.createElement('div');
    newGrid.addEventListener('mouseover', activateTools)
    newGrid.classList.add('grid-items');
    grids.appendChild(newGrid);
}

}


function clearGrid() {
    grids.innerHTML = '';
}



function activateTools(e) {

    if (e.type === 'mouseover') {
        if ( toolMode === 'color') {
            e.target.style.backgroundColor = colorPicker;
        } else if ( toolMode === 'rainbow') {
            e.target.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " 
      + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
       } else if (toolMode === 'erase') {
        e.target.style.backgroundColor = "#fffdf1";
       } 
        } 
}

function reloadGrid() {
    clearGrid();
    setupGrid(canvasGrid);
}

window.onload = () => {
    reloadGrid();
}







