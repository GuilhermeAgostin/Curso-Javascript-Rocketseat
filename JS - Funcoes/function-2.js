// function expression
// function anonymous

/*

// parametros da funcao (parameters)
const sum = function(number1, number2)
{
    console.log(number1 + number2)
}

sum(2,3); // argumentos da funcao executada

let number1 = 34;
let number2 = 25;
sum(number1, number2);
console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum (number1, number2)}`); 

// aqui a soma resultaria undefined por ainda estar construindo a string, 
// como nao tem return, ele nao vai retornar nada

*/

// parametros da funcao (parameters)

const sum = function(number1, number2)
{
    total = number1 + number2  
    return total
}

sum(2,3); // argumentos da funcao executada

let number1 = 34;
let number2 = 25;
sum(number1, number2);
console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum (number1, number2)}`);

// Evitar o uso de var