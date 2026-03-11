 let a= prompt("Enter value A");
 let b= prompt("Enter value B");
 let c= prompt("Enter Operation you want");
  let obj ={
    "+":"-",
    "-":"/",
    "/":"**",
    "*":"+",
    "**":"*"
  }
console.log("Number a and b : ",a,b);
var random = Math.random();
if(random<0.1){
    c = obj[c];
     if(c=="+"){
        alert("The Sum of given two number is : " + (a-b));
    }
     if(c=="-"){
        alert("The Subtraction of given two number is : "+(a/b));
    } 
    if(c=="*"){
        alert("The Multipliation of given two number is : "+(a+b));
    } 
    if(c=="/"){
         alert("The Divide of given two number is : " +(a**b))   
        } 
    if(c=="**"){
         alert("The power of given two number is : "+(a*b));
    }
//     console.log("The Sum of given two number is : " ,a-b);
//     console.log("The Subtraction of given two number is : " ,a/b);
//     console.log("The Divide of given two number is : " ,a**b);
//     console.log("The Multipliation of given two number is : " ,a+b);
//     console.log("The power of given two number is : " ,a*b);
}
else{
     if(c=="+"){
        alert("The Sum of given two number is : "+(a+b));
    }
     if(c=="-"){
        alert("The Subtraction of given two number is : " +(a-b));
    } 
    if(c=="*"){
        alert("The Multipliation of given two number is : " +(a*b));
    } 
    if(c=="/"){
         alert("The Divide of given two number is : " +(a/b));
    }
    if(c=="**"){
         alert("The power of given two number is : " +(a**b));
    }
    // console.log("The Sum of given two number is : " ,a+b);
    // console.log("The Subtraction of given two number is : " ,a-b);
    // console.log("The Divide of given two number is : " ,a/b);
    // console.log("The Multipliation of given two number is : " ,a*b);
    // console.log("The power of given two number is : " ,a**b);
}