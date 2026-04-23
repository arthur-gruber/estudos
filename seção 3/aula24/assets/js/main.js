// const h1 = document.querySelector('.container h1');
// const dia = new Date().getDate();
// const mes = new Date().getMonth();
// const ano = new Date().getFullYear();
// const hora = new Date().getHours();
// const minutos = new Date().getMinutes();
// const diaSemana = new Date().getDay();

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'segunda-feira';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'terça-feira';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'quarta-feira';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'quinta-feira';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'sexta-feira';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'sábado';
//             return diaSemanaTexto;
//         default: diaSemanaTexto = '';
//     }
// }

// function getMesTexto(mes) {
//     let mesTexto;

//     switch (mes) {
//         case 0: mesTexto = 'janeiro';
//             return mesTexto;
//         case 1: mesTexto = 'fevereiro';
//             return mesTexto;
//         case 2: mesTexto = 'março';
//             return mesTexto;
//         case 3: mesTexto = 'abril';
//             return mesTexto;
//         case 4: mesTexto = 'maio';
//             return mesTexto;
//         case 5: mesTexto = 'junho';
//             return mesTexto;
//         case 6: mesTexto = 'julho';
//             return mesTexto;
//         case 7: mesTexto = 'agosto';
//             return mesTexto;
//         case 8: mesTexto = 'setembro';
//             return mesTexto;
//         case 9: mesTexto = 'outubro';
//             return mesTexto;
//         case 10: mesTexto = 'novembro';
//             return mesTexto;
//         case 11: mesTexto = 'dezembro';
//             return mesTexto;
//     }

// }

// function dataTexto(dia, mes, ano, hora, minutos, diaSemana) {
//     const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
//     const mesTexto = getMesTexto(mes);
//     return `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minutos}`;
// }

// h1.innerHTML = dataTexto(dia, mes, ano, hora, minutos, diaSemana);

// refatorando o código acima
const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);