// let x = "HARISH";
// let output = x[5]+x[4]+x[3]+x[2]+x[1]+x[0];
// console.log(output);


function reversestring(str){
var x = "Harish";
var output ="";
for (let i=str.length-1; i>=0; i--){
    output= output+str[i];
    //i=>ia=>iab=>iabm=>iabmu=>iabmuM
}
console.log(output);
}
reversestring("Mumbai");
reversestring("hare krishna");
reversestring("Bapatla is a small town");
