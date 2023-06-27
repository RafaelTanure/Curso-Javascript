//Uma função que serve para transformar um array em um outro elemento podendo ser string numeros inteiros 
// O primeiro reduce recebe o elemento do indice 0 ou elemento do indice 1, ela utiliza elemento corrente o resultado sempre acumula e passa para proximo elemento 
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Mari', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota)); 
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 0)

console.log(resultado); 
