// step1 : create prototype---------class
// step2: create object/instance using prototype-----constructor
// step3: Asssigned Attributes to Objects--------
//step4: call Methods/Perform Actions.




//keywords:
//1. class: create a Prototype
//2. this: refers to object which has call the constructor//ex:     this.name
//3. new: used to creatre new objects from a prototype//ex:     const SiddiqObj = new classname ("properties/attributes")
//4. function: when you are creating a prototype using class you dont need a function keyword


//you can createinfinite numbeer of objects from prototype
//Rule 1: when you are creating a prototype using class you dont need a function keyword
  


class Environmentalist {
    // class is used to create a prototype
    constructor (name, properties){
        //constructor is used to create an object from prototype    //  define the properties/attributes of prototype.
    //this.name = name;
    //this.location = location;
    }

    SurveyArea (){
        console.log("Area Surveyed");
        return 100;
    }

    ShowAlert(){
        console.log("please plant more trees");
    }

    PlantTrees(){
        console.log("10 trees Planted");
    }

}
//step3: Assigned attributes to objects
const HarishObj = new Environmentalist(" Harish", "india-Delhi");
console.log(typeof HarishObj);      //output:object
console.log(HarishObj instanceof Environmentalist);     //output: true


const siddiqObj = new Environmentalist("Siddiq", "India-Hyderabad");
const SowjiObj = new Environmentalist(" Devil", "India-Chennai");
//step4: how to call actions for an object

HarishObj.SurveyArea();

siddiqObj.ShowAlert();

SowjiObj.PlantTrees();
