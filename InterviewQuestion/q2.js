function arrayDouble(arr){
  let i=0;
  let result =[];
    for(i=0;i<arr.length;i++){
      if(i>0 && arr[i]==arr[i-1]){
        result.push(arr[i]);
      }else{
          result.push(arr[i]*2)
        }
      }
      return result;
    }
  // arr.map((element) => {
  //   return element*2;
  // }
  // )
let a=[12,13,15,15,18];
let double =arrayDouble(a);
console.log(double);