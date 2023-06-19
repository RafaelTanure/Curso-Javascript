function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado  / Sempre quando declaramos na frente a função vai ser privada let ou const 
    let velocidadeAtual = 0;

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());


// imprime function
console.log(typeof Carro);
// Imprime Objeto 
console.log(typeof ferrari); 
