// declaracao de funcao
falaOi();

function falaOi() {
    console.log('Oi');
};

// first class objects

const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua funcao abaixo:');
    funcao();
}
executaFuncao(souUmDado);


// arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();