// validador de cpf
// 351.493.470-35 -> 35149347035 
// 3x 5x 1x 4x 9x 3x 4x 7x 0x 
// 10  9  8  7  6  5  4  3  2
// 30 45 8 28 54 15 16 21 0 -> soma = 217
// 11 - (217 % 11) = 11 - 8 = 3 -> primeiro digito
//
// 3x 5x 1x 4x 9x 3x 4x 7x 0x 3x
// 11 10 9  8  7  6  5  4  3  2
// 33 50 9 32 63 18 20 28 0  6 -> soma = 259
// 11 - (259 % 11) = 11 - 6 = 5 -> segundo digito


function ValidarCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
};

ValidarCPF.prototype.validar = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidarCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidarCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidarCPF('351.493.470-35');

if (cpf.validar()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}