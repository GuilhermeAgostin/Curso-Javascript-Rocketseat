// throw -> disparar lancar

//try -> tentar

//catch -> pegar

function sayMyName(name = '') {
    
    if (name === '') {

        //throw new Error("") // padrao
        throw 'Nome é obrigatório' 
    }
    console.log('depois do erro')
}

// try...catch
try {
    sayMyName()
}

catch (e) {
    console.log(e)
}

console.log('Após a função de erro')
