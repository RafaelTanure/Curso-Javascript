// temos uma declaração de uma váriavel 
let contador = 1;
//temos uma expressão  contador menor ou igual a 10 
while (contador <= 10) {
    // Imprimimos contador 
    console.log(`contador = ${contador}`);
    // Incrementamos o valor de 1 no contador cada vez quando é chamado até 10 
    contador++;
}
// Aqui utilizamos uma váriavel let chamada i , recebendo o valor 1  e passando a expressão quando ir for menor ou igual a 10 , incrementamos 1 no valor. sendo assim imrpimindo
// 1, 2 , 3 , 4 , 5 ,6 ,7 , 8 ,9 , 10 - pega o valor 1 que a váriavel recebe.
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// Length  significa o comprimento do array para pegar todo valor que foi passado logo acima em notas . 
for (i = 0; i < notas.length; i++) {
    //Aqui imprimimos o array notas na posição i se i for menor que notas incrementa 1 nos valores passado dentro do array 
    console.log(`nota = ${notas[i]}`);
}
