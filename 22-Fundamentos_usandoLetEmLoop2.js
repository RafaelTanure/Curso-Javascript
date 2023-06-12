const funcs = [];

//Utiliza o let, nossa função vai imprimir os valores das posições que são passadas quando chamamos a função logo em baixo
for(let i = 0 ; i <10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
//Uma função de javaScript é um cloud .Tem conciencia do local que ela foi definida 
funcs[2]();
funcs[6]();
funcs[8](); 
