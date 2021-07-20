// Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person)
console.log(person.name) 

console.log(`${person.name} tem ${person.age} anos.`)

//Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: "Cat",
        age: 3
    }
    
]

//como acessar valores dentro array?
// pegando a posição do array
console.log(animals[0])

//total de elementos do array
console.log(animals.length)

//pegando a posicao do array e acessando seus valores
console.log(animals[2].name)

// se tentar acessar o primeiro item do array vai retornar undefined
console.log(animals[1].name)