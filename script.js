
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
    console.log(width);
    newDiv.style.height = 512 / pickerValue + "px";
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
    e.style.backgroundColor = "#2196F3";
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
  e.style.backgroundColor = "#2196F3";
});
   });



// The range function start here
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
// erasing the color by replace into white
const eraseButton = document.getElementById('eraser');
eraseButton.addEventListener('click', function(){
  e.addEventListener('mouseover', function(){
    e.style.backgroundColor = "#2196F3";
    });
   });

   const colorMode = document.getElementById('colormode');
colorMode.addEventListener('click', function(){
  e.addEventListener('mouseover', function(){
    let colorPicker  = document.getElementById('colorpicker').value;
    e.style.backgroundColor = colorPicker;
    });
   });
   const rainbowMode = document.getElementById('rainbowmode');
   rainbowMode.addEventListener('click', function(){
     e.addEventListener('mouseover', function(){
      e.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " 
      + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
       });
      });
      
      const clearButton = document.getElementById('clear');
      clearButton.addEventListener('click', function(){
        e.style.backgroundColor = "#2196F3";
      });
   });
}


//const multipleColor = Array.from(document.querySelectorAll('#grid-items')
//).map(function(e)
//{
  //  e.addEventListener('mouseover', function(){
        
        // below are two methods to generate random color 
       // const randomColor = Math.floor(Math.random()*16777215).toString(16);
       //e.style.backgroundColor = "#" + randomColor;
//e.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " 
//+ Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
    //});
   // });

// erase the grid 
// clear the grid 

    
  // const array = Array.from(
    //document.querySelectorAll("[id]")
      // ).map(function (e) {
      //  return e.id;
      // });
      
      // const set = new Set(array);
      // console.assert(
       // set.size == array.length

       function Player(name, marker)
       {
this.name = name;
this.marker = marker; 
this.sayName = function()
{
  console.log(name);
}
       }
const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName();
player2.sayName();

       
       function Student(name) {
         this.name = name;
       }
      
      Student.prototype.sayName = function() {
        console.log(this.name)
      }
      
      function EighthGrader(name) {
        this.name = name
        this.grade = 8
      }
      
    EighthGrader.prototype = Object.create(Student.prototype);
      
     const carl = new EighthGrader("carl");
     console.log(carl.sayName());// console.logs "carl"
     console.log(carl.grade); // 8

     function createDrawingArea() {

      game.create.grid('drawingGrid', 16 * canvasZoom, 16 * canvasZoom, canvasZoom, canvasZoom, 'rgba(0,191,243,0.8)');
  
      canvas = game.make.bitmapData(spriteWidth * canvasZoom, spriteHeight * canvasZoom);
      canvasBG = game.make.bitmapData(canvas.width + 2, canvas.height + 2);
  
      canvasBG.rect(0, 0, canvasBG.width, canvasBG.height, '#fff');
      canvasBG.rect(1, 1, canvasBG.width - 2, canvasBG.height - 2, '#3f5c67');
  
      var x = 10;
      var y = 64;
  
      canvasBG.addToWorld(x, y);
      canvasSprite = canvas.addToWorld(x + 1, y + 1);
      canvasGrid = game.add.sprite(x + 1, y + 1, 'drawingGrid');
      canvasGrid.crop(new Phaser.Rectangle(0, 0, spriteWidth * canvasZoom, spriteHeight * canvasZoom));
  
  }
  var ctx = document.getElementById('game').getContext('2d');
  // load image
  var image = new Image();
  image.onload = function () {
      // draw the image into the canvas
      ctx.drawImage(image, 0, 0);
  }
  image.src = 'images/cat.png';

     function saveImage() { 
      // I assume there will be only one canvas on the page
      let realCanvas = document.querySelector('canvas');
      let ouputCanvas = document.createElement('canvas');
      let ctx = ouputCanvas.getContext('2d');

      // Get the target area (Details are from example code)
      let xOfGrid = canvasGrid.x - 1; // Info from Linie 267 from example
      let yOfGrid = canvasGrid.y - 1; // Info from Linie 267 from example

      // Info: this "canvas" is not a HTML Canvas Element
      let width = canvas.width;   // Info from Linie 256 from example
      let height = canvas.height; // Info from Linie 256 from example

      // Set initial Canvas Size
      ouputCanvas.width = width;
      ouputCanvas.height = height;

      // draw Image onto new Canvas
      ctx.drawImage(realCanvas, xOfGrid, yOfGrid, width, height, 0, 0, width, height);

      // Output Image, with filesaver.js
      ouputCanvas.toBlob(function onDone(blob) {
          saveAs(blob, "image.png");
      });
  }

  // An extra "Save Button", for testing
  window.addEventListener('DOMContentLoaded', function(){
      let btn = document.createElement('button');
      btn.innerText = 'SAVE FILE';
      btn.addEventListener('click', saveImage);
      document.body.prepend( btn );
  });
  function download() {
    var download = document.getElementById("download");
    var image = document.getElementById("myCanvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
    }