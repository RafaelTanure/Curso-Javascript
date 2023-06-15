const pessoa = {
    saudacao: 'Bom dia !!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar; 
falar(); // conflito entre paradigmas : funcional é programação orientada ao objeto 
//Utilizando o bind para fazer a amarração da viaravel pessoa 
const falarDePessoa = pessoa.falar.bind(pessoa); 
falarDePessoa();

const falar2 = pessoa.falar; 
falar2(); 
