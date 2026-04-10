// aula sobre constantes
/*
 nao criar constantes com palavras reservadas
 nao redeclarar constante
 criar constantes com nomes significativos (ex: nomeCompleto, idadeUsuario, faceis de entender)
 nao criar constantes comecando com numero
 nao usar espacos ou traços (ex: nome-completo, nome completo)
 usar camelCase para constantes com mais de uma palavra (ex: nomeCompleto, idadeUsuario)
 Case-sensitive (ex: nomeCompleto e nomecompleto sao constantes diferentes)
 nao modificar o valor de uma constante
 */

const nome = 'Arthur'; // declarando e atribuindo valor a constante (obrigatorio)
console.log(nome);

// operadores matematicos (/ + - * %)
const numeroUm = 1;
const numeroDois = 5;
const soma = numeroUm + numeroDois; 
const somaDois = soma * 3; 
console.log(soma);
console.log(somaDois);

// o JS possui tipagem dinamica (nao precisa declarar o tipo da variavel, o JS entende o tipo a partir do valor atribuido)
const texto = 'Olá, mundo!';
console.log(typeof texto); // string