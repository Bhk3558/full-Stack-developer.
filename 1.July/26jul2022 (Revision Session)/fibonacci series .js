function PrintFibonacci (n) {
let first = 0;
let second = 1;
let temp = 0;
console.log(first);
console.log(second);
for (let i=2; i<n; i++){
    temp = first + second;
    console.log(temp);
    first=second;
    second=temp;
}
}
PrintFibonacci(10);
