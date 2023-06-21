// Forma de utilização de herança em classe , criamos funções classe
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
} // classe que extende a avo 
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome);
        this.profissao = profissao;
    }
} // class que extende a Pai 
class Filho extends Pai {
    constructor() {
        super('Silva');
    }
}
// Instanciando a classe Filho e imprimindo no console. 
const filho = new Filho;
console.log(filho);
