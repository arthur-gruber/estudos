// Array's        1        2        3       4      <-- Índice
const alunos = ['João', 'Maria', 'Pedro', 'Ana'];
console.log(alunos);
console.log(alunos[2]);

alunos[2] = 'Carlos';
console.log(alunos[2]);

alunos.push('Luiza');
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.unshift('Luiza');
console.log(alunos);