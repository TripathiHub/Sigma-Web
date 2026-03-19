document.querySelector(".btn").onclick = function(){
    alert('you are clciked');
}
function change1(){
    document.body.children[1].children[0].innerHTML=<b>Right click was done</b>
}
function changecolor2(){

}
function changecolor3(){
}
function changecolor4(){
}
function changecolor(){
    document.body.style.backgroundColor="lightblue";
}

document.querySelector(".btn").addEventListener("click",changecolor);
document.querySelector(".but1").addEventListener("contextmenu",change1);