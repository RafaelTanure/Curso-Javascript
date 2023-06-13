function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw ' mensagem'
    throw { // essa palavra significa lançar , serve para lançar o erro 
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) { // utilizando essas funções conseguimos mostrar os erros para os usúarios 
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErroELancar(e);
    }finally{
        console.log('final');
    }
}

const obj = { nome: 'Roberto' }

imprimirNomeGritado(obj); 
