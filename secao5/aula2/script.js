const nomes = ["João", "Maria", "Pedro", "Ana", "Lucas"];

const removidos = nomes.splice(3, 1, 'Luiz'); // primeiro parametro e o indice a ser removido e o segundo e a quantidade de elementos a serem removidos
console.log(nomes, removidos); // splice retorna um array pois pode remover mais de um elemento 
