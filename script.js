var gridRes = 64;
var grid = document.getElementById("divBox");
var row, box;
// creates box on load
for(n = gridRes; n > 0; n--){
    makeRow(gridRes);
}
//block turns black on hover
function pen(e){
  e.target.style.backgroundColor = "black"
}
//clears grid boxes
function reset(){
    let rowList = document.getElementsByClassName('row');
    // clears boxes
    while(rowList.firstChild){
        rowList.removeChild(rowList.firstChild);
    }
    // clears rows
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}
//builder function: makes 1 row of 'gridRes' boxes
function makeRow(gridRes){
  row = document.createElement("div");
  row.classList.add('row');
  grid.appendChild(row);
  let n = gridRes;
  for(n; n > 0; n--){
    //create 1 box
    box = document.createElement("div");
    box.classList.add('box');
    //for pen effect we have to addeventlistener for each block
    box.addEventListener('mouseover', pen)
    row.appendChild(box);
  }
}
function setSize(){
  let n = prompt("Enter new grid dimension:", "32");
  //check for valid input
  if(!n || isNaN(n) ){ n = 32;} //reset to 32 if invalid
  n = Number(n);
  //delete old grid
  reset();
  // make new grid with inputted value
  gridRes = n;
  for(n; n > 0; n--){
    makeRow(gridRes);
  }
}


