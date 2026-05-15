const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {

    if (numero === 2) {
        continue; // Pula a iteração atual e continua para a próxima
    }
    
    if (numero === 4) {
        break; // Encerra o loop completamente
    }

    console.log(numero);
}