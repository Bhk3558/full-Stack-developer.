//formulae used:n/m >0.75="your attendence is morethan 75%."
//formulae used:n/m*100 + "% attendence".
// m =total no of lectures.
// n= no of lectures attended.
function MinPercentage (m , n){
    if(n/m > 0.75){
        console.log("Your Attendence is more than 75 % ");
    } else { console.log (n/m*100 + "% attendence");
}
}

MinPercentage (25, 10);
MinPercentage (8, 3);

MinPercentage (7, 5.25);

