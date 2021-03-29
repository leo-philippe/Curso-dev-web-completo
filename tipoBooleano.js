let isAtivo = false //Usa-se o let para que não seja necessario ficar declarando que é uma variavel
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //ao usarmos esclamação 1-! = False - Negação
                                            // 2-!! = True - Afirmação

console.log('Os verdadeiros...')
console.log(!!3) //Numeros
console.log(!!-1) // Numeros negativos
console.log(!!' ')// Qualquer caracter
console.log(!![]) //Arrays
console.log(!!{})
console.log(!!Infinity) // Valores infinitos
console.log(!!(isAtivo = true))//comparações

console.log('Os Falsos...')
console.log(!!0) //Zerom resulta em falso
console.log(!!'')//Caracter vazio é falso
console.log(!!null)//Nulos
console.log(!!NaN)//Not a Number é falso
console.log(!!undefined)//Indefinido
console.log(!!(isAtivo= false))//Retorno da atribuição sendo falso é falso

console.log('Pra Finalizar...')
console.log(!!('' || null || 0 || 'epa' ))//Ele retornará o primeiro valor verdadeiro encontrado

let nome = ''

console.log(nome || 'Desconhecido')