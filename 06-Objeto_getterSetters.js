//Get e Set é uma função  que utilizamos para acessar os valores dentro da variavel por meio de _ 
const sequencia = {
    _valor: 1, // convenção 
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
}
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);
