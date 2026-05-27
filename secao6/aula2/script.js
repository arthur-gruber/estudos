// defineProperty, defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { // Object.defineProperty -> define uma propriedade
        enumerable: true, // true -> mostra a chave
        value: estoque, // valor
        writable: false, // true -> pode alterar o valor
        configurable: false // configurável, e possivel redefinir a propriedade (deletar ou alterar as configurações)
    });

    Object.defineProperties(this, { // Object.defineProperties -> define várias propriedades
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500; -> se writable for false o valor nao altera
// delete p1.estoque; -> se configurable for false a chave nao é deletada
// console.log(p1);

console.log(Object.keys(p1)); // mostra as chaves do objeto, se enumerable for false a chave nao aparece

for (let chave in p1) {
    console.log(chave);
}
