const setColor = (square, colors) =>{
    const color = getColor(colors);
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
const deleteColor = (square) =>{
    square.style.backgroundColor = "#1d1d1d";
    square.style.boxShadow = `0 0 2px #000`;
}
const getColor = (colors) =>{
    const id = Math.floor(Math.random() * colors.length);
    return colors[id]
}
const colors = ["rgba(248,255,0,1)", "rgba(184,0,0,1)", "rgba(0,212,255,1)", "rgba(170,0,255,1)", "rgba(255,255,255,1)"]
const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement("div");
    square.addEventListener('mouseover', ()=>{
        setColor(square, colors)
    })
    square.addEventListener('mouseleave', ()=>{
        deleteColor(square)
    })
    square.classList.add("square");
    board.append(square);
}
