const numeros = [21, 32, 31, 44, 87, 1, 2, 5, 9, 92];
const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador + valor, 0);
console.log(numerosPares);

// [ 32, 44, 2, 92 ] -> pares
// [ 64, 88, 4, 184 ] -> dobro
// 340 -> soma