// Constructor function => funcao que cria objetos
// Factory function => funcao que retorna objetos
// Constructor => Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' ' + this.sobrenome + 'Sou um método');
    }

}

const p1 = new Pessoa('Arthur', 'Costa');
const p2 = new Pessoa('Maria', 'Silva');

console.log(p1);
console.log(p2.nome, p2.sobrenome);
console.log(p1.metodo());