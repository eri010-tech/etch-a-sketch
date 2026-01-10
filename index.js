//console.log("sweet floating in the ether"); 

/* I couldn't figure this out myself, so all the grid code is from 
a YouTube channel called: Marvin Botchway!!! */
/* comment starts here 
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

comment ends here */ 
//event listener for randomly changing the grid colors 
/* commenr starts here 
gridSketchpad.addEventListener('mouseover', changeGridColors); 


function changeGridColors(e) {
  let box = e.target; 
  let color = randomRGBColor(box); 

  box.style.backgroundColor = color; 
}
comment ends here */ 
// randomRGBColor function from YouTuber Tech With Tim 
/* comment starts here 
function randomRGBColor(){
  let red = Math.round(Math.random() * 255); 
  let green = Math.round(Math.random() * 255); 
  let blue = Math.round(Math.random() * 255); 

  let randomColor = `rgb(${red}, ${green}, ${blue})`; 
  return randomColor; 
}
comment ends here  */ 

// "Click Button" event listener will prompt the user to pick a row/column number between
// 0-100. The grid should then change to the designated grid size.
/* comment starts here 
const clickBtn = document.querySelector("#click-btn"); 

clickBtn.addEventListener('click', changeGrid); 


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
/*comment ends here 






// ###### below is my experiment ######## //

//console.log("sweet floating in the ether"); 

/* I couldn't figure this out myself, so all the grid code is from 
a YouTube channel called: Marvin Botchway!!! */
let tools = {
gridSide: 555, 
rows: 16,
columns: 16 
}
console.log(typeof tools);
console.log(tools.gridSide);
console.log(tools.rows);
console.log(tools.columns);

/*
const gridSide = 555; 
let rows = 16;
let columns = 16; 
*/
const gridSketchpad = document.querySelector(".sketchpad");
gridSketchpad.style.width = `${tools.gridSide}px`;
gridSketchpad.style.height = `${tools.gridSide}px`; 


function makeGridSquares() {
  for(let i = 0; i < (tools.rows * tools.columns); i++){
   const gridPiece = document.createElement("div");

    gridPiece.style.width = `${(tools.gridSide / tools.columns) - 2}px`;
    gridPiece.style.height = `${(tools.gridSide / tools.rows) - 2}px`;
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


function changeGrid(){
  let command = prompt("please pick a grid number between 1 and 100"); 
  let numberPicked = command; 
  
  check = checkUserInput(numberPicked); 
  let convertToNumber = Number(check);
  let gridNumber = convertToNumber; 

  while(gridSketchpad.lastElementChild){
    gridSketchpad.removeChild(gridSketchpad.lastElementChild); 
  }
   /* the while loop (which I found from Stack OverFlow) is 
   necessary to basically restart the gridSketchpad
   by removing all the previous boxes inside of it.This allows it to 
   accept a new amount provided by the prompt answer. To get the rest
   of the DOM ready for the new grid number, mouseover event listener was
   temporarily removed, and the gridSketchpad background was set back to white.
   Now both javascript and the DOM are ready to change the grid to the user's
   new input number */ 

  gridSketchpad.removeEventListener('mouseover', changeGridColors); 
  gridSketchpad.style.backgroundColor = "white"; 

  tools.rows = gridNumber; 
  tools.columns = gridNumber; 
  makeGridSquares();

  gridSketchpad.addEventListener('mouseover', changeGridColors); 
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
