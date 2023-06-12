//É um operador de destruturação, ele desestrutura, tira do objeto. É um recurso novo do ES2015 

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// Extraimos essas duas váriaveis do operador pessoa, para utilizar.
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

//vai setar undefined por não apontar para nada , sobrenome e bemHumorada
const { sobrenome, bemHumorada = true } = pessoa;

//Aqui vai imprimir o cep como undefined por não estar dentro do operador pessoa. 
const { endereco: { logradouro, numero, cep } } = pessoa; 
console.log(logradouro,numero,cep);

//const {conta: {ag , num}} = pessoa; 
// console.log(ag,num);  // vai dar erro  por não estar dentro do operador e não estar estruturado 

 //Temos que ter esse cuidado quando a gente tenta desestruturar um dado aninhado , temos que ter certeza que o caminho até o dado está livre e de fato Setado 
