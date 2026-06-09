// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregarElementosNaPagina(json));

axios('pessoas.json')
  .then(resposta => carregarElementosNaPagina(resposta.data));

function carregarElementosNaPagina(json) {
    const table = document.createElement('table');

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.innerHTML = pessoa.nome;
        tr.appendChild(tdNome);

        const tdIdade = document.createElement('td');
        tdIdade.innerHTML = pessoa.idade;
        tr.appendChild(tdIdade);

        const tdSalario = document.createElement('td');
        tdSalario.innerHTML = pessoa.salario;
        tr.appendChild(tdSalario);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}