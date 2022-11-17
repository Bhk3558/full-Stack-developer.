// Pure Function 
// 1. it does not depends on any external Data
// 2. it only depends on arguments passed
// 3. it does not have any side effects.

function PureAddFunction (a,b){
    return a+b;
}
console.log(PureAddFunction(10,20));

// impure Function
// 1.it depends on external Data
// 2.its behaviour might be changed as side effect
const numC = undefined;
function impureAddFunction (a,b){
    return a+b+numC;
}
console.log(impureAddFunction(10,20));
