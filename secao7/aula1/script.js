// classes

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

        falar() {
        console.log(`${this.nome} está falando.`);
    }

}

function Pessoa2(nome, sobrenome) { // função construtora
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`);
}

const pessoa1 = new Pessoa('arthur', 'costa');
console.log(pessoa1.falar());

const pessoa2 = new Pessoa2('maria', 'silva');
console.log(pessoa2.falar());
