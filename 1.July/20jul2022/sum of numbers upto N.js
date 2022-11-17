function SumTillN (n){
    let sum =0;
    for (let i=1; i<=n; i++){
        sum = sum + i;
    }
    console.log(sum);
}
SumTillN (5);//15
SumTillN (10);//55
SumTillN (15);//120
SumTillN (100);