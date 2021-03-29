// Utilização de Strings para formulação de palavras
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome+ '!'

// Template String, onde é possivel 
const template = ` 
    Olá
    ${nome}!`

console.log(concatenacao, template)

//expressões

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase() //Existe a possibilidade de usar funções em template string
console.log(`Ei... ${up('cuidado')}!`)