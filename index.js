//console.log("sweet floating in the ether"); 

/* I couldn't figure this out myself, so all the grid code is from 
a YouTube channel called: Marvin Botchway!!! */

const gridSide = 555; 
let rows = 16;
let columns = 16; 


const gridSketchpad = document.querySelector(".sketchpad");
gridSketchpad.style.width = `${gridSide}px`;
gridSketchpad.style.height = `${gridSide}px`; 

function makeGridSquares() {
  for(let i = 0; i < (rows * columns); i++){
    const gridPiece = document.createElement("div");

    gridPiece.style.width = `${(gridSide / columns) - 2}px`;
    gridPiece.style.height = `${(gridSide / rows) - 2}px`;
    gridPiece.classList.add("gridSquare");

    gridSketchpad.appendChild(gridPiece); 
  }
}

makeGridSquares();

//talk about why this works!!!