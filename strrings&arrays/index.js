console.log("String tutorial");
let name1="Rohan";
let name2="Ritik";
let name3="Rahul";
console.log(`The name of employees "Starting with R" ${name1},${name2},${name3}. `); 
// backtick we can use to add variables this way
console.log(name1.length);
console.log(name2.charAt(4));
console.log(name1.startsWith("Ri"));
console.log(name1.replace("han","nny"));
console.log(name1.endsWith("an"));
// important note that string are immutable thats why original string name1 has still last "an" instead of "ny"
// means it alll function just make new string does not change original one
console.log(name3.slice(2,4));
console.log(name3.toLowerCase());
//more string function to be used