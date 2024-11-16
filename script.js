//Make a grid sqaure
const screen = document.querySelector(".container");


const button = document.querySelector("#btn");

function makeGrids(size) {
 
  const square = 600/ size
//Clear previous grid
  screen.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
          let box = document.createElement("div");
             box.classList.add("column");
           screen.style.width = "600px"
              screen.style.height = "600px"
            
             
             box.style.width = `${square}px`
            box.style.height = `${square}px`
            screen.appendChild(box)
      
               box.addEventListener('mouseover',() =>{
               box.style.background = generateColor();})
              } }
              
          
 


 makeGrids(16)
 //random colour function
 function generateColor(){
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let code = "";
  for(let i=0; i<6; i++){
   code += hexArray[Math.floor(Math.random()*16)];
  }
  return `#${code}`
 }
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


  


 






