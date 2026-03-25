 async function getData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("The data is collected with value");
    },3500);
  })
}
async function getData(){
//   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   let data = await x.json();
  // console.log(data)
   let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
               method: "POST",
               headers: {
               "Content-Type": "application/json"
               },
               body: JSON.stringify({
               title: "Hello",
               body: "This is my post",
               userId: 1
               })
     })
  let data = await x.json();
  return data;
}
async function main() {
console.log("Loading Modules");
console.log("Do something else");
console.log("Getting data");
let data = await getData(); // await is only valid in aysnc function
console.log(data);
console.log("task 2")
}
main();

// data.then((value) => {
//     console.log("processing data");
// })
// console.log("task 2");
// now here atsk 2 will run first then when promise is resolved then will run but what if we want that
// task  will after data is collected then we will use aysnc await


