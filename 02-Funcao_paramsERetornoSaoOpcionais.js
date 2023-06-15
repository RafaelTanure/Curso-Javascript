function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido : ${area}m2.`);
    } else {
        return area;
    }
}
//Passando valores para a função a cima , e exibindo os retornos
console.log(area(2, 2)); // retorna 4 
console.log(area(2)); // Retorna NaN
console.log(area());//Retorna NaN
console.log(area(2, 3, 17, 22, 44)); // Retorna 6 pega apenas os dois valores , o que as váriaveis criadas conseguem armazenas 1 valor por váriavel 
console.log(area(5, 5)); // retorna 25 mas estrapola o valor que é > que 20 e retorna valor a cima do permitido e retorna undefined.
