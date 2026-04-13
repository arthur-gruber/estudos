/* Operadores aritmeticos
+ Adicao ou concatenacao
- Subtracao
* Multiplicacao
/ Divisao
** Potenciacao
% Resto da divisao
*/


/* Precedencia dos operadores
1. ()
2. **
3. * / %
4. + -
*/

let contador = 1;
contador ++; //2
++contador; //3
--contador; //2
console.log(contador);

const passo = 2;
contador = contador + passo;
console.log(contador);

contador += passo; // contador = contador + passo
console.log(contador);

// NAN - Not a Number
const num1 = 10;
const num2 = parseInt('2'); // ou parseFloat('2.5') para ter numeros com mais casas decimais. Ainda e possivel usar Number('2') ou Number('2.5')
console.log(num1 + num2); 