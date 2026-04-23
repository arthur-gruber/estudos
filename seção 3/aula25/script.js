// (...) rest or spread operator
// const numeros = [100, 200, 300, 400, 500];
// const [primeiroNumero, segundoNumero, ...restante] = numeros; // Operador rest (...) pega o restante dos elementos do array
// console.log(primeiroNumero, segundoNumero);
// console.log(restante);
//                     0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];  
const [lista1, lista2, lista3] = numeros;
// console.log(numeros[0][2]);
console.log(lista1[2]);
