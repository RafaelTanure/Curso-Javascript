const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quaseArray);
Object(quaseArray, 'toString', {
    value: function () {
        return Object.values(this);//Função não enumerada]
    }, enumerable: false
})

console.log(quaseArray[0])
//O método toString() retorna uma string representando o código fonte da função
const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toString(), meuArray);
