// console.log("Sentence one");
// console.log("Sentence two");
// setTimeout((e) => {
//     console.log("Sentence three");
//     console.log(e);
// },3000);
// console.log("Sentence four");
// //due to asyncorous nature of js sentence 3 will run after sentence 4
// function fn(){
//     comsole.log("nothing")
// }
// function loadscript(src,callback){
//     let sc = document.createElement('script');
//     sc.src=src;
//     sc.onload=()=>callback("harry");
//     document.head.append(scr);
// }
// function callback(arg,func){
//     console.log(arg);
//     fn();
// }
// loadscript("https://code.jquery.com/jquery-3.7.1.min.js",callback);
let prm1 = new Promise((resolve,reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("Network is not supporting request 1")
    }else{
        setTimeout(() => {
        console.log("Network is connected by request 1");
        resolve("Request 1 is resolved");
    },3000);
    }
})
let prm2 = new Promise((resolve,reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("Network is not supporting request 2");
    }else{
        setTimeout(() => {
        console.log("Network is connected by request 2");
        resolve("Request 2 is resolved");
    },2000);
    }
})
let prm3 = new Promise((resolve,reject)=>{
    let a= Math.random();
    if(a<0.5){
        reject("Network is not supporting request 3")
    }else{
        setTimeout(() => {
        console.log("Network is connected by request 3");
        resolve("Request 3 is resolved");
    },1000);
    }
})
// prm.then( (a) => {
//     console.log(a);
// }).catch((params) => {
//     console.log(params);
// })
let p= Promise.all([prm1,prm2,prm3]);
let p1= Promise.allSettled([prm1,prm2,prm3]);
// let p1= Promise.race([prm1,prm2,prm3]);
p.then((a) => {
    console.log(a)
}).catch( (err) => {
    console.log(err);
})
p1.then((a) => {
    console.log(a)
}).catch( (err) => {
    console.log(err);
})