// The Asynchronous Shopper: Imagine you are building an online shopping application. 
// Write an asynchronous function called placeOrder that simulates placing an order 
// and returns a promise. The promise should resolve with an order confirmation message
// after a random delay.

async function placeOrder(orderList){
   return orderList.map((order) => {
       return new Promise((resolve)=>{
    let random = Math.floor(Math.random()*2000)+500; 
    setTimeout(() => {
        resolve(`Order is confirmed ${order}`);
    }, random);  
})
    }
    )
}
async function main(){
    let orderlist = ["Pizza","Burger","Sandwich","French Fries"];
    let result = placeOrder(orderlist);
    let promise = await result;
    console.log(promise);
}
main();