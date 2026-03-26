// The Sum Selector: You are working on a function that should sum all
//  numbers in an array until it encounters a negative number. Write a function 
//  that performs this summation.

function sumArr(arr){
    let i;
    let sum=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
          return sum;
        }else{
        sum+=arr[i];
        }
    }
     return sum;
}
let arr =[12,65,345,85,24,57,3];
let arr2 =[12,65,345,85,24,-57,3];
console.log(sumArr(arr));
console.log(sumArr(arr2));