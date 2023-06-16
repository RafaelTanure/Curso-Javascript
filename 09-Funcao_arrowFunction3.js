let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);//Retorna true

const obj = {}
comparaComThis = comparaComThis.bind(obj); //Retorna false 
comparaComThis(global);//Retorna true
comparaComThis(obj);//Retorna false

let comparaComThisArrow = param => console.log(this === param);
comparaComThis(global); // Retornar true 
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(); 
comparaComThisArrow(obj); // Retorna false
comparaComThisArrow(module.exports);// Retorna true 
