document.querySelector(".btn").onclick = function(){
    alert('you are clciked');
}
function change1(){
    document.querySelector(".but1").innerHTML= "<b>Right click was done</b>";
}
function change2(){
    document.querySelector(".but2").style.backgroundColor="red";
}
function change3(){
    document.querySelector(".but3").innerHTML="<h5>Mouseover activated</h5>";
}
// function change4(){
//     document.querySelector(".but4").innerHTML= "<b>Keydown is pressed</b>"
// }
function changecolor(){
    document.body.style.backgroundColor="lightblue";
}
document.querySelector(".btn").addEventListener("click",changecolor);
document.querySelector(".but1").addEventListener("contextmenu",change1);
document.querySelector(".but2").addEventListener("dblclick",change2);
document.querySelector(".but3").addEventListener("mouseover",change3);
document.querySelector(".but4").addEventListener("keydown",(e)=>{
        console.log("key pressed:",e.key)
        document.querySelector(".but4").innerHTML= "<b>Keydown is pressed</b>";
        });