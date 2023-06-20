//Cadeida de protótipos (prototype chain)
Object.prototype.attr0 = '0'; // não faça isso em casa impactar na estrutura toda 
// Fizemos as Heranças entre avo , pai e filho 
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // Procuramos na cadeia de prototipos 

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // Utilizando super para referenciar um metodo que está em prototipo 
    }
}
//Utilizamos a função setPrototypeOf setamos aqui  para definir a relação de prototipos
Object.setPrototypeOf(ferrari, carro); // função que estabelece a relação de prototipo entre dois objetos
Object.setPrototypeOf(volvo, carro);

//Imprimimos os atributos locais ao utilizar o to string 
console.log(ferrari);
console.log(volvo); 

volvo.aceleraMais(100);
console.log(volvo.status());

ferrari.aceleraMais(300);
console.log(ferrari.status());
