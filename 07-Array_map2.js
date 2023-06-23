const carrinho = [
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
const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado); 
