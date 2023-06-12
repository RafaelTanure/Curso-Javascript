//Hoisting significa o içamento de váriavel. Mesmo se fizer uma função vai haver o Içamento. 
console.log('a = ', a);
var a = 2;
console.log('a = ', a);

//Quando declaramos com let gera um erro e não ocorre o içamento. 
console.log('b = ',b); 
let b=2; 
console.log('b = ', b);
