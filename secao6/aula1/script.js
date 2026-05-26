// const pessoa = {
//     nome: 'Arthur',
//     sobreNome: 'Costa',
//     idade: 23
// };

// const chave = 'nome';

// console.log(pessoa['nome']);
// console.log(pessoa[chave]);
// console.log(pessoa.nome);
// console.log(pessoa.sobreNome);
// console.log(pessoa.idade);


// const pessoa1 = new Object();
// pessoa1.nome = 'Arthur';
// pessoa1.sobreNome = 'Costa';
// pessoa1.idade = 23;

// pessoa1.falarNome = function() {
//     return(`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1){
//     // console.log(chave);
//     console.log(pessoa1[chave]);
// }



// Factory function / Constructor function / Classes

// function criarPessoa(nome, sobreNome) { 
//     return {
//         nome, sobreNome, 
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobreNome}`;
//         }
//     };
// }

// const p1 = criarPessoa('Arthur', 'Costa');
// console.log(p1.nomeCompleto);


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Arthur', 'Costa');
console.log(p1.nome, p1.sobrenome);