// arguments -> sustenta todos os argumentos enviados para a função, mesmo que não sejam declarados
function funcao(a, b = 2, c = 4) {
    // console.log('Sou uma função');
    // console.log(arguments[3]);
    // console.log(arguments);
    // let total = 0;
    // for (let argumento of arguments) {
    //     total += argumento;
    // }
    // console.log(total);
    // console.log(a, b, c, d, e, f);
    // b = b || 0;
    console.log(a + b + c);
    
}
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// funcao(1, 2, 3);
funcao(1, undefined, 10);

console.log('------------------');

function conta(operador, acumulador, ...numeros) {
    // console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);