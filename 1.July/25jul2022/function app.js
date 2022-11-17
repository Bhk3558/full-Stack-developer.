//problem : create a class having multiple functions and showcase the functions calling and reusibility concept of the functions.
//steps:
//1.create a class function app
//2. create function 1- to count no of objects created
//3. create functoin 2- execute some logic
//4. create functoin 3- execute some logic
//5. call function 2 from function 3
//6. functions can be called multiplw times instead of writing logic again and again.


var countofObjects = 0; //global scope

class FunctionApp {
    count;

    //when object is created constructor is invoked.
    //it is invoked as soon as object is created.
    constructor (){
        countOfObject++;
    }

    countofObject(){
        console.log("count of objects=" + countofobjects)
    }

    dologic2 (){
        console.log("performing logic 2");
    }
    dologic3 (){
        console.log("performing logic 3");
    console.log(this);
    //calling another method using same object.
    this.dialogic2();
    }
}

const obj1 = new FunctionApp();
const obj2 = new FunctionApp();
const obj3 = new FunctionApp();
obj1.consoleobject();
obj2.dologic3(); 