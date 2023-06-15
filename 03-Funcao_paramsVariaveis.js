function soma() {
    let soma = 0;
    //toda função tem esse array arguments disponível, podemos fazer qualquer tipo de alteração nele
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma;
}
// Conseguimos passar quantos parametros queremos abaixo nas funções 
console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1.1, 2.2, "Teste"));
console.log(soma('a', 'b', 'c'));
