// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need 
// to calculate the total cost of items in the shopping cart. Implement a function named 
// calculateTotal that takes an array of products with prices and quantities and returns 
// the total cost.
function sum(a,b){
    return a+b;
}
function calculateTotal(productArray){
     return productArray.reduce(sum);
}
let product1 = {
    product : "Bike",
    price : 80000
}
let product2 = {
    product : "Fridge",
    price : 8000
}
let product3 = {
    product : "AC",
    price : 30000
}
let product4 = {
    product : "Washing Machine",
    price : 9000
}
let productArray = [product1.price,product2.price,product3.price,product4.price];
let productPriceSum = calculateTotal(productArray);
console.log(productPriceSum);