// const Add = function (){
//     var x=10;
// console.log(x);
// };
// Add();


// // Q1.when x will start occupying memory ?
// // when we invoke Add();
// // Q2. till when it will occupy that memory?
// // after function is completed then x is destroyed.

// // understanding Closure
// // 1.learning about scope
// // 1.1 when x will start occupying memory?
// // as soon as Add function invokes
// // 1.2 how long x will remain in memory?
// // until function complete its exection
// // 2.using inner function
// // 2.1 there is a differnce in creating and invoking a function

const Add =function(){          //function expression` 
    var x=10;
    console.log(x);
    return function add2(){
        var y=20;
        console.log(x+y)
    }
}
const result = Add();
const result2 = result();
console.log(result2);



