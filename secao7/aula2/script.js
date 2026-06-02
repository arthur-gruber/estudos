// getters and setters

const _velocidade = Symbol('velocidade'); // simbolo para criar uma propriedade privada, ou seja, não acessível fora da classe

class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = velocidade;
    }

    set velocidade(valor) { 
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor < 0 || valor > 100) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Fusca', 0);
for (let i = 0; i <= 200; i++) {
    carro1.acelerar();
}

// carro1.velocidade = 200; // antes de ter o get o valor exibido era esse. agora com o get o valor exibido sera o valor maximo da velocidade, 100, pelo limite do metodo acelerar
carro1.velocidade = 99; // agora o valor e exibido pelo fato de estar entre 0 e 100, o que é permitido pelo set
console.log(carro1.velocidade); 