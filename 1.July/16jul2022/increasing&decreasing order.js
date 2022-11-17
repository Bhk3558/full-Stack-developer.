function CheckOrder (a, b ,c){
    if (a>b && b>c){
        console.log("Decreasing order")
    } else if (a<b && b<c){
        console.log("Increasing order");
    }else {
        console.log("No Order")
    }
}
CheckOrder(12, 23, 45);
CheckOrder(76, 54, 42);
CheckOrder(11, 76, 34);