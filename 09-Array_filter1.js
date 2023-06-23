const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
//Passamos a callback 
console.log(produtos.filter(function (p) {
    return false;
}))
//Fizemos duas funções aqui , a primeira condiz que caro é maior ou igual a  500 para acessar itens de maior valor no array 
const caro = produto => produto.preco >= 500;
//A segunda função indica os produtos que são Fragil. 
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil))
