// Manipulando strings

//Verificar se o texto contém a palavra amor

let phrase = "Eu quero jogar amor!"
console.log(phrase.includes("Amor")) // retorna falso porque nao tem essa palavra na string
                                     // agora mesmo se possuir a palavra amor, vai retornar 
                                     // false porque esta em letras maiúsculas - o include é case sensity