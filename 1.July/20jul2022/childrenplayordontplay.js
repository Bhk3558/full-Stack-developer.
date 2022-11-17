//Problem 1 –
//Create a program which gives output for children to go out in park if the temperature is between 20
// degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if
// the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they
// should not step out of the home.

// let temp = 20;
// let isRaining = true;
// //function IsRaining()
// if((temp>=20 && temp<=25) && isRaining == false){
//     console.log("you can go out to play");
// } else if ((temp>=18 && temp<=20) && isRaining === false) {
//     console.log("stay inside the play school");
// }else{
//     console.log("go home and stay there");
// }


// let temp = 19;
// let isRaining = false;
// //function IsRaining()
// if((temp>=20 && temp<=25) && isRaining == false){
//     console.log("you can go out to play");
// } else if ((temp>=18 && temp<=20) && isRaining === false) {
//     console.log("stay inside the play school");
// }else{
//     console.log("go home and stay there");
// }


//educator answer

function CanGotoPark (temp, isRaining){
    //if (temp>=20 && temp <=25 && !isRaining){}
    if (temp>=20 && temp <=25 && isRaining == false ){
        console.log("children can go to park");
    } else if ( temp>=18 && temp<=20 && isRaining==true){
        console.log( "you can't go to park" );
    } else{ 
        console.log("stay at home");
    }
}

CanGotoPark(21, false);
CanGotoPark(19, true);
CanGotoPark(40, true);
CanGotoPark(40, false);
