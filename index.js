//console.log("sweet floating in the ether"); 
const gridContainer = document.querySelector("#grid-container"); 

/*function makeGrid(){
  for(let i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.classList.add("row"); 
    gridContainer.appendChild(row);
    row.textContent = i; 

    for (let j = 1; j < 16; j++){
      const column = document.createElement("div"); 
      column.classList.add("column"); 
      row.appendChild(column); 
      column.textContent = j; 
    }
  }
}
//talk about why the loops work?!
makeGrid(); 
*/

function makeGrid(){
  for(let i = 0; i < 4; i++){ //outer loop is purple 
    for(let j = 0; j < 4; i++){ // inner loop is blue 
       console.log(i,j);
    }
  }
}
makeGrid();