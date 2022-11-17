
// //find the number is positive,negative or zero

// function IsNumberPositiveOrNegative (num){
//     switch (num){
//         case (num > 0): {
//             console.log("This Number Is Postive");
//             break;
//         } case (num == 0):{
//             console.log("The Number Is Zero");
//             break;
//         } case (num < 0):{
//             console.log("This Number Is Negative");
//             break;
//         } default: {
//             console.log("Invalid Input");
//         }
    
//     }
// }

// IsNumberPositiveOrNegative(-12);
// IsNumberPositiveOrNegative(0);
// IsNumberPositiveOrNegative(12);
// IsNumberPositiveOrNegative("xyz");

function IdentifyNumber (num){
    if(num<0){
        console.log("This is a Negative Number.");
        
    } else if (num==0){
        console.log("Number is Zero.");
        
    } else if (num >0){
        console.log("This is a postive Number.")
     
    }else{ 
        console.log("invalid input");
    }
}
IdentifyNumber(-12);
IdentifyNumber(0);
IdentifyNumber(25);
IdentifyNumber("xyz");