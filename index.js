//console.log("sweet floating in the ether"); 
const gridContainer = document.querySelector("#grid-container"); 

//makeGrid function utilizes nested loops to create a dynamic grid. 
// I couldn't figure this out myself, so the answer comes from stack overflow. 

function makeGrid(size){
  for(let i = 0; i < size; i++){ //outer loop is purple 
    let row = document.createElement("div"); 
    row.classList.add("row"); 
    gridContainer.appendChild(row); 
    row.textContent = i;  
    for(let j = 1; j < size; j++){ // inner loop is blue 
    let column = document.createElement("div"); 
    column.classList.add("column"); 
    row.appendChild(column); 
    column.textContent = j; 
    }
  } 
}
makeGrid(16); 