//closure

function retornaFuncao() {
    const nome = 'Arthur';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
// console.log(funcao);
console.log(funcao());