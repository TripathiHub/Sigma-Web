// The Vowel Counter: You need to create a function that counts the number of vowels 
// in a given string. Consider both uppercase and lowercase vowels.
function countVowels(str){
    let count=0;
    let i;
    let vowel=["a","e","i","o","u","A","E","I","O","U"];
    for(i=0;i<str.length;i++){
        for(j=0;j<10;j++){
         if(str[i]==vowel[j]){
            count++;
         }
        }
    }
    return count;
}
let Name="Himanshu Tripathi";
let Name2="AAryan Verma";
console.log(countVowels(Name));
console.log(countVowels(Name2));