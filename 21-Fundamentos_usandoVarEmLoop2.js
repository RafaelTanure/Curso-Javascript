const funcs = []; // em vez de utilizar var , temos que utilizar const, para passar o valor consntante 

//var não tem o escopo de função.
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

//Então  vai imprimir o valor de 10 para cada uma das chamadas.
funcs[2]();
funcs[8](); 
