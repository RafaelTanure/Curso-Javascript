const valor = ' Global'

function minhaFuncao() {
    console.log(valor);
}
// vai ser procurado a função no escopo lexico , o escopo maior definido 
function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec();
