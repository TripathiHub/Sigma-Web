console.log("This will help you to make name for your bussiness randonmly");
let adjectives={
 "1":"Crazy",
 "2":"Amazing",
 "3":"Fire",
 "4":"Cool"
}
let shopname={
    "1":" Engine",
    "2":" Food",
    "3":" Garments",
    "4":" Furniture"
}
let anothername={
    "1":" bros",
    "2":" Limited",
    "3":" Hub",
    "4": " House"
}
let a= Math.floor(Math.random()*4)+1;
let b= Math.floor(Math.random()*4)+1;
let c= Math.floor(Math.random()*4)+1;

console.log("The name is :" ,adjectives[a]+shopname[b]+anothername[c])

