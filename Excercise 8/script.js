console.log("");
async function hecker1(){
    let i=0;
    let arr=[".","..","..."]
    let interval = setInterval(() => {
          document.querySelector(".h1").innerHTML="Intailizing hacking"+arr[i];
          i=(i+1)%arr.length;
     },300);
      await new Promise(resolve=>setTimeout(resolve,5000));
      clearInterval(interval);
}
async function hecker2(){
     let i=0;
    let arr=[".","..","..."]
    let interval = setInterval(() => {
          document.querySelector(".h2").innerHTML="reading your files"+arr[i];
          i=(i+1)%arr.length;
     },300);
      await new Promise(resolve=>setTimeout(resolve,5000));
      clearInterval(interval);
}
async function hecker3(){
        let i=0;
    let arr=[".","..","..."]
    let interval = setInterval(() => {
          document.querySelector(".h3").innerHTML="Password files detected"+arr[i];
          i=(i+1)%arr.length;
     },300);
      await new Promise(resolve=>setTimeout(resolve,5000));
      clearInterval(interval);
} 
async function hecker4(){
        let i=0;
    let arr=[".","..","..."]
    let interval = setInterval(() => {
          document.querySelector(".h4").innerHTML="Sending all files passwords and personal files to server"+arr[i];
          i=(i+1)%arr.length;
     },300);
      await new Promise(resolve=>setTimeout(resolve,5000));
      clearInterval(interval);
}
async function hecker5(){
       let i=0;
    let arr=[".","..","..."]
    let interval = setInterval(() => {
          document.querySelector(".h5").innerHTML="Cleaning up"+arr[i];
          i=(i+1)%arr.length;
     },300);
      await new Promise(resolve=>setTimeout(resolve,5000));
      clearInterval(interval);
}
async function bgc() {
        await new Promise(resolve=>(setTimeout(resolve,2000))) 
        document.body.style.backgroundColor="red";
       let lines= document.querySelectorAll(".line")
       lines.forEach(e => {
        e.style.display="none";
       });
       document.querySelector(".container").style.color="black";
       document.querySelector(".container").innerHTML="<h1>Your device is in my control now</h1>";
}
async function main(){
    await hecker1();
    await hecker2();
    await hecker3();
    await hecker4();
    await hecker5();
     await bgc();
}
main();