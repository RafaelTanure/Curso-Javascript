console.log('01)', '1' == 1); // retornar verdadeiro
console.log('02)', '1' === 1); // retornar falso
console.log('03)', '3' != 3);// retorna falso
console.log('04)', '3' !== 3);// retorna verdadeiro

console.log('05)', 3 < 2); // retorna falso 
console.log('06)', 3 > 2); //retorna verdadeiro 
console.log('07)', 3 <= 2); // retorna falso 
console.log('08)', 3 >= 2); // retorna verdadeiro 

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2);// retorna falso
console.log('10)', d1 == d2); //retorna falso
console.log('11)', d1.getTime() === d2.getTime()); // retorna verdadeiro

console.log('12)', undefined == null); // retorna verdaeiro 
console.log('13)', undefined === null); //retorna falso
