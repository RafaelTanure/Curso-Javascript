const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
//Utilizando o forEach para pecorrer o array e imprimir o nome em sequencia na tela.
aprovados.forEach(function (nome, indice) { // a função call back que passamos para um foreach recebe 3 parametros podemos passar o nome , indice e o array.
    console.log(`${indice + 1}) ${nome}`)

})

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);
