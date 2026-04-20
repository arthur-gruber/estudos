let varA = 'A'; // -> B
let varB = 'B'; // -> C
let varC = 'C'; // -> A

console.log(varA, varB, varC); // A B C

let varTemp = varA; 
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC); // B C A

/* 
[varA, varB, varC] = [varB, varC, varA];
*/