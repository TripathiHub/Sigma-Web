// The Coffee Machine: In your coffee shop application, you need to simulate the process 
// of brewing coffee asynchronously. Write an async function named brewCoffee that takes 
// the type of coffee and returns a promise. The promise should resolve with a message 
// indicating that the coffee is ready after a random delay.

async function brewCoffee(typeCoffee) {
    return new Promise((resolve)=>{
        let random = Math.floor(Math.random()*2000)+1500;
        setTimeout(() => {
            resolve(console.log(typeCoffee+ " is ready to enjoy.Collect it from counter"));
        }, random);
    })
}
async function main() {
    let typeCoffee = "Cold Coffee";
    let resultOfBrewCoffeeFunction = brewCoffee(typeCoffee);
    let promiseOfBrewCoffeeFunction = await resultOfBrewCoffeeFunction;
    console.log(promiseOfBrewCoffeeFunction);
} 
main();