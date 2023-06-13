Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
//Função para que possa conferir o resultado 
const imprimirResultado = function (nota) {
// Se nota For entre 9 e 10 retornar Quadro de Honra 
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra');
        //Se Nota for entre 7, 8.99 retorna Aprovado. 
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
        // Se nota for entre 4, 6.99 retornar Recuperação
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
        //se nota for de 0 a 3.99 retorna reprovado 
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
        //Se não  // se não  for nenhuma das notas retorna invalida 
    } else {
        console.log('Nota Invalida');
    }
    //Iprime na tela fim 
    console.log('Fim!!');
}

//Chamando a funação imprimirResultado. 
imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
