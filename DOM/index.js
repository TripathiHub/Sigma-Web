// Access body
console.log(document.body);

// Change background color
document.body.style.backgroundColor = "lightyellow";


// getElementById
let title = document.getElementById("title");
title.style.color = "blue";


// getElementsByClassName
let paragraphs = document.getElementsByClassName("para");

for(let i=0;i<paragraphs.length;i++){
    paragraphs[i].style.color = "green";
}


// getElementsByTagName
let listItems = document.getElementsByTagName("li");

for(let i=0;i<listItems.length;i++){
    listItems[i].style.fontSize = "20px";
}


// querySelector
let button = document.querySelector("#btn");

button.addEventListener("click",function(){
    alert("Button Clicked!");
});


// querySelectorAll
let allPara = document.querySelectorAll(".para");

allPara.forEach(function(p){
    p.style.fontWeight = "bold";
});
