const pessoa = {
    nome : 'Arthur',
    sobrenome : 'Costa',
    idade : 23
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
    

// const frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi'];

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }