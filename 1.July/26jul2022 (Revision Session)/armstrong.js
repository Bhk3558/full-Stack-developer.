function isArmStrong (num){
    var intialvalue = num;
    var finalvalue = 0;
    while (intialvalue != 0){
        let temp = intialvalue % 10;
        finalvalue += temp*temp*temp;
        intialvalue = parseInt(intialvalue/10);
    }
    if(finalvalue == num){
        console.log("yes : "+ num + " is an ArmStrong");
    }else{
        console.log("No : "+ num + " is not an ArmStrong");
    }

}
isArmStrong(153);
isArmStrong(123);

