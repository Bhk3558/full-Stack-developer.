function findMinMax (array){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for (let i=0; i<array.length; i++){
        if (array[i]<min){
            min = array[i];
        }
        if(array[i]>max){
            max = array[i];
        }
    }
    console.log("min:" + min);
    console.log("max:"+ max);
}
findMinMax([2, 3, 15, 6]);
findMinMax([2, 3, 15, 6, 1, 7, 43, 90, -54,-2345 ])
findMinMax([3, 2, 15, 6]);
