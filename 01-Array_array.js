//Um array em java script é um objeto, em vez de organizar os atributos em chave , ele é organizado em indices Exemplo indice 1 , indice 0 
//É organizado a partir de indices.
console.log(typeof Array, typeof new Array, typeof []); // Array literal é representado por []

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);// Acessamos o  elemento a partir do indice que é o 0 
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'; // Acessamos elemento a partid de um idice que já existe e alteramos ele 
aprovados.push('Bia'); // Metodo push adiciona elementos no array 
console.log(aprovados.length); // Imprimimos o array até o maior length 

aprovados[9] = 'Rafael'; // Colocamos um elemento lá na frente , adicionamos o 10 elemento que é o de indice 9 
console.log(aprovados.length);
console.log(aprovados[8] === undefined); //Testamos o 9 elemento deu undefined

console.log(aprovados);
aprovados.sort; // Causou uma alteração dentro do array utilizando o método sorte ficando ordenado
console.log(aprovados);

delete aprovados[1]; // Excluindo um ponto dentro do array Atribui na posição 1 
console.log(aprovados[1]); 
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento1', 'Elemento2'); // Exclui e adiciona utilizando o método splice. Remover novos elementos , adicionar novos elementos
console.log(aprovados); 
