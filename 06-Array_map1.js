const nums = [1, 2, 3, 4, 5]

//Map é um for com propósito 
let resultado = nums.map(function (e) {
    return e * 2
})
console.log(resultado);

const soma10 = e => e + 10; //Aqui soma 10 no map 
const triplo = e => e * 3; // aqui multiplica o valor por 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // Aqui convertemos o valor para dinheiro
//Converte para cada um dos elementos 
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado)
