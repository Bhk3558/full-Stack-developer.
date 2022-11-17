function sumofinnerdigits (num){
    var numstr =num.toString();
    if (numstr.length<3){
        console.log(-1);
        return;
    }
    let sum = 0;
    for(let i=1; i<=numstr.length-2; i++){
        sum+=Number(numstr[i]);
    }
    console.log(sum);
}
sumofinnerdigits(123456);
sumofinnerdigits(6542);
sumofinnerdigits(9);
sumofinnerdigits(7071);