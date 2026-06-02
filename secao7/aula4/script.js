class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        if (this.volume >= 100){
            return;
        }
        this.volume += 2;
    }

    // metodo de instancia, precisa de uma instancia para ser chamado
    diminuirVolume() {
        if (this.volume <= 0){
            return;
        }
        this.volume -= 2;
    }

    // metodo estatico, nao precisa de uma instancia para ser chamado
    static trocaPilha() {
        console.log('trocar a pilha');
    }
}

const c1 = new ControleRemoto('LG');

for (let i = 0; i < 100; i++) {
    c1.aumentarVolume();
}

ControleRemoto.trocaPilha();
console.log(c1);