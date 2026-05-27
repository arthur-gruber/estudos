// Construtor de Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Métodos de aumento e desconto para o Produto
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

// Construtor de Camiseta, que herda de Produto
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // Estabelece a herança de Produto para Camiseta
Camiseta.prototype.constructor = Camiseta; // Corrige a referência do construtor

// Sobrescreve o método de aumento para a Camiseta, aplicando um percentual ao inves de valores fixos
Camiseta.prototype.aumento = function (percentual) {
    this.preco += this.preco * (percentual / 100);
}

// Construtor de Caneca, que herda de Produto
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () { return estoque ;},
        set: function (valor) { 
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype); // Estabelece a herança de Produto para Caneca
Caneca.prototype.constructor = Caneca; // Corrige a referência do construtor

const produto = new Produto('generico', 100);
const camiseta = new Camiseta('Camisa', 50, 'Branca');
const caneca = new Caneca('Caneca', 30, 'Vidro', 10);
camiseta.aumento(10); // percentual -> vem da linha 24, se comentar fica fixo como descrito na linha 8
caneca.desconto(5); // valor fixo -> linha 11

console.log(produto);
console.log(camiseta);
console.log(caneca);