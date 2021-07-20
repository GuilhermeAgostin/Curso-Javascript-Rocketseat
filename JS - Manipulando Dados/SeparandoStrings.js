// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde
// cada texto e uma posicao do array. Depois disso, transforme
// o array em um texto e onde eram espacos, coloque _

let phrase = "Estou seguindo o caminho do sucesso"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUderscore = myArray.join("_")
console.log(phraseWithUderscore.toLowerCase())