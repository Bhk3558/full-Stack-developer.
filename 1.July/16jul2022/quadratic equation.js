function findroot (a, b, c){
    var root1 = ((-b)+(((b*b)-(4*a*c))**0.5))/(2*a);
    var root2 = ((-b)-(((b*b)-(4*a*c))**0.5))/(2*a);
    var root3 = -b/(2*a);

    if(b*b - 4*a*c==0){
        console.log(root3);
    }else if(b*b - 4*a*c>0){
        console.log(root1 + root2);
    }else{console.log("no root found");
}
}
findroot(1, 5, 1);