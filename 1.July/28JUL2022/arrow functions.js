// //arrow function => short => easy to use & pass as parameters => readable
// => when you multiple statements use {}

// //arrow function syntax
// const varibleName =(parameters)=>{body};

// //1.regular function

// function add (a, b){
//     return a+b ; //or
//     //console.log(add);
// }
// console.log(add(10,20));
// //add (10,20);


// //2.function Expression

// const adding = function(a,b){
//     return a+b ; //or
//     // console.log(adding);
// }
// console.log(adding(15,40));



// //3.arrow function
// const addfunc = (a,b) => a+b;
// console.log(addfunc(55,35));



// //when multiple statements has to be executed

// //1.regular function

// function add (a, b){
//     const result= a+b;
//     console.log(result)
//     return result;
// };
// add (15,25);


// //3.arrow function
// const addfunc = (a,b) => {
//     const result = a+b;
//     console.log(result);
//     return result;

// }
// addfunc (15,35);






// //map function => transorm array into a new array as a reult of some operations

// const student = [2, 9, 43, 90, 45, 32 , 89, 76];
// function multiplyby2 (array ){
//     const result= []; // creating an empty array
//     for (let i=0; i<array.length; i++){
//     result.push(array[i]*2);
//     }
//     console.log(result);
// }
// multiplyby2(student);



// const students =[2, 9, 43, 90, 5, 2 , 9, 6];
// console.log(students.map((num)=>num*2));



// //filterfunction => 
// const nums= [19, 45, 78, 23, 12, 90, 32, 87, 63];
// const isEven = (num)=>num%2==0;
// console.log(nums.filter(isEven));


const studentNames = ["harish", "shiva", "sowjanya", "gopi", "siddiq","sai", "hare krishna", "kumar"];
console.log(studentNames.filter((name)=>name.length<=4));

