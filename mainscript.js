//default setup of a grid

let grid=document.querySelector(".gridContainer");
let reset=document.getElementById("reset");
let s=16;

//"Creation of the new grid" part of the reset
reset.addEventListener("click",function promptForSize(){
    let val=prompt("How big do you want your grid to be?");
    s=parseInt(val);
    gridCreation(s);
});


function gridCreation(s){

    grid.style.gridTemplateColumns = `repeat(${s}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${s}, 1fr)`;

    

    for(let j=0;j<s*s;j++){
        let sq=document.createElement("div");
        sq.classList.add("square");

        sq.addEventListener("mouseover", function changeColor(){
                let randColor=Math.floor(Math.random()*16777215).toString(16);  //Randomizing of a color
                    sq.style.backgroundColor="#"+randColor;
                        });
        //"Clearing" part of the reset
         reset.addEventListener("click",function resetGrid(){
            for(let j=0;j<s*s;j++){
                        
                sq.style.backgroundColor='transparent';
                        
            }
         });

        grid.appendChild(sq);
    }

}

//startup of a default grid
gridCreation(s);
