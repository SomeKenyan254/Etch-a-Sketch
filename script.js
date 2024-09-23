//Make a grid sqaure
const screen = document.querySelector(".container");


//Initial grid Size
let size =16;
function makeGrids() {
    const square = 960 / size
    
   for (let i = 0; i < size * size; i++) {
      
            let box = document.createElement("div");
       box.classList.add("column");
       
       box.style.width = `${square}px`
       box.style.height = `${square}px`

 box.addEventListener('mouseover',() =>{
  box.style.background = "blue";})

  

     
     screen.appendChild(box)
}


}   


   

  
  makeGrids();
