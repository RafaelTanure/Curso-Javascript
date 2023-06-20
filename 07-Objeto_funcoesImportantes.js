const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
//Pega todas as chaves do Objeto ou de qualquer objeto 
console.log(Object.keys(pessoa))
//Pega os valores de um determinado objeto 
console.log(Object.values(pessoa))
//Pega uma lista tanto quanto as chaves e os valores, podemos utilizar para percorrer um array 
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Utilizamos para definir uma propriedade do Objeto 
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj)
obj.c = 1234
console.log(obj); 
