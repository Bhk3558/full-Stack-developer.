function GradingSystem (score){
    if(score>=90 && score<=100){
        console.log("A Grade");
    } else if(score>=80 && score<=89){
        console.log("B Grade");
    }else if (score>=60 && score<=79){
        console.log("C Grade");
    }else if (score>=33 && score<=59){
        console.log("D Grade");
}else  {
    console.log("F Grade");}
}
GradingSystem(30);
GradingSystem(100);
GradingSystem(85);
GradingSystem(66); 
GradingSystem(45); 