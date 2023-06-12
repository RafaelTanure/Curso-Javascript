let valor; // não inicializada 

console.log(valor); // vai imprimir no console undefined 

valor= null; // null significa ausência de valor 
console.log(valor); // Não aponta para nenhum espaço de memória. 

// Não pode acessar nenhum valor que antes venh nulo ou undefined, tem que haver algum valor a váriavel  Gera ERRO ! 
// console.log(valor.toString()); !! Erro 

const produto = {}; 
console.log(produto.preco); 

console.log(produto); 

produto.preco = 3.50;
console.log(produto); 

produto.preco = undefined; // evite atribuir undefined 
console.log(!!produto.preco);
//delete produto.preco 
console.log(produto);

produto.preco= null // sem preco 
console.log(!!produto.preco);
console.log(produto);
