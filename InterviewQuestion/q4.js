// The Password Validator: You are building a password validation feature. Create a function 
// that checks if a given password meets the following criteria: at least 8 characters long, 
// contains both uppercase and lowercase letters, and includes at least one digit
function passwordAuthentication(str){
    let checkUpperCase=0;
    let checkLowerCase=0;
    let checkNumber=0;
         if(str.length<8){
            console.log("Password must contains atleast 8 character");
            return ;
        }else{
      for(let i=0;i<str.length;i++){
         if(str[i]>="a"&& str[i]<="z"){
            checkLowerCase++;
         }
         if(str[i]>="A"&& str[i]<="Z"){
            checkUpperCase++;
         }if(str[i]>="0"&& str[i]<="9"){
            checkNumber++;
         }
       }
       if(checkLowerCase<1 || checkUpperCase<1 || checkNumber<1){
        console.log("Password must contains both uppercase and lowercase letter and includes at least one digit");
       }else{
        console.log("Password is stored : " + str);
       }
}
}
let password1="Himanshu@123";
passwordAuthentication(password1);
let password2="Ri@123";
passwordAuthentication(password2);
let password3="Ritikdubey";
passwordAuthentication(password3);
let password4="ritikdubey";
passwordAuthentication(password4);
let password5="Ri123456";
passwordAuthentication(password5);