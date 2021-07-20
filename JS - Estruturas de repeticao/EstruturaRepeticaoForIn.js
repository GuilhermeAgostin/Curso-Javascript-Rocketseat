// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(property) // cada propriedade do objeto 
    console.log(person.name) // acessando nome
    console.log(person[property])
}