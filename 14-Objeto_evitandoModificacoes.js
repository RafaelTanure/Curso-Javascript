//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto); 

//Object.seal  Sela o objeto não conseguimos mexer nesse objeto 
const pessoa = { nome:'Juliana', idade : 35}
Object.seal(pessoa); 
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome='Silva'; 
delete pessoa.nome; 
console.log(pessoa); 

//Objec.freeze = Selado - o Freeze congela e o seal sela o objeto. 
