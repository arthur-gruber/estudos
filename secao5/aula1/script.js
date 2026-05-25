// Valores por referencia
const nomes = ["João", "Maria", "Pedro", "Ana", "Lucas"];
// const novos = nomes;
const novos = [...nomes]; // Spread operator para criar uma cópia do array

novos.pop();
console.log(nomes); 
console.log(novos);

// console.log(nomes); 
// nomes[3] = "Teste";
// console.log(nomes[3]); 
// delete nomes[2]; // Remove o elemento na posição 2 (Pedro)
// console.log(nomes);
