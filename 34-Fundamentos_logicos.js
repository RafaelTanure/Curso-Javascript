function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; // Utilizando o Operador ou ||
    const comprarTv50 = trabalho1 && trabalho2; // Utilizando o Operador e && 
    //const comprarTv32 = !!(trabalho^trabalho2) // Operador Bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete // Operador unário 
    return { comprarSorvete: comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // criação de objeto de forma reduzida 
}

// Passando aqui valor de verdadeiro ou falso, se vai ou não fazer o que está explicito na função. 
console.log(compras(true, true)); 
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false)); 
