//Função randomica 
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min; // a função math. random retorna o número pseudo aleatorio no intervalo passado  de 0 a infinito. 
    return Math.floor(valor); // Função Math.floor retorna o menor numero inteiro presente 
}
const obj = { max: 50, min: 40 } // Objeto declarado com valor 
console.log(rand(obj));  // Vai inicializar em 40 e ir até 50 sorteando números ,. 
console.log(rand({ min: 955 })); //Vai inicializa no min que é 955 e gerar numeros a partir dai 
console.log(rand({})); //Vai gerar número aleátorios entre 0 e 1000 
