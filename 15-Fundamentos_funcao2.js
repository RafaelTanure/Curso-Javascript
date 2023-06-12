// Armazenando uma função dentro de uma váriavel. 

const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); //Vai imprimir na tela 5; 

//Armazenamento uma função arrow em uma variavel. 

const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

//retorno implícito 
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3)); // Aqui será passado o valor -1.


const imprimir2 = a => console.log(a);
imprimir2 ('legal !!!');  // imprime legal. 
