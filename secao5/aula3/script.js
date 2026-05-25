// concatenação de arrays
const n1 = [1, 2, 3];
const n2 = [4, 5, 6];
// const n3 = n1 + n2;

// const n3 = n1.concat(n2, [7, 8, 9], 'teste'); // concatena os dois arrays 
const n3 = [...n1, ...n2, ...[7, 8, 9], 'teste']; // Spread operator para concatenar os arrays e adicionar novos elementos

console.log(n3);