// function PrintResult (marks){

//     if (marks<35){
//         console.log("you have failed");
//     } else if (marks>=35 && marks<50){
//         console.log("you are pass");
//     } else if (marks>=50 && marks<=60){
//         console.log("you have got second class");
//     } else if (marks>60 && marks<=75){
//         console.log("you have got first class")
//     } else {console.log( "you got distinction")}
// }
// PrintResult (20);
// PrintResult (35);
// PrintResult (40);
// PrintResult (50);
// PrintResult (60);
// PrintResult (70);
// PrintResult (75);
// PrintResult (90);
// PrintResult (99);

function PrintResults (grade) {

    switch (grade){ 

        case "A+":{
            console.log("Distinction");
            break;
        }
        case "A":{
            console.log("First class");
            break;
        }
        case "B":{
            console.log("Pass");
            break;
        }
        case "C":{
            console.log("Fail");
            break;
        }
    }
    console.log(" Out of switch");
 }

PrintResults("A+");
PrintResults("A");
PrintResults("B");
PrintResults("C");





