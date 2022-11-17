// // one way to express a function
// var x=10;
// function PrintMessage(message){
//     console.log(typeof message);
// console.log(message);
// }
// PrintMessage("Hello Harish");// calling a function



// //another way to express a function

// var y=20;
// const add = function (a,b){
//     console.log(a+b);
// }
// add (20, 5);
// console.log( typeof add);// calling a function



// const add =function (a,b){
//     console.log(a+b);
// }

// function AddAndPrintMessage (funadd, message){
//     funadd(10,25);
//     console.log(message);
// }
// AddAndPrintMessage (add, "Hello Harish");



const add = function(a, b){
    console.log(a+b);
}
const sub = function(a, b){
    console.log(a-b);
}
function calc(func){
    func(29,39);
}
calc(add);
calc(sub);
