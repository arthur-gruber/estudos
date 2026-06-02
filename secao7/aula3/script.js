class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // chama o construtor da classe pai, ou seja, da classe DispositivoEletronico
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temCamera){
        super(nome);
        this.temCamera = temCamera;
    }
}

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1);

const s1 = new Smartphone('iPhone', 'preto', '17 PRO');
s1.ligar();
console.log(s1);