let grid=document.querySelector(".gridContainer");

for(let i=0;i<15;i++){
    if(i>0){
        let br=document.createElement("div");
        br.classList.add("break");

        br.style.flexBasis="100%";
        br.style.height="0";
        grid.appendChild(br);
    }
    for(let j=0;j<16;j++){
        let sq=document.createElement("div");
        sq.classList.add("square");

        sq.style.width="30px"
        sq.style.height="30px"
        sq.style.border="5px solid black";

        sq.addEventListener("mouseover", function changeColor(){
                    sq.style.backgroundColor='red';
                        });

        if(i===0){
            sq.style.borderTop="10px solid black";
        }

        if(i===14){
            sq.style.borderBottom="10px solid black";
        }

        if(j===0){
            sq.style.borderLeft="10px solid black";
        }

        if(j===15){
            sq.style.borderRight="10px solid black";
        }

        grid.appendChild(sq);
    }
}

