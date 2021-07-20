// function hoisting

sayMyName();

function sayMyName(){
    console.log("Jose");
}

// chamando a funcao antes de declarar ainda assim funciona, sofre o hoisting

// se eu colocar:

/*
 const sayMyName = function(){
    console.log("Jose");
}

// vai dar erro de referencia por estar usando a palavra const

*/


