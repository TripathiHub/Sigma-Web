let colors ={
    "1":"red",
    "2":"yellow",
    "3":"blue",
    "4":"green"
}
let BackGcolors ={
    "1":"Yellow",
    "2":"blue",
    "3":"red",
    "4":"green"
}
function changeColor(){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
    let a = Math.floor(Math.random()*4)+1;
    let b = Math.floor(Math.random()*4)+1;
    box.style.backgroundColor = BackGcolors[a];
    box.style.color = colors[b];
})
}
 setInterval(changeColor,1500);
// let boxes=document.getElementsByClassName("box");
// let array=Array.from(boxes);
// array.forEach(element => {
//     let a = Math.floor(Math.random()*4)+1;
//     let b = Math.floor(Math.random()*4)+1;
//     element.style.backgroundColor = BackGcolors[a];
//     element.style.color = colors[b];
// });
