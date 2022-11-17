// let inntercounter = 1;
// for(let i=1; i<5; i++){
//     console.log("outer for loop:"+i);
//     for(let j=0; j<=1; j++){
//         console.log ("inner for loop:"+inntercounter++);
//     }

// }


let inntercounter = 1;
let inntercounter2 = 1;
for(let i=1; i<5; i++){
    console.log("outer for loop:"+i);
    for(let j=0; j<=1; j++){
        console.log ("inner for loop:"+inntercounter++);
        for(let j=0; j<=5; j++){
            console.log ("inner for loop:"+inntercounter2++);
        }
    }

}