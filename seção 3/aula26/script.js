const pessoa = {
    nome : 'Arthur',
    sobrenome : 'Costa',
    idade : 23,
    endereco : {
        rua : 'Rua da fonte',
        numero : 180
    }
};
// Atribuicao via desestruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade); 
const { endereco : { rua, numero } } = pessoa; // Desestruturação aninhada
console.log(rua, numero);