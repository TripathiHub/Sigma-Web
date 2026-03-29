// The Array Filterer: You are building a search feature for your e-commerce site. 
// Write a function named filterProducts that takes an array of product objects and 
// a filter criterion. The function should return a new array containing only the 
// products that match the filter criterion.

function filterProductLessThanMaxPrice(objProduct,maxPrice){
   return objProduct.filter((item)=>{
        return item.price < maxPrice;
    })
}
// Here Max in function name refers to max price you want to filter out from
let product1 = {
    name : " Zara Jeans",
    price: 2500
}
let product2 = {
    name : "Killer Jeans",
    price: 1800
}
let product3 = {
    name : "Highlander shirts",
    price: 800
}
let product4 = {
    name : "Puma shoes",
    price: 4000
}
let productArray = [product1,product2,product3,product4];
console.log(filterProductLessThanMaxPrice(productArray,1000));
console.log(filterProductLessThanMaxPrice(productArray,2000));
console.log(filterProductLessThanMaxPrice(productArray,3000));