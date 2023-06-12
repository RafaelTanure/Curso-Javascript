{ 
    { 
        { 
            { var sera = 'sera???' };
            console.log(sera); 
        } 
    } 
}
console.log(sera);  // a variavel será vísivel mesmo fora do bloco mesmo que coloque dentro do bloco a declaração. 

function teste(){
    var local= 123; // a váriavel só é visível dentro da function. 
    console.log(local);
}

teste();
console.log(local); // Gera um erro por ser chemando o teste logo a cima sobreescreve a váriavel local. Não gerar váriavel de escopo Global. 
