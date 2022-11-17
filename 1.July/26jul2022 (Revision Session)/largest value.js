function largestnumber (x,y,z){
    if (x>y && x>z){
        console.log("Largest value :" +x);
    }else if(y>x && y>z){
        console.log("largest value :" +y);
    }else{
        console.log("largest value :" +z);
    }

}

largestnumber(10,20,30);
