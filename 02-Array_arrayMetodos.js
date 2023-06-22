const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop(); // esse método remove o ultimo elemento do array 

pilotos.push('verstappen'); // Esse metodo adiciona um novo elemento dentro de uma array, na ultima posição
console.log(pilotos);

pilotos.shift();//remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona no primeiro elemento do array 
console.log(pilotos);

//splice pode adicionar ou remover elementos 

//adicionar 
pilotos.splice(2, 0, 'Botas', 'Massa');
console.log(pilotos);

//Remover
pilotos.splice(3, 1); //Retiramos novamente o massa do array . 
console.log(pilotos);

// novo array gerado , utilizando o método slice para  criar uma array a partiir do indice passado nele que é o indice 2 
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

//Esse método retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original
const algunsPilotos2 = pilotos.slice(1, 4); 
console.log(algunsPilotos2); 
