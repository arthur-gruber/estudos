// reduce

const numeros = [21, 32, 31, 44, 87, 1, 2, 5, 9, 92];
// pares ou impares, para retornar pares (valor % 2 === 0) ou impares (valor % 2 !== 0)
// const total = numeros.reduce(function(acumulador, valor, index, array){
//     if(valor % 2 === 0) acumulador.push(valor); // mais facil utilizar filter
//     return acumulador;
// }, []);

//dobro de valores
// const total = numeros.reduce(function(acumulador, valor, index, array){
//     acumulador.push(valor *2); // da pra fazer com map
//     return acumulador;
// }, []);

//soma de valores
const total = numeros.reduce(function(acumulador, valor, index, array){
    acumulador += valor;
    return acumulador;
});
// console.log(total);



const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 30 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Carlos', idade: 35 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);