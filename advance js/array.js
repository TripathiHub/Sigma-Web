let a = [12,13,14,15,16];
let result = a.map((num) => {
  return num*num;
}
)
let users =[
   {name:"himanshu",age:"18"},
    {name:"prince",age:"17"}
   ]
let result2 = users.map((user) => {
  return user.name;
}
)
let result3 = users.map((user) => {
  return "Mr "+user.name;
}
)
console.log(result);
console.log(result2);
console.log(result3);
