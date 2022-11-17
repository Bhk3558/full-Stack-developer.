// const edtechobj ={
//     "name" : "Relevel"
// };
// console.log(edtechobj);

// //add data to the object 
// edtechobj.website = "www.relevel.com";//adding the addtional data
// console.log(edtechobj);
// //or
// edtechobj["website"] = "www.relevel.com";
// console.log(edtechobj);


// //1.Object.freeze(varible name)
// const edtechobj ={
//     "name" : "Relevel"
// };
// console.log(edtechobj);

// edtechobj.name = "Unacademy";

// Object.freeze(edtechobj);///Object.freeze(varible name) => will not allow to modify the data
// //add data to the object 
// edtechobj.website = "www.relevel.com";
// console.log(edtechobj);
// //or
// edtechobj["website"] = "www.relevel.com";
// console.log(edtechobj);



// //2.Object.seal(variable name)
// const edtechobj ={
//     "name" : "Relevel"
// };
// Object.seal(edtechobj);//Object.seal(variable name) => will only modify existing data but dont add addtional data.
// edtechobj.name = "Unacademy";
// edtechobj["website"] = "www.relevel.com";
// console.log(edtechobj);
// //check whether the object is sealed or not
// console.log(Object.isSealed(edtechobj));//output => true



// // difference between Object and const
// // const => you can't reassign the object/value
// // Object => insid ethe obj, if u want to make changes , u can use : Object.freeze(varible name) 