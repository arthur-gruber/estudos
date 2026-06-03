function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tmp) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value');
        setTimeout(() => {
            resolve(msg);
        }, tmp);

    })

}

esperaAi('Conexao com o banco 1', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(213, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Exibindo os dados');
})
    .catch(e=> {
        console.log('Erro:', e);
    });

console.log('Isso aqui será exibido antes de qualquer promise');

// executa em ordem, pois o próximo só é executado quando o anterior termina, porem quando se tem muitos callbacks fica dificil de ler e entender o codigo
// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });

// executa aleatoriamente, não tem ordem de execução, pois o tempo é aleatório
// esperaAi('Frase 1', rand(1, 3));
// esperaAi('Frase 2', rand(1, 3));
// esperaAi('Frase 3', rand(1, 3));