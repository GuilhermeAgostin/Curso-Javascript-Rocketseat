// manipulando arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim

/* console.log(techs.push("nodejs")) // ja sabe qual é o ultimo elemento e puxa o novo valor para o ultimo */

// adicionar no começo

techs.unshift("sql")

// remover do fim

/* techs.pop() */

// remover do começo

/* techs.shift() */

// pegar somente alguns elementos do array

/* console.log(techs.slice(1,3)) // posicao inicial e final (a final é a quantidade inteira que queremos) -> ["css", "js"] */

// remover 1 ou mais items em qualquer posição do array

/* console.log(techs)
    console.log(techs.splice(1,1)) // deixando dessa forma eu tiro o elemento 1 e apenas ele // o segundo valor dentro do metodo se refere a quantidade que voce quer tirar
    console.log(techs.splice(1,2))
*/

// encontrar a posição de um elemento no array

let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)




