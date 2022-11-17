function FindLargest (a, b, c){
    if (a>b && a>c){
        console.log(a+ " Is Largest ");
    } else if(b>a && b>c){
        console.log(b+ " Is Largest ")
    } else {
        console.log(c+ " Is Largest ")
    }
}
FindLargest(10, 32, 14);
FindLargest(90, 32, 43);
FindLargest(9, 2, 54);