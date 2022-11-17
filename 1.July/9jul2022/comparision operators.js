 console.log( "This is comparision operators file.");    

 // 4 types of operators;
 // == (ASSIGNMENT OPERATOR), === (SPECIAL OPERATOR) ; checks equal to; 
 // <, >, <=, >= ;

 var x=10;
 var y=20;
 console.log(x==y); //TRUE,FALSE;--ANSWER: FALSE(10 not equal to 20)

 var x=20;
 var y=20;
 y="20";  
 console.log(x==y);//true/false? true(20=="20")
 console.log(x===y);//true/false? FALSE(number==string)
 
 var p =10;
 var q =100;
 console.log(p<q);
 console.log(p>q);
 console.log(p<=q);
 console.log(q>=p);

 var x=[];
 var y=[];
 console.log(typeof x);
 console.log(typeof y);
 console.log(x==y);