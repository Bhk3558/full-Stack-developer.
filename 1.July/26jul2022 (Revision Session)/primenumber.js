function isprime (num){
    for (let i=2; i<num-1; i++){
        if (num%i==0){
        return false;
        }
    }
    return true;
}
console.log(isprime(7));