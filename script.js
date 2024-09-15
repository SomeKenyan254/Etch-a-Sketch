
function makeGrids(size) {
    let screen = document.querySelector(".container");
   
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let column = document.createElement("div");
       column.classList.add("column");
       screen.appendChild(column)
}
      
    }
    
  }
  
  makeGrids(16);