// The Mirror Mirror: Imagine you have a string, and you need to create a new string 
// that is a mirror image of the original. Write a function that appends the reversed 
// version of the original string to itself.

function reverse(str){
    let i;
    let newstr = "";
  for(i=0;i<str.length;i++){
    newstr+= str[str.length-1-i] ;
  }
  return str+newstr;
}
let str= " Gec Dahod ";
console.log(reverse(str));
