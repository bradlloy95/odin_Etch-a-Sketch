const sketchContainer = document.getElementById('sketch');
const drawWidth = Number(sketchContainer.offsetWidth);
console.log(drawWidth)
const drawHeight = Number(sketchContainer.offsetHeight);
console.log(drawHeight)
let gridSize = 16;

let WIDTH = (drawWidth - 1) /gridSize;

const opacity = 0.1;
let flag = false;

window.onmousedown = () => {                        
    flag = true;
    //console.log(flag)
}
window.onmouseup = () => {
    flag = false;
    //console.log(flag);
}
function createGrid(gridSize) {
    console.log(gridSize)
    WIDTH = (drawWidth - 1) /gridSize;
    sketchContainer.replaceChildren()
    for (let i = 0; i < gridSize - 1 ; i++) {
        for ( let j = 0; j < gridSize; j++){
            const box = document.createElement('div');
            box.style.width = `${WIDTH}px`;
            box.style.height = `${WIDTH}px`;
            box.style.opacity = "0";
            box.style.backgroundColor = "black";    
            box.style.margin = '0';   
    
            box.style.borderWidth = '0';
            box.addEventListener("mouseover", () => {
                if (flag === true) {
                    let computedStyle = window.getComputedStyle(box);
                    let currentOpacity = Number(computedStyle.getPropertyValue("opacity"));
                    
                    let newOpacity = currentOpacity + opacity;
                    box.style.opacity = `${newOpacity}`;            
                }
            })
            
            sketchContainer.appendChild(box);  
          }
    }
}



const sixteen = document.getElementById('sixteen');

sixteen.addEventListener('click', () => {
    while (sketchContainer.hasChildNodes()) {
        sketchContainer.firstChild.remove();
        }
    gridSize = 16;
    WIDTH = (drawWidth - 1) /gridSize;
    createGrid(gridSize)
});

const thirtytwo = document.getElementById('thirtytwo');

thirtytwo.addEventListener('click', () => {
    while (sketchContainer.hasChildNodes()) {
        sketchContainer.firstChild.remove();
        }
    gridSize = 32;
    WIDTH = (drawWidth - 1) /gridSize;
    createGrid(gridSize)
});

const sixtyfour = document.getElementById('sixtyfour');

sixtyfour.addEventListener('click', () => {
    while (sketchContainer.hasChildNodes()) {
        sketchContainer.firstChild.remove();
        }
    gridSize = 64;
    WIDTH = (drawWidth - 1) /gridSize;
    sketchContainer.replaceChildren()
    
    createGrid(gridSize)
});

const custom = document.getElementById('custom');

custom.addEventListener('click', () => {
    gridSize = prompt("Please enter a number from 1 to 100");
    if (gridSize == null) {

    } else if (gridSize > 100 || gridSize< 1) {
        alert("Enter a number between 1 and 100")
    } else { 
        while (sketchContainer.hasChildNodes()) {
        sketchContainer.firstChild.remove();
        }
        createGrid(gridSize);
        }
});




createGrid(gridSize)