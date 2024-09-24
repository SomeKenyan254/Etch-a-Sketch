//Make a grid sqaure
const screen = document.querySelector(".container");

const button = document.querySelector("#btn");

function makeGrids(size) {
  
  const square = 960 / size
  screen.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
          let box = document.createElement("div");
             box.classList.add("column");
             screen.style.width = "500px"
              screen.style.height = "500px"
            
             
             box.style.width = `${square}px`
            box.style.height = `${square}px`
            screen.appendChild(box)
      
               box.addEventListener('mouseover',() =>{
               box.style.background = "red";})
              } }
              
          
 


 makeGrids(16)

//Ask user for a grid size
const  newGrid = () => {
  input = prompt("Enter a grid size")
  const newSize = Number(input)
  if(newSize > 1 && newSize <=100){

 makeGrids(newSize)}
 else{
  alert ("Enter a value between 1 and 100!!")
 }
} ; 
button.addEventListener("click", newGrid )


  


 






