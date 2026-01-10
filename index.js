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


//event listener for randomly changing the grid colors 

gridSketchpad.addEventListener('mouseover', changeGridColors); 


function changeGridColors(e) {
  let box = e.target; 
  let color = randomRGBColor(box); 

  box.style.backgroundColor = color; 
}

// randomRGBColor function from YouTuber Tech With Tim 

function randomRGBColor(){
  let red = Math.round(Math.random() * 255); 
  let green = Math.round(Math.random() * 255); 
  let blue = Math.round(Math.random() * 255); 

  let randomColor = `rgb(${red}, ${green}, ${blue})`; 
  return randomColor; 
}


// "Click Button" event listener will prompt the user to pick a row/column number between
// 0-100. The grid should then change to the designated grid size.

const clickBtn = document.querySelector("#click-btn"); 

clickBtn.addEventListener('click', changeGrid); 

let check; 

function changeGrid(){
  
  let command = prompt("please pick a grid number between 1 and 100");
  let numberPicked = command; 
  
  check = checkUserInput(numberPicked); 
  console.log(check); 
   
} 

function checkUserInput(numberPicked){
  if (numberPicked > 100){
    alert("maximumm number allowed is 100. please click the button again to type a new number");
  } else if (numberPicked < 1){
    alert("minimum number allowed is 1. please click the button again to type a new number");
  } else {
    return numberPicked; 
  }
}

