const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai); // Passo o prototipo a partir do objeto que foi criado o object.creat
filha1.nome = 'Ana'; // temos um objeto normal 
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, { // Passamos o obejto pai aqui 
    nome: { value: 'Bia', writable: false, enumerable: true } // definimos valores 
})

console.log(filha2.nome); 
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1));  // O que aparece no quis 
console.log(Object.keys(filha2));

for (let key in filha2) { // Verificação se a propriedade pertence ou não ao objeto que está pecorrendo no momento 
    filha2.hasOwnProperty(key) ? // formar que temos para saber se um determinado atributo veio por heranca do objeto 
        console.log(key) : console.log(`Por Herança : ${key} `)
}
