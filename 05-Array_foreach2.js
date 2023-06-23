Array.prototype.forEach2 = function (callback) { // aqui fizemos o foreach 
//Esse laço pecorre do primeiro elemento até p ultimo 
    for (let i = 0; i < this.length; i++) {
        //Aqui passamos 3 parametros que é o callback o this e o i.  
        callback(this[i], i, this);
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
//Utilizando o forEach para pecorrer o array e imprimir o nome em sequencia na tela.
aprovados.forEach2(function (nome, indice) { // a função call back que passamos para um foreach recebe 3 parametros podemos passar o nome , indice e o array.
    console.log(`${indice + 1}) ${nome}`)
})
