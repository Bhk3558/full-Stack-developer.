// function Printstar (star){
//     for (var star="*"; star.length<=star; star+='*'){
//         console.log( "print star"+ star);
//     }
//     }
//     Printstar(5);


function pattern (n){
    for(let i=1; i<=n; i++){
        let stars ="";
        for ( let j=1; j<=i; j++){
            stars += "*";
        }
        console.log(stars)
    }
}
pattern (5);
