//22-4=night
//4-12=morning
//12-16=afternoon
//16-22=evening
function CHECKTIME(time ){
//22-4=night
//4-12=morning
//12-16=afternoon
//16-22=evening
     if (time>=4 && time<12){
        console.log("morning");
    } else if (time<=16 && time >=12){
        console.log("afternoon");
    } else if (time<22 && time>16){
        console.log("evening");
    } else if (time>=22 && time<4 ){
        console.log("night");
    } else{
    console.log("invalid time");}
}

// CHECKTIME(28)
// CHECKTIME(2);
// CHECKTIME(18);
// CHECKTIME(6);
// CHECKTIME(13);

CHECKTIME(2);