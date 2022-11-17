function totalsumofdigits (num){
    var total = 0;
    while (num!=0){
        total = total+num%10;
        num = parseInt(num/10);
    }
    return total;

}
console.log(totalsumofdigits(1234));
