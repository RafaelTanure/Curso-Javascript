const [a] = [10];
console.log(a);

const [n1, , n3, , n5, , n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

//Um array pode ter outros elementos do tipo array exemplo abaixo: 
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; // caso não utilizavel no dia a dia  Mais fácila acesssar pelo indice
console.log(nota); 

//O destructuring no Objeto utiliza as {} , e no array utilizamos os [], basta saber onde queremos utilizar a estura. no array ou no objeto
