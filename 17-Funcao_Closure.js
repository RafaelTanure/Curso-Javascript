//Clousure é o escopo criado qando uma função é declarada 
//Esse escopo permite a função acessar e manipular as variáveis externas a função 

//Contexto Léxico em ação ! 

const x = 'Global';

function fora() {
    const x = 'Local'; // vai ser acessada a váriavel x e não a global, por estar no escopo da função
    function dentro() {
        return x;
    }
    return dentro;
}
const minhaFuncao = fora();
console.log(minhaFuncao());
