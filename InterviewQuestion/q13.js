// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need 
// to calculate the total cost of items in the shopping cart. Implement a function named 
// calculateTotal that takes an array of products with prices and quantities and returns 
// the total cost.
function calculateTotal(productArray){
     return productArray.reduce((total,item)=>{
        return total+ (item.price*item.quantity);
     },0);
}
let product1 = {
    product : "Bike",
    price : 80000,
    quantity : 1
}
let product2 = {
    product : "Fridge",
    price : 8000,
    quantity : 1
}
let product3 = {
    product : "AC",
    price : 30000,
    quantity : 1
}
let product4 = {
    product : "Washing Machine",
    price : 9000,
    quantity : 1
}
let productArray = [product1,product2,product3,product4];
let productPriceSum = calculateTotal(productArray);
console.log(productPriceSum);