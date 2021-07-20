/* 
    Expressões e Operadores
    - Expressions
    · Operators
      Binary
      Unary
      Ternary
*/

// esse é um dos casos que é obrigatorio usar o ponto e virgula, no final da expressão
// sem o ponto de virgula o javascript iria enternder que estou chamando uma funcao dentro de outra funcao
// nesse caso essa acao retornaria um erro

/*

let number = 1;

(function () {
console.log('alo')
}) // funcao auto executavel

*/

// Operador binario

let number = 1 // se eu nao atribuir nenhum valor, vai me retornar NotANumber
console.log(number + 1) // operador binario porque sao dois valores que preciso para o operador estar entre eles

// Operador Unario

let number1 = 2
console.log(++number1) // Operador unario vou ter so um valor e recebo algum tipo de operador

// Operador ternario 

let number2 = 3
console.log(true ? 'alo' :  'nada') 