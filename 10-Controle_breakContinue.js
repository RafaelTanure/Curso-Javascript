const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Pegamos o indice de nums e passamos logo em seguida  o valor que x dentro do array é = 5 então lemos o array somente até 5 
for (x in nums) {
    if (x == 5)
        // causa um desvio de fluxo chamada de repetição corrente 
        break
    console.log(`x = ${nums[x]}`)
}
// Utilizamos o y no indice  acessamos o array de tamanho de 1 a 10 e continuamos dando sequencia a ele imprimindo de 1 a 10 , quando chega no indice 5 pulamos ele 
for (y in nums) {
    if (y == 5) {
        //causa um desvio de fluxo  que não é limitada então ela da continuidade a aquilo que foi passado.
        continue
    }
    console.log(`${y}= ${nums[y]}`)
}

//Não utilizar esse tipo de estrutura muito ultrapassado. Cuidados com esse tipo de código 
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3)
            break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
