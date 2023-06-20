console.log(typeof String); // Function 
console.log(typeof Array); // Function 
console.log(typeof Object); // Function 

String.prototype.reverse = function () {
    return this.split('').reverse().join('') // Utilizando Metodos como Split e reverse para  alterar a forma das letras 
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0] // Utilizando o array para armazenar o código 
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c']);

String.prototype.toString = function () {
    return 'Lascou Tudo'
}
console.log('Escola Cod3r'.reverse());
