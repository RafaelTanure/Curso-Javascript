const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.__proto__) // dois underline acessamos o prototipo do objeto até achar se não achar retorna undefined

console.log(ferrari.prototype); // Retornar Object undefined Não consegue acessar sem os __ Underlines
console.log(ferrari.__proto__); // Retornar Object null prototype
console.log(ferrari.__proto__ === Object.prototype); // Retorna True
console.log(volvo.__proto__ === Object.prototype);//Retornar true
console.log(Object.prototype.__proto__); // Retorna somente null
console.log(Object.prototype.__proto__ === null); // Retorna true 

function MeuObjeto() {
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Obect.prototype, MeuObjeto.prototype)
}
