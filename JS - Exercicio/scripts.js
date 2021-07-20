// 1. Declare uma variável de nome weight

// var weight; // var têm escopo global ou escopo de função.
let weight; // let têm escopo de bloco, instrução ou expressão

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight);

/*
    3. Declare uma variável e atribua valores para cada
    um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
    * 
    * let name = "João";
    * let age = 52;
    * let stars = 8.5;
    * let isSubscribed = true;

    console.log(typeof name);

*/


// 4. A variável student abaixo é de que tipo de
// dados?

let student = {};
console.log(typeof student);
//Variavel do tipo objeto 


// 4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

let student = { name : "João",
                age : 52,
                weight : 8.5,
                isSubscribed : true
              };

console.log(student);

// 4.2 Mostre no console a seguinte mensagem:

// <name> de idade <age> pesa <weight> kg.

// Atencao, substitua name, age e weight pelos valores de cada propriedade do objeto

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`); // interpolacao de valores

/*
   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,
   somente o array vazio
*/

let students = [];

/*
    6. Reatribua valor para a variável acima, colocando
    dentro dela o objeto student da questão 4. (Não
    copiar e colar o objeto, mas usar o objeto criado e
    inserir ele no Array)
*/


students = [student];

console.log(students);


/*
7. Coloque no console o valor da posição zero do
Array acima
*/

console.log(students[0]);


// 8.Crie um novo student e coloque na posição 1 do Array students

const john = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isSubscribed: false
}

students = [student, john]; // ou
//students[1] = john;

console.log(students[1]);