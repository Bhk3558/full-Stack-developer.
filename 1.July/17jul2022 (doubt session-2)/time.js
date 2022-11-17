function CHECKTIME(time ){
if (x>0 && x<=24){
    if ((x>=22 && x<=24)||(x>22 && x<=4)){
        console.log("Good Night");
    } else if (x>=5 && x<12){
        console.log("Good Morning");
    } else if (x>=12 && x<17){
        console.log("Good Afternoon");
    } else if(x>17 && x<22){
        console.log("Good Evening");}
    } else if (x>24){
        console.log("Please enter the time with in 24 hours");
    }
    // return x;
}
// }
CHECKTIME(2);
CHECKTIME(11);
CHECKTIME(14);
CHECKTIME(18);
CHECKTIME(22);
CHECKTIME(26);