const produto = { nome: 'caneca', preco: 10 };

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto);

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));