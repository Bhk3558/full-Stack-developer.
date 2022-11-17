// function CheckIfALargest (a, b, c){
    // if (a>b){
    //     if (a>c){
    //         console.log( "Largest");
    //     }else{
    //     console.log("NotLargest");
    //     } 
    // }else {
    //     console.log( " Not Largest");
    // }

    ////////using Terinary operator.(step2 to step 9)

//     return a>b ? a>c ? "largest"+a : "Notlargest"+a: "Not   Largest"+a;
// } 

// console.log(CheckIfALargest(1, 2, 3));
// console.log(CheckIfALargest(3, 2, 1));
// console.log(CheckIfALargest(2, 1, 3));





function CheckIfALargest (a, b, c){
    return a>b && a>c ? "a is largest" : b>a && b>c ? "b is largest": "c is   Largest";
} 

console.log(CheckIfALargest(1, 2, 3));
console.log(CheckIfALargest(3, 2, 1));
console.log(CheckIfALargest(2, 3, 1));