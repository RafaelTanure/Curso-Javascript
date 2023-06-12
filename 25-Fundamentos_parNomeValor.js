//par nome/valor
const saudacao = 'Opa' // contexto léxico 1 é o contexto fisico onde a váriavel foi definida, aqui esta definida no nivel do arquivo 

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2 
    return saudacao;  // Podemos retornar e não gera conflitos por estar em contextos diferentes 
}

// Objetos são grupos aninhados de pares nome/valor 

const cliente = {
    nome: ' Pedro',
    idade: 32,
    peso: 90,
    ebdereco: {
        logradouro: 'Rua Muito legal',
        numero:123 
    }
}
//Chamando as funções abaixo 
console.log(saudacao); 
console.log(exec()); 
console.log(cliente); 
