function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tmp) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') {
            reject('Bad value');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tmp);

    })
}

const promises = [
    // 'primeiro valor', -> no race, se nao comentar vai retornar esse valor, pois é o primeiro a ser resolvido
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(1000, 1000),
    // 'outro valor'
]

// promise.all() -> retorna um array com o resultado de todas as promises, ou seja, espera todas serem resolvidas, ou rejeitada se alguma for rejeitada
// Promise.all(promises).then(function (valor) {
//     console.log(valor);
// })
//     .catch(e => {
//         console.log(e);
//     });

// promise.race() -> retorna a primeira promise resolvida, ou seja, a mais rápida, seja ela sucesso ou rejeitada
Promise.race(promises).then(function (valor) {
    console.log(valor);
})
    .catch(e => {
        console.log(e);
    });


function baixaPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.resolve('Página em cache');
    }
    else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e =>
    console.log(e));