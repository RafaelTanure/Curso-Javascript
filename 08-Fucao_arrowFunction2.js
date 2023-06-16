// função utilizada como temporizador,  seguecontando de 1 a infinitos números.
function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++;
        console.log(this.idade)
    }, 1000)
}
new Pessoa
