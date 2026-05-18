// escrever uma funcao que recebe um numero e retorna o seguinte:
// checar se o numero for realmente um numero, caso contrario, retornar "o valor deve ser um numero"
// se o numero for divisivel por 3, retorna "fizz"
// se o numero for divisivel por 5, retorna "buzz"
// se o numero for divisivel por 3 e 5, retorna "fizzbuzz"
// se o numero nao for divisivel por nenhum dos dois, retorna o proprio numero
// usar a valores entre 0 e 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
    if (numero % 3 === 0) return "fizz";
    if (numero % 5 ===0) return "buzz";
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}