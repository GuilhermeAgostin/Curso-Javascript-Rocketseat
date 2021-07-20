/*
    Function() constructor

    * Expressão new 
    * criar novo objeto
    * this keyword
*/

function Person (name) {
    this.name = name;
    this.walk = function() {
    return this.name + " está andando"
    };
}

const mayk = new Person ("Mayk");
const joao = new Person("Joao");
console.log(mayk.walk());
console.log(joao.walk());