// Async Array Mapping: Write an asynchronous function that 
// takes an array of numbers and returns a new array of Promises 
// where each number is multiplied by 2 after a delay of 500 milliseconds.

async function arrayMapping(arr) {
    return arr.map((item) => {
      return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(item*2);
        }, 500);
      })
    }
    )
}
async function main(){
let arr =[12,34,65,82,96];
let result = arrayMapping(arr);
let promise = await result;
console.log(promise);
}
main();
