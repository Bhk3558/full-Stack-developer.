function DivisibleBy60 (num){
    var found =true;
    var numstr = num.toString();
    for (let i=1020; i=9999; i+=60){
        found = true;
        for (let j=0; j<4; j++){

            if(!numstr.includes(i.toString()[j])){
                found = false;
                break;
            }
        }
        if (found){
            console.log(i);
        }
    }
}
DivisibleBy60(4320);
DivisibleBy60(1111);
