# Tipos de dados

* Gramática
    * Elementos da linguagem e suas combinações
    * A arte de falar e escrever corretamente

* Vocabulário
    * Conjunto de termos e expressões
    * Agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo, para crescer nosso vocabulário.


### Como vai ser a dinâmica do aprendizado?

* Conceitos e escrita

> Vamos aprender os tipos de dados mais utilizados na linguagem
    * Você sabia que é possível aprender 80% de uma lingua nova, com cerca de 20% do vocabulário? (até menos)

-------------------------------------------------------------------------------------------------------------------

## String - Template literals ou template strings

```js
    console.log(`Nda ${1+1}`); // colocar expressões dentro do template literal é chamado de interpolação

    // Resposta:"Nda 2"

```
-------------------------------------------------------------------------------------------------------------------

## Number

    33 ***** - inteiro
    12.5 *** - reais
    NaN **** - Not a Number
    Infinity - infinito

-> Inteiro e reais ->

```js
    console.log(12.5 + 12); 
```

-> Not a number ->

    Se eu for tentar fazer algum calculo com um numero com uma string eu nao vou conseguir, vai dar o seguinte resultado:

```js
    console.log(12.5 / "asfgsg"); 
```

-> Infinity ->

```js
    console.log(12.5 === Infinity); 
```

```js
    console.log(Infinity); 
```

-------------------------------------------------------------------------------------------------------------------

## Boolean

    true ou false

-------------------------------------------------------------------------------------------------------------------

## Undefined vs null

    Undefined -> Indefinido/ não existe

    Null -> existe mas não tem nada dentro dele/ nulo/ objeto que não possui nada dentro/ diferente de indefinido

```js
    console.log(undefined); 
```

```js
    console.log(null); 

    console.log(null === undefined);
```

-------------------------------------------------------------------------------------------------------------------

## Object

    Objeto
    Propriedades    -> Atributos
    Funcionalidades -> Métodos

    { propriedade: "valor" }

```js
    console.log({
        name: "Guilherme",
        idade: 24,
        andar: function(){
            console.log('andar')
        }
    });

    { 
        andar: function(){
            console.log('');
            },
        name: "Guilherme",
        idade: 24
    }

```
-------------------------------------------------------------------------------------------------------------------

## Array (vetores)

    * Lista
    * Agrupamento de dados

    ["Mayk", 36]

```js
    console.log(["Mayk", 36])
    ["Mayk",36]
```
-------------------------------------------------------------------------------------------------------------------

```js
    console.log(["Leite",
     "Ovos",
     "Farinha",
     ])
    ["Leite","Ovos","Farinha"]
```

---------------------------------------------------------------

```js
    console.log(["Leite",
     "Ovos",
     "Farinha",
     2,
     3
     ])

    ["Leite","Ovos","Farinha",2,3]
```
