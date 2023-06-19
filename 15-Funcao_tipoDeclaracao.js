console.log(soma(3, 4)); // já as demais funções podemos chamar antes ou depois da função 

//Forma tradicional function declaration
function soma(x, y) {
    return x + y;
}

//Forma expreciva functio expression 
const sub = function (x, y) {
    return x - y;
}

//Forma de Função nomeada , named function expression 
const mult = function mult(x, y) {
    return x * y;
}
console.log(soma(3, 4)); // Podemos utilizar a chamada somente depois da função mult ser criada 
