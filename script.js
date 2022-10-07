
// generating 16 X 16 div 
// when hovering over the grid the color of the grid will change into black color
// when multiple color to show off, user have to click on the multicolor option
// user can also able to clear the grid board 
// user can adjust the size of the grid 
// user can also eraser the grid
// finding the hidden images
// name of the people 
// try to solve the problem one by one 

const grids = document.querySelector('.grid');
let rangePicker = document.getElementById('rangepicker');
let pickerValue = rangePicker.value;
grids.style.gridTemplateRows = `repeat(${pickerValue}, 1fr)`;
grids.style.gridTemplateColumns = `repeat(${pickerValue}, 1fr)`;

for(let i = 1; i < (pickerValue * pickerValue) + 1; i++)
{
    const newDiv = document.createElement('div');
    newDiv.id = "grid-items";
    const width = newDiv.style.width = 512  / pickerValue + "px";
    newDiv.style.height = 512 / pickerValue + "px";
    grids.appendChild(newDiv);
}


// The color will be field in grid if I hover over them
const colorChange = Array.from(document.querySelectorAll('#grid-items')
).map(function(e)
      {
    e.addEventListener('mouseover', function(){
    let colorPicker  = document.getElementById('colorpicker').value;
    e.style.backgroundColor = colorPicker;
      });
// Erasing the color by replace into white
    const eraseButton = document.getElementById('eraser');
    eraseButton.addEventListener('click', function(){
    e.addEventListener('mouseover', function(){
    e.style.backgroundColor = "#fffdf1";
      });
   });
// Generating color when clicking on the color mode
    const colorMode = document.getElementById('colormode');
    colorMode.addEventListener('click', function(){
    e.addEventListener('mouseover', function(){
    let colorPicker  = document.getElementById('colorpicker').value;
    e.style.backgroundColor = colorPicker;
    });
    });
   // Generating random color when clicking on the rainbow button
   const rainbowMode = document.getElementById('rainbowmode');
   rainbowMode.addEventListener('click', function(){
     e.addEventListener('mouseover', function(){
      e.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " 
      + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
       });
      });
      // Clearing the grid when clicking on the clear button
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function(){
    e.style.backgroundColor = "#fffdf1";
});
   });




// The range function start here
// Trying to create the grid agian when range picker is changed
  rangePicker.oninput = function() {
  pickerValue = this.value;
  grids.innerHTML = "";
  grids.style.gridTemplateRows = `repeat(${pickerValue}, 1fr)`;
  grids.style.gridTemplateColumns = `repeat(${pickerValue}, 1fr)`;

  for(let i = 1; i < (pickerValue * pickerValue) + 1; i++)
  {
    const newDiv = document.createElement('div');
    newDiv.id = "grid-items";
    const width = newDiv.style.width = 512  / pickerValue + "px";
    console.log(width);
    newDiv.style.height = 512 / pickerValue + "px";
    //newDiv.style.gridTemplateRows = `repeat(${rangePicker}, 1fr)`;
    //newDiv.style.gridTemplateColumns = `repeat(${rangePicker}, 1fr)`;
    //newDiv.textContent = i;
    grids.appendChild(newDiv);
  }
    // The color will be field in grid if I hover over them
    const colorChange = Array.from(document.querySelectorAll('#grid-items')
).map(function(e)
      {
    e.addEventListener('mouseover', function(){
    let colorPicker  = document.getElementById('colorpicker').value;
    e.style.backgroundColor = colorPicker;
      });
// Erasing the color by replace into white
    const eraseButton = document.getElementById('eraser');
    eraseButton.addEventListener('click', function(){
    e.addEventListener('mouseover', function(){
    e.style.backgroundColor = "#fffdf1";
      });
   });
// Generating color when clicking on the color mode
    const colorMode = document.getElementById('colormode');
    colorMode.addEventListener('click', function(){
    e.addEventListener('mouseover', function(){
    let colorPicker  = document.getElementById('colorpicker').value;
    e.style.backgroundColor = colorPicker;
    });
    });
   // Generating random color when clicking on the rainbow button
   const rainbowMode = document.getElementById('rainbowmode');
   rainbowMode.addEventListener('click', function(){
     e.addEventListener('mouseover', function(){
      e.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " 
      + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
       });
      });
      // Clearing the grid when clicking on the clear button
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function(){
    e.style.backgroundColor = "#fffdf1";
});
   });

}


