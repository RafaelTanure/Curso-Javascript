//Função em JS  É First-Class Object (Citizens).
// Higher orden function (Função de alta ordem).

// criar de forma literal 
function fun1() { }

//Armazenar em uma váriavel 
const fun2 = function () { }

//Armazenar dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto 

const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar());

//Passar função como Parametro 
function run(fun) {
    fun();
}
run(function () { console.log('Executando....'); })

//Uma função pode retornar e pode conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
