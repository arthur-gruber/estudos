// prototypes

// new object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'B'
//     __proto__: objA
// };

// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10);

console.log(p1);
console.log(p2);


const p3 = Object.create(Produto.prototype, {
    nome: {
        value: 'sapato',
        writable: true,
        configurable: true,
        enumerable: true
    },
    preco: {
        value: 100,
        writable: true,
        configurable: true,
        enumerable: true
    }
    
});
p3.desconto(20);
console.log(p3);