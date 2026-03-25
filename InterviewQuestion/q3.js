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
