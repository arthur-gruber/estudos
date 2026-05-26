// map -> sempre tera o mesmo numero de elementos do array original

const numeros = [21, 32, 31, 44, 87, 1, 2, 5, 9, 92];
const dobro = numeros.map(valor => valor * 2);
// console.log(dobro);

const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 30 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Carlos', idade: 35 }
];

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

// const id = pessoas.map((obj, index) => {
//     obj.id = index; // modifica o objeto original
//     return obj;
// });
// console.log(id);

const id = pessoas.map((obj, index) => {
    newObj = { ...obj }; // criando um novo objeto para evitar modificar o original
    newObj.id = index; 
    return newObj;
});

console.log(id);
console.log(pessoas);
