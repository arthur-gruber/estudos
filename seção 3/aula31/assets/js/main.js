const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; // pegando a cor de fundo do body e aplicando nos parágrafos
    p.style.color = '#fff'; // aplicando a cor branca nos parágrafos para ter contraste com o fundo
}