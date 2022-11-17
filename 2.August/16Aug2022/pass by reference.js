// function PassByReference (array, value){
//     array.push(value);
// }
// const arr = [2,3,4,5];
// PassByReference(arr,6);
// console.log(arr);
// console.log(typeof arr );



function CheckForObject (obj){
    obj.age=25;
}
const obj = {name: "x", age:20}
let obj2={};
obj2=obj;
console.log(obj);
console.log(obj2);




var x=200;
var y=x;
y=20;
console.log(x);
console.log(y);