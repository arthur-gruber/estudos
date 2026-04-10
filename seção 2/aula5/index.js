// exercicio de fixação


const nome = 'Arthur';
const sobreNome = 'Costa';
const idade = 23;
const peso = 62;
const altura = 1.65;
let imc = peso / (altura * altura);
let anoNascimento = 2026 - idade;
//console.log(nome, sobreNome, 'tem', idade, 'anos e nasceu em', anoNascimento, 'pesa', peso, 'kg e seu imc é', imc);


// template strings
console.log(`${nome} ${sobreNome} tem ${idade} anos e nasceu em ${anoNascimento}, pesa ${peso} kg e seu imc é ${imc}`);