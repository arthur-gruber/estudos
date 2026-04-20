// Objetos
/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome : nome,
        sobrenome : sobrenome,
        idade : idade
    };
}
const pessoa1 = criaPessoa('Arthur', 'Gruber', 23);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
const pessoa2 = criaPessoa('Joao', 'Pessoa', 30);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
*/

const pessoa1 = {
    nome : 'Arthur',
    sobrenome : 'Gruber',
    idade : 23,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};

pessoa1.fala();