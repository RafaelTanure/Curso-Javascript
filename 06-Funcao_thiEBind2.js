function Pessoa() {
    this.idade = 0;

    const self = this; // criando a constant para acessar os atributos utilizando self 
    setInterval(function () {
        self.idade++; 
        console.log(self.idade);
    }/*.bind(this)*/, 1000) // A cada segundo a idade da pessoa vai sendo apresentada 
}

new Pessoa
