let students = ["ritika","haresh","viru","tanish","vraj","aryan",
                "shivam","himanshu","kevin","loki","anuj","Mahindra shign dhoni"];
let houses = [];
for (const student of students) {
    if(student.length<6){
        houses.push("red");
    }else if(student.length<8){
      houses.push("yellow");
    }else if(student.length<12){
       houses.push("blue");
    }else{
       houses.push("green");
    }
}
console.log(houses);