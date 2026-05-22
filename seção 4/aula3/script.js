// return


function criaMultiplicador(multiplicador) { // --> multiplicador e o parâmetro da função
    return function(n) { // --> n é o parâmetro da função interna
        return n * multiplicador; // --> multiplicador é a variável do escopo da função externa
    }
}

const duplica = criaMultiplicador(2); // --> chama a funcao criaMultiplicador e passa o valor 2 como argumento, o que significa que a função interna irá multiplicar o valor de n por 2
const triplica = criaMultiplicador(3); // --> chama a funcao criaMultiplicador e passa o valor 3 como argumento, o que significa que a função interna irá multiplicar o valor de n por 3
const quadriplica = criaMultiplicador(4); // --> chama a funcao criaMultiplicador e passa o valor 4 como argumento, o que significa que a função interna irá multiplicar o valor de n por 4

console.log(duplica(5)); // --> chama a função duplica e passa o valor 5 como argumento, o que significa que a função interna irá multiplicar o valor de n por 2, resultando em 10
console.log(triplica(5));
console.log(quadriplica(5));