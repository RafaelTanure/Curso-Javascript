Array.prototype.map2 = function (callback) { // Função map dentro dela está os dados abaixo. ao utilizarmos pecorremos o array . 
    const newArray = []
    for (let i = 0; i < this.length; i++) { // Pecorrendo o array da menor posição até a maior posição
        newArray.push(callback(this[i], i, this)); //passando 3 elementos paa a função map 
    }
    return newArray;
}

const carrinho = [ // código em Json 
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.50}',
]

//Vamos retornar um array apenas com Preços. 

const paraObjeto = json => JSON.parse(json); // transformando de Json para objeto 
//Função para pegar apenas os Preços.
const apenasPreco = produto => produto.preco;

//Chamando as funções e imprimindo na tela o preço do conteudo 
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado); 
