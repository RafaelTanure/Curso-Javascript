//If significa valor se
function soBoaNoticia(nota) {
    //se for maior ou igual a 7 está aprovado 
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}
soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seFroVerdadeEuFalo(valor) {
    //Se for valor é veradeiro 
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}
//se for verdadeiro vai imrprimir na tela os demais valores não vão imprimir
seFroVerdadeEuFalo();
seFroVerdadeEuFalo(null);
seFroVerdadeEuFalo(undefined);
seFroVerdadeEuFalo(NaN);
seFroVerdadeEuFalo('');
seFroVerdadeEuFalo(0);
seFroVerdadeEuFalo(-1);
seFroVerdadeEuFalo(' ');
seFroVerdadeEuFalo('?');
seFroVerdadeEuFalo([]);
seFroVerdadeEuFalo([1, 2]);
seFroVerdadeEuFalo({});
