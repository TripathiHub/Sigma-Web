let arr=[1,2,3,4,5,6];
let i;
let fact=1;
for(i=1;i<=arr.length;i++){
  fact= fact*i;
}
console.log(fact);
const factortial= (a,b) =>{
      return a*b;
}
console.log(arr.reduce(factortial));
comsole.log(arr.reverse());