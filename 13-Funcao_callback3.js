//Exemplo de callback no browser 
//Função utilizada com um click no browser para ocorrer um evento 
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
}
