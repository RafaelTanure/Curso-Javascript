//Sempre utilizar chaves , se quiser várias senteças de código utilizando o IF , melhor então sempre utilizar as chaves. 
function teste1(num) {
    if (num > 7)
        console.log(num);

    console.log('final');
}
teste1(6);
teste1(8);

function teste2(num) {
    if (num > 7); //Cuidado com o ; não utilizar com as estruturas de contro  le.
    {
        console.log(num)
    }
}
teste2(6);
teste2(8);
