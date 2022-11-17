//how does array stores data?
//how to access array data?
//how to search a array data?

var arrayofnumbers = [2,3,4,5,88,32];
// console.log(arrayofnumbers);
// console.log(arrayofnumbers.length); //ok
// console.log(arrayofnumbers[3]);// calling index position//ok
// console.log(arrayofnumbers.indexOf(4));//giving the array data value asking for index position


var arrayofstring = ["hare",  "kishna", "harish", "shiva", "ram"];
// console.log(arrayofstring);
// console.log(arrayofstring.length); //ok
// console.log(arrayofstring[3]);// calling index position//ok
// console.log(arrayofstring.indexOf("shiva"));


var arrayofmixed =[10,"hare krishna",25,true, 2, "harish", false];
console.log(arrayofmixed);
// console.log(arrayofmixed.length); //ok
// console.log(arrayofmixed[3]);// calling index position//ok
// console.log(arrayofmixed.indexOf("harish"),(false));


//how to delete a data?

arrayofmixed.pop();//pop keyword delete last index position//method 1
console.log(arrayofmixed);

arrayofmixed.splice(2,1);//splice keyword used to delete multiple data  & add one data at that postion //method 2
console.log(arrayofmixed);


arrayofmixed.shift("added value");//method3
console.log(arrayofmixed);//shift keyword is used to first element 


// how to update a array data?

// arrayofmixed.splice(2,1, "deleted");//method1
// console.log(arrayofmixed);

// arrayofstring.push("added");//method2
// console.log(arrayofstring);//push keyword add the data at the end





// all types

// console.log(variblename);
// console.log(variblename.length); //ok
// console.log(variblename[3]);// calling index position//ok
// console.log(variblename.indexOf(4));//giving the array data value asking for index position


// arrayofmixed.pop();//pop keyword delete last index position     //method 1
// arrayofmixed.splice(2,1);//splice keyword used to delete multiple data  & add one data at that postion       //method 2
// arrayofmixed.shift("added value");  //method3



// arrayofmixed.splice(2,1, "deleted");//splice keyword used to delete multiple data  & add one data at that index postion //    method1
// arrayofstring.push("added");//push keyword add the data at the end//        method2
