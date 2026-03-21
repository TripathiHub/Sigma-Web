let [x,y,...rest]=[12,45,23,67,63,45,889];
console.log(x,y,rest);
//this is Destructuring
let obj = {
     1:"a",
     2:"b",
     3:"c"
    }
    function sum(a,b,c,d){
        return a+b+c+d;
    }
const {1:a,2:b,3:c }= obj;
console.log(a,b,c);
console.log(obj);
let arr=[34,53,26,78];
let obj2={
    ...arr
};
console.log(obj2);
console.log(sum(...arr));