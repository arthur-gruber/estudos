function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
}

Conta.prototype.verSaldo = function () {
    console.log(`Agência: ${this.agencia} - Conta: ${this.conta} - Saldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

const contac = new ContaCorrente(11, 22, 0, 100);

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contap = new ContaPoupanca(11, 33, 0);
contap.depositar(10);
contap.sacar(110);
contap.sacar(1);