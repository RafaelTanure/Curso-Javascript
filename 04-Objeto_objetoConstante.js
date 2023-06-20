//pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa);

//pessoa -> 456 -> {...}  como constante sempre apontara para o objeto a cima , não podemos atribuir novamente para um novo objeto.
//pessoa = {nome:'Ana'} Erro 

Object.freeze(pessoa); // Transforma o objeto si em constante não podendno ser alterado ou excluir, fica congelado 
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC'
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaContate = Object.freeze({ nome: 'João' })
pessoaContate.nome='Maria'; // vai continuar imprimindo o nome João . esta congelado esse objeto 
console.log(pessoaContate);
