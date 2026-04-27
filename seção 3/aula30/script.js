const nome = ['Arthur', 'Maria', 'João'];

// for tradicional - Geralmente com iteraveis (array, string)
// for in - Retorna o indice ou chave (string, array, objetos)
// for of - Retorna o valor em si (iteraveis, arrays ou strings)

// for tradicional
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('------------------');

// for in
for (let i in nome) {
    console.log(nome[i]);
}

console.log('------------------');

// for of
for (let valor of nome) {
    console.log(valor);
}

console.log('------------------');

// forEach
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});