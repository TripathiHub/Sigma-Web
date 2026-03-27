class User {
    constructor(name,age){
        console.log("User name is "+ name +" and age is "+age);
    }
      greet() {
        console.log("Hello "+ this.name);
    }
}
const user1 = new User("Himanshu",18);
console.log(user1.greet("name"));